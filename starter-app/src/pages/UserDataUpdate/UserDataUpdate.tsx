import React, {ReactElement, FC, useState} from "react"
import {
    CircularProgress,
    Container,
    Grid,
    Button
} from '@mui/material'
import * as userApi from "../../api/modules/users"
import {IUserDataRequest} from "../../api/models/userDataUpload"
import { IUserUpdateResponse} from "../../interfaces/userUpdateResponse";
import {useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';
import UserDataDisplay from "./components";

const UserDataUpdate: FC<any> = (): ReactElement => {
    const [userUpdate, setUserUpdate] = useState<IUserDataRequest | null>(null)
    const [user, setUser] = useState<IUserUpdateResponse | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)
    const { id } = useParams()

    function buttonClicked() {
        console.log(userUpdate)
        if(userUpdate && id) {
        const updateUser = async () => {
            try {
                setIsLoading(true)
                console.log("hyi")
                const res = await userApi.updateUser(userUpdate, id)
                setUser(res)
                setSubmit(true)
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.message)
                }
            }
            setIsLoading(false)            
        }
        updateUser()
    }
    }

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {!submit ? (
                    <>
                        <TextField
                            required
                            id="name"
                            label="User Name"
                            onChange={e => setUserUpdate({name: e.target.value, job : userUpdate !== null ? userUpdate.job:""})}
                        />
                        <TextField
                            required
                            id="job"
                            label="User Job"
                            onChange={e => setUserUpdate({name: userUpdate !== null ? userUpdate.name:"", job: e.target.value})}
                        />
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

export default UserDataUpdate;
