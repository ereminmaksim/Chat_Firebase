import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";


const Login = () => {
    // Деструктуризация
    const {auth} = useContext(Context);
    // Для Логина
    const login =async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider)
        console.log(user)
    }



    return (
        <Container>

            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justify={"center"}
            >
                <Grid style={{width: 400, background: 'lightblue', borderRadius: 18}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >

                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google`Account</Button>
                    </Box>

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
