import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosAPI from "../../axios/AxiosAPI.ts";

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


export const createPost = createAsyncThunk<string, { author: string; message: string }>(
    'chat/postMessage',
    async ({ author, message } ) => {
        try {
            console.log('post try auth and msg' , author , message)
            const response = await axiosAPI.post('/messages', {
                author,
                message,
            });
            console.log('response ', response)
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state:MessageProps) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createPost.fulfilled, (state:MessageProps, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = false;
                console.log(action.payload)
                // state.author = action.payload.author;
                // state.message = action.payload.author;
            })
            .addCase(createPost.rejected, (state:MessageProps) => {
                state.loading = false;
                state.error = true;
            })
    },
});


export const ChatReducer = chatSlice.reducer;