import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    recordContainer: {
        height: 363, 
        alignItems: 'center', 
        marginTop: 20, 
    },
    recordHr: {
        position: 'absolute',
        top: 260,
        alignSelf: 'center',
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        height: 1,
        opacity: 0.2,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff"
    },
    discContainer: {
        height: 250
    },
    discWrap: {
        width: 250,
        height: 250, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    discImage: { 
        width: 250, 
        height: 250, 
        borderRadius: 250 / 2 
    },
    discInfoBtn: { 
        position: 'absolute', 
        color: 'white', 
        top: 0, 
        right: 20, 
    },
    descContainer: { 
        marginLeft: 24, 
        marginRight: 20, 
        marginTop: 0
    },
    descArtistContainer: { 
        height: 32, 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    descArtist: { 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    descArtistName: {
        marginLeft: 6,
        width: 200,
        height: 16,
        opacity: 0.5,
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    descIconWrap: { 
        justifyContent: 'flex-end', 
        alignItems: 'center' 
    },
    descIcon: { 
        color: 'white', 
        marginLeft: 20 
    },
    descTitleContainer: { 
        backgroundColor: 'black', 
        height: 17, 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    descTitle: {
        opacity: 0.8,
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    descHashTagContainer: {
        height: 16, 
        justifyContent: 'flex-start', 
        alignItems: 'center' 
    },
    descHashTag: {
        height: 16,
        opacity: 0.4,
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    }
})

export const constant = {
    discPlayBtnSize: 55,
    discInfoBtnSize: 32,
    descArtistAvatarSize: 20,
    descIconSize: 32


}