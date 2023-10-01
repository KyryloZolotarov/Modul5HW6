import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography,
    Button
} from '@mui/material'
import * as userApi from "../../api/modules/users"
import {IUserData} from "../../api/models/userDataUpload"
import {IUserCreated} from "../../interfaces/userCreateResponse";
import { IUserUpdated } from "../../interfaces/userUpdateResponse";
import {useParams} from "react-router-dom";
import TextField from '@mui/material/TextField';

const UserData: FC<any> = (): ReactElement => {
    const [userUpdated, setUserUpdated] = useState<IUserUpdated | null>(null)
    const [userCreated, setUserCreated] = useState<IUserCreated | null>(null)
    const [user, setUser] = useState<IUserData | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getUser = async () => {
                try {
                    setIsLoading(true)
                    const res = await userApi.getById(id)
                    setUser(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getUser()
        }
    }, [id])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                    <div>
                        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Name"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Job"
        /></div>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default UserData;