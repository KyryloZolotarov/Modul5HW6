import React, {ReactElement, FC, useState} from "react"
import {
    CircularProgress,
    Container,
    Grid,
    Button
} from '@mui/material'
import * as userApi from "../../api/modules/users"
import {IUserDataRequest} from "../../api/models/userDataUpload"
import { IUserCreateResponse} from "../../interfaces/userCreateResponse";
import TextField from '@mui/material/TextField';
import UserDataDisplay from "./components";

const UserCreate: FC<any> = (): ReactElement => {
    const [userCreate, setUserUpdate] = useState<IUserDataRequest | null>(null)
    const [user, setUser] = useState<IUserCreateResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)

    function buttonClicked() {
        console.log(userCreate)
        if(userCreate) {
        const createUser = async () => {
            try {
                setIsLoading(true)
                console.log("hyi")
                const res = await userApi.createUser(userCreate)
                setUser(res)
                setSubmit(true)
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.message)
                }
            }
            setIsLoading(false)            
        }
        createUser()
    }
    }

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {!submit ? (
                    <>
                        <label>Enter your name:
                        <TextField
                            required
                            id="name"
                            label="User Name"
                            onChange={e => setUserUpdate({name: e.target.value, job : userCreate !== null ? userCreate.job:""})}
                        />
                        <TextField
                            required
                            id="job"
                            label="User Job"
                            onChange={e => setUserUpdate({name: userCreate !== null ? userCreate.name:"", job: e.target.value})}
                        />
                        </label>
                        <Button onClick={()=> buttonClicked()} variant="outlined">Submit</Button>
                    </>
                ) : (
                    isLoading ? (
                        <CircularProgress />
                    ) : (
                    <Container>
                    <Grid container spacing={4} justifyContent="center" m={4}>
                        {
                            <UserDataDisplay{...user}/>
                        }
                    </Grid>
                </Container>
                )
            )}
            </Grid>
        </Container>
    );
};

export default UserCreate;