import { CardItem } from "@components/cards/cardItem";
import { Layout } from "@components/layout";
import { Box, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { Movie } from "src/interfaces/movies";

const FavouritesPage: React.FC = () => {
    const [favs, setFavs] = useState([]);
    const theme = useTheme();
    const breakpointsLg = useBreakpoints("lg", theme);
    const breakpointsXl = useBreakpoints("xl", theme);
    const breakpointsMd = useBreakpoints("md", theme);
    const breakpointsXs = useBreakpoints("xs", theme);

    useEffect(() => {
        const favMovies = localStorage.getItem("favs");
        setFavs(favMovies !== null ? JSON.parse(favMovies) : null);
    }, []);

    const renderFavourites = () => {
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
                    {favs &&
                        favs?.map((fav: Movie) => (
                            <CardItem key={fav.imdbID} info={fav} />
                        ))}
                    {!favs && (
                        <Box
                            height="50vh"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize="35px"
                                // textAlign="center"
                                marginTop="100px"
                            >
                                You haven't favourites yet...
                                <br />
                                Try to add movie
                            </Typography>
                        </Box>
                    )}
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
                    {favs &&
                        favs?.map((fav: Movie) => (
                            <CardItem key={fav.imdbID} info={fav} />
                        ))}
                    {!favs && (
                        <Box
                            height="50vh"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize="35px"
                                // textAlign="center"
                                marginTop="100px"
                            >
                                You haven't favourites yet...
                                <br />
                                Try to add movie
                            </Typography>
                        </Box>
                    )}
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
                    {favs &&
                        favs?.map((fav: Movie) => (
                            <CardItem key={fav.imdbID} info={fav} />
                        ))}
                    {!favs && (
                        <Box
                            height="50vh"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize="35px"
                                // textAlign="center"
                                marginTop="100px"
                            >
                                You haven't favourites yet...
                                <br />
                                Try to add movie
                            </Typography>
                        </Box>
                    )}
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
                    {favs &&
                        favs?.map((fav: Movie) => (
                            <CardItem key={fav.imdbID} info={fav} />
                        ))}
                    {!favs && (
                        <Box
                            height="50vh"
                            width="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize="35px"
                                // textAlign="center"
                                marginTop="100px"
                            >
                                You haven't favourites yet...
                                <br />
                                Try to add movie
                            </Typography>
                        </Box>
                    )}
                </Box>
            );
        }
    };
    return (
        <>
            <Head>
                <title>Favourites</title>
                <meta
                    name="description"
                    content="Favourite movies here. Just add your favourite movie by clicking heart when get search results!"
                />
                <meta property="og:title" content="Favourites" />
                <meta
                    property="og:description"
                    content="Favourite movies here. Just add your favourite movie by clicking heart when get search results!"
                />
                <meta property="og:type" content="website" />
            </Head>
            <Layout>{renderFavourites()}</Layout>
        </>
    );
};

export default FavouritesPage;
