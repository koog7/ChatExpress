import React, {ChangeEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";
import CardBlock from "../components/CardBlock.tsx";

const Home = () => {

    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')

    return (
        <div>
            <div>
                <form style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'25px'}}>
                    <TextField
                        id="outlined-controlled"
                        label="Author name"
                        value={authorText}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setAuthorText(event.target.value);
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                    <TextField
                        id="outlined-controlled"
                        label="Author message"
                        value={messageText}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setMessageText(event.target.value);
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                    <Button variant="contained">Send!</Button>
                </form>
                <div style={{marginTop:'20px'}}>
                    <CardBlock />
                </div>

            </div>
        </div>
    );
};

export default Home;