export interface ISnackbarProps {
    open: boolean;
    handleClose: (e: React.SyntheticEvent | Event, reason?: string) => void;
    message: string;
}
