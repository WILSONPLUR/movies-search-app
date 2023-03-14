import { Alert, Snackbar as SnackbarComponent } from "@mui/material";
import React from "react";
import { ISnackbarProps } from "src/interfaces/snackbar/index";

export const Snackbar: React.FC<ISnackbarProps> = ({
    open,
    handleClose,
    message,
}) => {
    return (
        <SnackbarComponent
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </SnackbarComponent>
    );
};
