import { TextField, InputAdornment, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { selectPage, setSearchQuery } from "@redux/slices/movies/movies";
import { Search as SearchIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ISearchBarProps } from "src/interfaces/layout";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiOutlinedInput-root": {
            background: "#fff",
        },
    },
}));

export const SearchBar: React.FC<ISearchBarProps> = ({
    value,
    id,
    variant,
    placeholder,
    size,
}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const classes = useStyles();
    const [errorValidate, setErrorValidate] = useState(false);
    const page = useSelector(selectPage);
    const routeToResults = () => {
        router.push({
            pathname: `/search/${value}`,
            query: {
                page: page,
            },
        });
    };
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearchQuery(e.target.value));
    };
    const onKeyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (value !== "") {
                routeToResults();
            } else {
                setErrorValidate(true);
            }
        }
    };
    const onClickHandler = () => {
        if (value !== "") {
            routeToResults();
        } else {
            setErrorValidate(true);
        }
    };
    return (
        <TextField
            id={id}
            className={classes.root}
            value={value}
            error={errorValidate}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            variant={variant}
            margin="dense"
            sx={{ padding: "5px 0" }}
            placeholder={
                errorValidate ? "Search shouldn't be null" : placeholder
            }
            size={size}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            onClick={onClickHandler}
                            aria-label="search"
                        >
                            <SearchIcon style={{ fill: "gray" }} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;
