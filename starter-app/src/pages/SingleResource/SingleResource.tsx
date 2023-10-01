import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    CircularProgress,
    Container,
    Grid
} from '@mui/material'
import * as resourcesApi from "../../api/modules/resources"
import {IResource} from "../../interfaces/resources"
import {useParams} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const SingleResource: FC<any> = (): ReactElement => {
    const [resource, setResource] = useState<IResource | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()
    const name = 'unknown'

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true)
                    const res = await resourcesApi.getById(name, id)
                    console.log(res)
                    setResource(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }
    }, [id])
    return (
        <Container>
                        <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={resource?.id}
                            />
                        </ListItem>
                        <ListItem>
                         <ListItemText
                           primary={resource?.name}
                          />
                        </ListItem>
                        <ListItem>
                         <ListItemText
                           primary={resource?.color}
                          />
                        </ListItem>
                        <ListItem>
                         <ListItemText
                           primary={resource?.year}
                          />
                        </ListItem>
                        <ListItem>
                         <ListItemText
                           primary={resource?.pantone_value}
                          />
                        </ListItem>
                    </List>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default SingleResource;