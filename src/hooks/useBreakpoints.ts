import { Theme, useMediaQuery } from "@mui/material";
export const useBreakpoints = (
    breakpointsName: "xl" | "lg" | "md" | "sm" | "xs" | string,
    theme: Theme,
) => {
    switch (breakpointsName) {
        case "xl":
            // eslint-disable-next-line no-case-declarations
            return useMediaQuery(theme.breakpoints.up("xl"));
        case "lg":
            return useMediaQuery(theme.breakpoints.up("lg"));
        case "md":
            return useMediaQuery(theme.breakpoints.up("md"));
        case "sm":
            return useMediaQuery(theme.breakpoints.up("sm"));
        case "xs":
            return useMediaQuery(theme.breakpoints.up("xs"));
        case breakpointsName:
            return useMediaQuery(breakpointsName);
        default:
            return useMediaQuery(breakpointsName);
    }
};
