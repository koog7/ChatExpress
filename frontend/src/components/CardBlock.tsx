import { Card, CardContent, Typography, Box } from '@mui/material';

const CardBlock = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345, backgroundColor: '#333', color: 'white', border: '1px solid white' }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        John Doe
                    </Typography>
                    <Typography variant="body2">
                        2024-08-10
                    </Typography>
                    <Box mt={2}>
                        <Typography variant="body1">
                            This is a first message!
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardBlock;