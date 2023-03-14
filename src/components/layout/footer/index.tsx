import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

export const Footer: React.FC = () => {
    return (
        <Paper
            sx={{
                marginTop: "calc(10% + 60px)",
                width: "100%",
                position: "fixed",
                bottom: 0,
            }}
            component="footer"
            square
            variant="outlined"
        >
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py="15px"
                >
                    <Typography variant="body2" color="initial">
                        Test Task 2023
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
};
