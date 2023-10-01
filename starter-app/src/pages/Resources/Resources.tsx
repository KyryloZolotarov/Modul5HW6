import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    CircularProgress,
    Container,
    Grid,
} from '@mui/material'
import * as resourcesApi from "../../api/modules/resources"
import ResourcesTable from "./components";
import {IResource} from "../../interfaces/resources"

const Resources: FC<any> = (): ReactElement => {
    const [resources, setResources] = useState<IResource[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const name = 'unknown'

    useEffect(() => {
            const getAllResources = async () => {
                try {
                    setIsLoading(true)
                    const res = await resourcesApi.getResources(name)
                    setResources(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getAllResources()
    }, [name])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>                    
                              <ResourcesTable {...resources} />
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Resources;

