import { makeStyles } from '@material-ui/core';
import { colors } from "@mui/material";

const styles = makeStyles(() => ({
    body: {
        minHeight: '100vh',
        padding: '20px'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    title:{
      padding: '10px 0px'
    },
    card: {
        borderRadius: '8px',
        borderColor: colors.blue["200"],
        width: '450px',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
    },
    cardTitle: {
      textAlign: 'center'
    },
    addButton: {
        marginTop: '20px'
    },
    deleteButton: {
        color: colors.red["700"]
    },
    alignCards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '10px'
    }
}));

export default styles;
