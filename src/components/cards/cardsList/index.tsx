import React, { useEffect, useState } from "react";
import { CardItem } from "../cardItem";
import { Box, useTheme } from "@mui/material";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { setOpenSnackbar } from "@redux/slices/movies/movies";
import { Movie } from "src/interfaces/movies";
import { useDispatch } from "react-redux";

export const CardsList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
    const theme = useTheme();
    const breakpointsLg = useBreakpoints("lg", theme);
    const breakpointsXl = useBreakpoints("xl", theme);
    const breakpointsMd = useBreakpoints("md", theme);
    const breakpointsXs = useBreakpoints("xs", theme);
    const [favs, setFavs] = useState<Movie[] | []>([]);

    useEffect(() => {
        const favMovies = localStorage.getItem("favs");
        setFavs(favMovies !== null ? JSON.parse(favMovies) : []);
    }, []);
    const dispatch = useDispatch();
    const addToFav = (movie: Movie) => {
        dispatch(setOpenSnackbar(true));
        setFavs((prev: Movie[] | []) => {
            const newArray: Movie[] = [];
            const uniqueObject = {};

            const arr: Movie[] | [] = [...prev, { ...movie, favourite: true }];

            for (const i in arr) {
                //Extract imdbID
                const imdbID = arr[i]["imdbID"];

                // Use imdbID as the index
                uniqueObject[imdbID] = arr[i];
            }

            for (const i in uniqueObject) {
                //push unique object to newArray
                newArray.push(uniqueObject[i]);
            }
            //Save favsList to localStorage
            localStorage.setItem("favs", JSON.stringify(newArray));
            return newArray;
        });
    };
    const renderCardsList = () => {
        if (breakpointsXl) {
            return (
                <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                    alignItems="flex-end"
                    marginY="100px"
                    gap={2}
                >
                    {movies.map((movie: Movie) => (
                        <CardItem
                            addToFav={() => addToFav(movie)}
                            key={movie.imdbID}
                            info={movie}
                        />
                    ))}
                </Box>
            );
        } else if (breakpointsLg) {
            return (
                <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                    alignItems="flex-end"
                    marginY="100px"
                    gap={2}
                >
                    {movies.map((movie: Movie) => (
                        <CardItem
                            addToFav={() => addToFav(movie)}
                            key={movie.imdbID}
                            info={movie}
                        />
                    ))}
                </Box>
            );
        } else if (breakpointsMd) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    alignItems="flex-end"
                    marginY="100px"
                    gap={2}
                >
                    {movies.map((movie: Movie) => (
                        <CardItem
                            addToFav={() => addToFav(movie)}
                            key={movie.imdbID}
                            info={movie}
                        />
                    ))}
                </Box>
            );
        } else if (breakpointsXs) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    alignItems="flex-end"
                    marginY="100px"
                    gap={2}
                >
                    {movies.map((movie: Movie) => (
                        <CardItem
                            addToFav={() => addToFav(movie)}
                            key={movie.imdbID}
                            info={movie}
                        />
                    ))}
                </Box>
            );
        }
    };
    return <>{renderCardsList()}</>;
};
