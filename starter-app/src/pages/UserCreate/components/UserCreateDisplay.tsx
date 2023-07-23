import React, {ReactElement, FC} from "react";
import {
    Container,
    Grid,
} from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const UserCreateDisplay: FC<any> = (props): ReactElement => {
   return(
    <Container>
        <Grid container spacing={4} justifyContent="center" m={4}>
            {
                <>
                <List>
                    <ListItem>
                        <ListItemText
                        primary={props?.name}
                        />
                    </ListItem>
                    <ListItem>
                     <ListItemText
                       primary={props?.job}
                      />
                    </ListItem>
                    <ListItem>
                     <ListItemText
                       primary={props?.id}
                      />
                    </ListItem>
                    <ListItem>
                     <ListItemText
                       primary={props?.createdAt}
                      />
                    </ListItem>
                </List>
                </>}
        </Grid>
    </Container>
   );
  }
  
  export default UserCreateDisplay