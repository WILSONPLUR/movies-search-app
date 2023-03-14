import { Box, Container } from "@mui/material";
import React from "react";

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box mt="100px">
            <Container maxWidth="lg">{children}</Container>
        </Box>
    );
};
