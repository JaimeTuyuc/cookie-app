import React, { FC } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material'
import NextLink from 'next/link';

export const NavBar:FC = () => {

    return (
        
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>

                <NextLink
                    href={'/'}
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >
                    <Typography variant='h5'>CookieMaster</Typography>
                </NextLink>
                <div style={{ flex: 1 }} />
                <NextLink
                    href={'/theme-changer'}
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >
                    <Typography variant='h6'>Change theme</Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}