import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Box,
    Typography,
    IconButton,
} from "@mui/material";
import {
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import {
    selectMoviesState,
    selectOpenSnackbar,
} from "@redux/slices/movies/movies";
import { Movie } from "src/interfaces/movies";

export const CardItem: React.FC<{
    info: Movie;
    addToFav?: () => void;
}> = ({ info, addToFav }) => {
    const router = useRouter();
    return (
        <Card key={info.imdbID} sx={{ maxWidth: 260, maxHeight: 500 }}>
            <CardActionArea
                onClick={() => router.push(`/movie/${info.imdbID}`)}
            >
                <CardMedia
                    component="img"
                    loading="lazy"
                    height="400px"
                    sx={{
                        backgroundPosition: "cover",
                        objectFit: "cover",
                    }}
                    image={info.Poster}
                    alt={info.Title}
                />
            </CardActionArea>
            <CardContent sx={{ margin: 0 }}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        fontSize="15px"
                        component="h4"
                    >
                        {info.Title}
                    </Typography>
                    <IconButton onClick={addToFav}>
                        {info.favourite !== true ? (
                            <FavoriteBorderIcon
                                fontSize="small"
                                htmlColor="#F70101"
                            />
                        ) : (
                            <FavoriteIcon
                                fontSize="small"
                                htmlColor="#F70101"
                            />
                        )}
                    </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {info.Year}
                </Typography>
            </CardContent>
        </Card>
    );
};
