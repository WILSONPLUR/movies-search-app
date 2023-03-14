import {
    Button,
    Box,
    IconButton,
    AppBar,
    Toolbar,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import { selectSearchQuery } from "@redux/slices/movies/movies";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import SearchBar from "./components/searchbar";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = [
    {
        name: "Home",
        href: "/",
        id: 1,
    },
    {
        name: "Favourites",
        href: "/favourites",
        id: 2,
    },
];

export const NavBar: React.FC<{ window?: () => Window }> = ({ window }) => {
    const searchQuery = useSelector(selectSearchQuery);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const routeToPage = (route: string) => {
        router.push(route);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            onClick={() => routeToPage(item.href)}
                            sx={{ textAlign: "center" }}
                        >
                            {item.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SearchBar
                        value={searchQuery}
                        variant="outlined"
                        placeholder="Search..."
                        id="search-bar"
                        size="small"
                    />
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                onClick={() => routeToPage(item.href)}
                                key={item.id}
                                sx={{ color: "#fff" }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};
//     display="flex"
//     bgcolor="white"
//     borderBottom="1px solid gray"
//     component="header"
//     position="fixed"
//     left={0}
//     right={0}
//     top={0}
//     zIndex={10}
//     justifyContent="space-between"
// >
//     <Container maxWidth="lg">
//         <Box display="flex" justifyContent="space-between">
//             <SearchBar
//                 value={searchQuery}
//                 placeholder="Search..."
//                 id="search-bar"
//                 variant="outlined"
//                 size="small"
//             />
//             <IconButton>
//                 <WbSunnyOutlined />
//             </IconButton>
//         </Box>
//     </Container>
// </Box>
