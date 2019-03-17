import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    headerText: {
        width: 319,
        height: 24,
        fontFamily: "Helvetica",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.09,
        color: "#ffffff",
        paddingLeft: 31,
    },
    container: {
        height: 250
    },
    row: {
        paddingLeft:25,
    },
    col: {
        width: 150,
        height: 207,
        padding: 0,
        margin: 0
    },
    card: {
        paddingTop: 6,
        paddingRight: 6,
        paddingLeft: 6,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center',
    },
    cardBody: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10,
        backgroundColor: "#2b2b31",
    },
    cardFooter: {
        padding: 0,
        marginTop: 10,
    },
    cardFooterTextTitle: {
        paddingLeft: 2,
        height: 18,
        opacity: 0.8,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: -0.8,
        color: "#ffffff",
        marginBottom: 2
    },
    cardFooterTextBody: {
        paddingLeft: 2,
        height: 14,
        opacity: 0.5,
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 14,
        letterSpacing: 0,
        color: "#ffffff"
    }
});