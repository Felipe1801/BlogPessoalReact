import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        history('/login')
    }
    return (
        <>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Box className='cursor'>
                        <Typography variant='h5' color='inherit'>
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display='flex' justifyContent='start'>
                        <Link to="/home" className = "text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/posts" className = "text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/tema" className = "text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className = "text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color='white'>
                                Cadastrar temas
                            </Typography>
                        </Box>
                        </Link>
                       
                        <Box mx={1} className='cursor' onClick = {goLogout}>
                            <Typography variant='h6' color='white'>
                                logout
                            </Typography>
                        </Box>
                         
                       
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;