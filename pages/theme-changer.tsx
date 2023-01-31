import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Layout } from '../components/layouts';
import Cookies from 'js-cookie'
import axios from 'axios';

interface Props {
    theme: string
}

const ThemeChanger: FC<Props> = ({ theme }) => {
    const [currentTheme, setCurrentTheme] = useState<string>(theme)

    const handleThemeChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCurrentTheme(e.target.value)

        Cookies.set('theme', e.target.value)
    }

    const handleClick = async () => {
        const { data } = await axios.get(`/api/hello`)
    }

    useEffect(() => {
        console.log('using cookies', Cookies.get('theme'))
    },[])
    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <RadioGroup
                            value={currentTheme}
                            onChange={handleThemeChange}
                        >
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark'/>
                            <FormControlLabel value='custom' control={<Radio />} label='Custom'/>
                        </RadioGroup>
                    </FormControl>
                </CardContent>

                <Button
                    variant='outlined'
                    onClick={handleClick}
                >
                    Make a demo request
                </Button>
            </Card>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req}) => {
    
    const { theme = 'light' } = req.cookies
    const validThemes = ['light', 'dark', 'custom']

    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'light'
        }
    }
}

export default ThemeChanger