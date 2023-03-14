import { CardsList } from "@components/cards/cardsList";
import { Layout } from "@components/layout";
import { Box, Pagination, Typography, useTheme } from "@mui/material";
import {
    selectOpenSnackbar,
    selectSearchQuery,
    setMovies,
    setOpenSnackbar,
    setSearchQuery,
} from "@redux/slices/movies/movies";
import { wrapper } from "@redux/store";
import React from "react";
import axios from "axios";
import Head from "next/head";
import { Snackbar } from "@components/snackbar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { Movie } from "src/interfaces/movies";

const SearchResults: React.FC<{
    results: Movie[];
}> = ({ results }) => {
    const searchQuery = useSelector(selectSearchQuery);
    const openSnackbar = useSelector(selectOpenSnackbar);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleChangePagination = (
        e: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        router.replace({
            pathname: `/search/${searchQuery}`,
            query: {
                page: value,
            },
        });
    };
    const theme = useTheme();
    const breakpointsXs = useBreakpoints("xs", theme);
    const breakpointsXl = useBreakpoints("xl", theme);
    const breakpointsLg = useBreakpoints("lg", theme);
    const breakpointsMd = useBreakpoints("md", theme);
    const renderResultsPage = () => {
        if (breakpointsXl) {
            return (
                <Box>
                    {results.length === 0 ? (
                        <Box
                            height="50vh"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h2" fontSize="35px">
                                No results...Try searching
                            </Typography>
                        </Box>
                    ) : (
                        <CardsList movies={results} />
                    )}
                    <Box mb="100px">
                        <Pagination
                            count={5}
                            color="primary"
                            page={Number(router.query.page)}
                            defaultPage={Number(router.query.page)}
                            onChange={handleChangePagination}
                        />
                    </Box>
                    <Snackbar
                        open={openSnackbar}
                        handleClose={() => dispatch(setOpenSnackbar(false))}
                        message="Movie successfully added to favourites!"
                    />
                </Box>
            );
        } else if (breakpointsLg) {
            return (
                <Box>
                    {results.length === 0 ? (
                        <Box
                            height="50vh"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography variant="h2" fontSize="35px">
                                No results...Try searching
                            </Typography>
                        </Box>
                    ) : (
                        <CardsList movies={results} />
                    )}
                    <Box mb="100px">
                        <Pagination
                            count={5}
                            color="primary"
                            page={Number(router.query.page)}
                            defaultPage={Number(router.query.page)}
                            onChange={handleChangePagination}
                        />
                    </Box>
                    <Snackbar
                        open={openSnackbar}
                        handleClose={() => dispatch(setOpenSnackbar(false))}
                        message="Movie successfully added to favourites!"
                    />
                </Box>
            );
        } else if (breakpointsMd) {
            return (
                <Box>
                    {results.length === 0 ? (
                        <Box
                            height="50vh"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                variant="h2"
                                fontSize="35px"
                                textAlign="center"
                            >
                                No results...Try searching
                            </Typography>
                        </Box>
                    ) : (
                        <CardsList movies={results} />
                    )}
                    <Box mb="100px">
                        <Pagination
                            count={5}
                            color="primary"
                            page={Number(router.query.page)}
                            defaultPage={Number(router.query.page)}
                            onChange={handleChangePagination}
                        />
                    </Box>
                    <Snackbar
                        open={openSnackbar}
                        handleClose={() => dispatch(setOpenSnackbar(false))}
                        message="Movie successfully added to favourites!"
                    />
                </Box>
            );
        } else if (breakpointsXs) {
            return (
                <Box>
                    {results.length === 0 ? (
                        <Box
                            height="50vh"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Typography
                                variant="h2"
                                fontSize="35px"
                                textAlign="center"
                            >
                                No results...Try searching
                            </Typography>
                        </Box>
                    ) : (
                        <CardsList movies={results} />
                    )}
                    <Box mb="100px">
                        <Pagination
                            count={5}
                            color="primary"
                            page={Number(router.query.page)}
                            defaultPage={Number(router.query.page)}
                            onChange={handleChangePagination}
                        />
                    </Box>
                    <Snackbar
                        open={openSnackbar}
                        handleClose={() => dispatch(setOpenSnackbar(false))}
                        message="Movie successfully added to favourites!"
                    />
                </Box>
            );
        }
    };
    return (
        <>
            <Head>
                <title>
                    {searchQuery}:Page {router.query.page}
                </title>
                <meta
                    name="description"
                    content={`Page ${router.query.page} of search by title: ${searchQuery}`}
                />
                <meta
                    property="og:title"
                    content={`${searchQuery}:Page ${router.query.page}`}
                />
                <meta
                    property="og:description"
                    content={`Page ${router.query.page} of search by title: ${searchQuery}`}
                />
                <meta property="og:type" content="website" />
            </Head>
            <Layout>{renderResultsPage()}</Layout>
        </>
    );
};

export default SearchResults;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            try {
                const res = await axios.get(
                    `https://www.omdbapi.com/?apikey=${
                        process.env.NEXT_MOVIES_API_KEY
                    }&s=${query.title || ""}&page=${query.page}`,
                );
                const movies = res.data.Search.filter(
                    (item: { Type: string }) => item.Type === "movie",
                );
                movies.forEach((movie: { [key: string]: boolean }) => {
                    movie.favourite = false;
                });
                store.dispatch(setMovies(movies));
            } catch (err) {
                store.dispatch(setMovies([]));
            }
            store.dispatch(setSearchQuery(query.title));
            const movies: Movie[] = store.getState().movies;
            return {
                props: {
                    results: movies,
                },
            };
        },
);
