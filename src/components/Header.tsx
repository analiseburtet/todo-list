import React from 'react'
import { CardHeader } from "@mui/material";
import styles from "../pages/styles";

export const Header = () => {
    const classes = styles();

    return (
        <CardHeader
            className={classes.header}
            title="To do list"
        />
    )
}

export default Header
