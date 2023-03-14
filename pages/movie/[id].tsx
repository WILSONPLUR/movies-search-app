import { Layout } from "@components/layout";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { wrapper } from "@redux/store";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { Movie } from "src/interfaces/movies/index";

const MovieDetails: React.FC<{
    movie: InferGetServerSidePropsType<typeof getServerSideProps>;
}> = ({ movie }) => {
    const { Title, Year, Plot, Poster } = movie;
    const theme = useTheme();
    const router = useRouter();
    const breakpointsXs = useBreakpoints("xs", theme);
    const breakpointsXl = useBreakpoints("xl", theme);
    const breakpointsLg = useBreakpoints("lg", theme);
    const breakpointsMd = useBreakpoints("md", theme);
    const renderMovieDetails = () => {
        if (breakpointsXl) {
            return (
                <Box display="flex" flexDirection="row">
                    <img src={Poster} alt={Title} loading="lazy" />
                    <Box ml="50px">
                        <Typography variant="h1" fontSize="30px" mb="20px">
                            {Title}
                        </Typography>
                        <Typography variant="body1">{Plot}</Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "10px" }}
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            );
        } else if (breakpointsLg) {
            return (
                <Box display="flex" flexDirection="row">
                    <img src={Poster} alt={Title} loading="lazy" />
                    <Box ml="50px">
                        <Typography variant="h1" fontSize="30px" mb="20px">
                            {Title}
                        </Typography>
                        <Typography variant="body1">{Plot}</Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "10px" }}
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            );
        } else if (breakpointsMd) {
            return (
                <Box display="flex" flexDirection="column">
                    <img src={Poster} alt={Title} loading="lazy" />
                    <Box ml="50px">
                        <Typography variant="h1" fontSize="30px" mb="20px">
                            {Title}
                        </Typography>
                        <Typography variant="body1">{Plot}</Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: "10px" }}
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            );
        } else if (breakpointsXs) {
            return (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <img src={Poster} alt={Title} loading="lazy" />
                    <Box ml="27px" my="50px">
                        <Typography variant="h1" fontSize="30px" mb="20px">
                            {Title}
                        </Typography>
                        <Typography variant="body1">{Plot}</Typography>
                        <Button
                            variant="contained"
                            sx={{ marginY: "10px" }}
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                    </Box>
                </Box>
            );
        }
    };
    return (
        <>
            <Head>
                <title>{Title}</title>
                <meta
                    name="description"
                    content={`More info about ${Title} movie`}
                />
                <meta
                    property="og:title"
                    content={`More info about ${Title} movie`}
                />
                <meta
                    property="og:description"
                    content={`More info about ${Title} movie`}
                />
                <meta property="og:type" content="website" />
            </Head>
            <Layout>
                <Box display="flex" flexDirection="column" mt="100px">
                    {renderMovieDetails()}
                </Box>
            </Layout>
        </>
    );
};

export default MovieDetails;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ query }) => {
            const res = await axios(
                `https://www.omdbapi.com/?apikey=${process.env.NEXT_MOVIES_API_KEY}&i=${query.id}&plot=full`,
            );
            const movie: Movie = res.data;
            return {
                props: {
                    movie,
                },
            };
        },
);
