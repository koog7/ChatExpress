import {createSlice} from "@reduxjs/toolkit";

interface MessageProps {
    author: string;
    message: string;
    loading: boolean;
    error: boolean;
}

const initialState: MessageProps = {
    author: '',
    message: '',
    loading: false,
    error: false,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = false;
        },
    },
    extraReducers: (builder) => {

    },
});


export const ChatReducer = chatSlice.reducer;