import { Card, CardContent, Typography, Box } from '@mui/material';
import * as React from "react";

interface Props {
    id: string;
    message: string;
    author: string;
    date: string;
}
const CardBlock:React.FC<Props> = ({id , message, author ,date}) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#333', color: 'white', border: '1px solid white' , marginTop:'20px'}} id={id}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {author}
                    </Typography>
                    <Typography variant="body2">
                        {date.replace(/\.\d+Z$/, '').replace('T', ' ')}
                    </Typography>
                    <Box mt={2}>
                        <Typography variant="body1">
                            {message}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardBlock;