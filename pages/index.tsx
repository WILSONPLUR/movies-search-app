import { Layout } from "@components/layout";
import { Typography, Box, useTheme } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useBreakpoints } from "src/hooks/useBreakpoints";

const Home: React.FC = () => {
    const theme = useTheme();
    const breakpointsXs = useBreakpoints("xs", theme);
    const breakpointsXl = useBreakpoints("xl", theme);
    const breakpointsLg = useBreakpoints("lg", theme);
    const breakpointsMd = useBreakpoints("md", theme);
    const renderHomePage = () => {
        if (breakpointsXl) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        fontSize="35px"
                        textAlign="center"
                        marginTop="100px"
                    >
                        Welcome to Movie Search App
                    </Typography>
                    <Typography variant="body1" fontSize="22px">
                        Try to search
                    </Typography>
                </Box>
            );
        } else if (breakpointsLg) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        fontSize="30px"
                        textAlign="center"
                        marginTop="100px"
                    >
                        Welcome to Movie Search App
                    </Typography>
                    <Typography variant="body1" fontSize="20px">
                        Try to search
                    </Typography>
                </Box>
            );
        } else if (breakpointsMd) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        fontSize="25px"
                        textAlign="center"
                        marginTop="100px"
                    >
                        Welcome to Movie Search App
                    </Typography>
                    <Typography variant="body1" fontSize="18px">
                        Try to search
                    </Typography>
                </Box>
            );
        } else if (breakpointsXs) {
            return (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        fontSize="22px"
                        textAlign="center"
                        marginTop="100px"
                    >
                        Welcome to Movie Search App
                    </Typography>
                    <Typography variant="body1" fontSize="15px">
                        Try to search
                    </Typography>
                </Box>
            );
        }
    };
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Homepage of Movie Search App. Just start search for movies!"
                />
                <meta property="og:title" content="Homepage" />
                <meta
                    property="og:description"
                    content="Homepage of Movie Search App. Just start search for movies!"
                />
                <meta property="og:type" content="website" />
            </Head>
            <Layout>{renderHomePage()}</Layout>
        </>
    );
};

export default Home;
