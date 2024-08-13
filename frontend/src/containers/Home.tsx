import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import CardBlock from "../components/CardBlock.tsx";
import {useDispatch, useSelector} from "react-redux";
import {createPost, getLastMessages, getMessages} from "./Slice/FetchSlice.ts";
import {RootState} from "../app/store.ts";

const Home = () => {


    const dispatch = useDispatch();
    const [authorText , setAuthorText] = useState('')
    const [messageText , setMessageText] = useState('')
    const {messages, lastDate , loading, error} = useSelector((state: RootState) => state.chat);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch]);

    useEffect(() => {
        setInterval(() => {
            dispatch(getLastMessages(lastDate));
        }, 3000);
    }, [dispatch, lastDate]);
    const submitPost = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(authorText.trim() !== '' && messageText.trim() !== ''){
            dispatch(createPost({author:authorText, message:messageText}))
        }
        setAuthorText('');
        setMessageText('');
    }

    return (
        <div>
            <div id="loader-container" style={{display: loading ? 'block' : 'none'}}>
                <div className="loader"></div>
            </div>
            {error && <div className="error">Something gone wrong...</div>}
            <div>
                <form style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '25px'}}
                      onSubmit={submitPost}>
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
                <div style={{marginTop: '20px'}}>
                    {Array.isArray(messages) ? (
                        messages.map(message => (
                            <CardBlock
                                key={message.id}
                                id={message.id}
                                message={message.message}
                                author={message.author}
                                date={message.date}
                            />
                        ))
                    ) : (
                        <p>No messages available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;