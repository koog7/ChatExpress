import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axiosAPI from "../../axios/AxiosAPI.ts";


interface Message {
    id: string;
    message: string;
    author: string;
    date: string;
}

interface MessageProps {
    messages: Message[];
    lastDate: string;
    loading: boolean;
    error: boolean;
}

const initialState: MessageProps = {
    messages: [],
    lastDate: '',
    loading: false,
    error: false,
};


export const createPost = createAsyncThunk<string, { author: string; message: string }>(
    'chat/postMessage',
    async ({ author, message } ) => {
        try {
            const response = await axiosAPI.post('/messages', {
                author,
                message,
            });
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const getMessages = createAsyncThunk<Message[]>(
    'chat/getMessage',
    async () => {
        try {
            const response = await axiosAPI.get('/messages');
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);
export const getLastMessages = createAsyncThunk<Message[] , string>(
    'chat/getLastMessage',
    async (lastDate: string) => {
        try {
            const response = await axiosAPI.get(`/messages?datetime=${lastDate}`);
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
            .addCase(createPost.fulfilled, (state:MessageProps) => {
                state.loading = false;
                state.error = false;
            })
            .addCase(createPost.rejected, (state:MessageProps) => {
                state.loading = false;
                state.error = true;
            }).addCase(getMessages.pending, (state:MessageProps) => {
                state.loading = true;
                state.error = false;
            }).addCase(getMessages.fulfilled, (state:MessageProps, action: PayloadAction<Message[]>) => {
                state.loading = false;
                state.error = false;
                state.messages = action.payload;
                state.lastDate = action.payload[action.payload.length - 1].date;
            }).addCase(getMessages.rejected, (state:MessageProps) => {
                state.loading = false;
                state.error = true;
            }).addCase(getLastMessages.pending, (state:MessageProps) => {
                state.error = false;
            }).addCase(getLastMessages.fulfilled, (state:MessageProps, action: PayloadAction<Message[]>) => {
                state.error = false;
                if (action.payload) {
                    const exID = state.messages.map(message => message.id);
                    const newMsg = action.payload.filter(message => !exID.includes(message.id));
                    state.messages = [...state.messages, ...newMsg];
                }
            }).addCase(getLastMessages.rejected, (state:MessageProps) => {
                state.error = true;
            });
    },
});


export const ChatReducer = chatSlice.reducer;