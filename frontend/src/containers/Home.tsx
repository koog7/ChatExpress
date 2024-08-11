import {ChangeEvent, FormEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";
import CardBlock from "../components/CardBlock.tsx";
import {useDispatch} from "react-redux";
import {createPost} from "./Slice/FetchSlice.ts";

const Home = () => {


    const dispatch = useDispatch();
    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')


    const submitPost = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createPost({author:authorText, message:messageText}))
    }

    return (
        <div>
            <div>
                <form style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'25px'}} onSubmit={submitPost}>
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
                    <Button variant="contained" type={"submit"}>Send!</Button>
                </form>
                <div style={{marginTop:'20px'}}>
                    <CardBlock />
                </div>
            </div>
        </div>
    );
};

export default Home;