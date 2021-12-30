import React from 'react'
import { CardHeader, IconButton } from "@mui/material";
import { LibraryBooks } from "@mui/icons-material";

export const Header = () => {
    return (
        <>
        <CardHeader
            action={
                <IconButton aria-label="settings">
                    <LibraryBooks />
                </IconButton>
            }
            title="To do"
        />
        </>
    )
}

export default Header
