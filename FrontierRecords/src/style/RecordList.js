import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    recordContainer: {
        height: 426, 
        alignItems: 'center', 
        marginTop: 10,

    },
    recordHr: {
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center',
        width: '100%',
        height: 1,
        opacity: 0.2,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#ffffff"
    },
    discContainer: {
        height: 280,
    },
    discWrap: {
        width: 250,
        height: 250, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'transparent'
    },
    discImage: { 
        width: 250, 
        height: 250, 
        borderRadius: 250 / 2 
    },
    discInfoBtn: { 
        position: 'absolute', 
        color: 'white', 
        top: 20, 
        right: 20, 
    },
    descContainer: { 
        marginLeft: 24, 
        marginRight: 20, 
        marginTop: 0
    },
    descArtistContainer: { 
        height: 20, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end' 
    },
    descArtist: { 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    descArtistName: {
        marginLeft: 6,
        height: 14,
        fontSize: 14,
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
        height: 26, 
        justifyContent: 'flex-start', 
        alignItems:'flex-end'
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
        height: 30,
        justifyContent: 'flex-start', 
        alignItems: 'flex-start' 
    },
    descHashTag: {
        marginLeft: 6,
        marginRight: 6,
        height: 24,
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        
    }
})

export const constant = {
    discPlayBtnSize: 55,
    discInfoBtnSize: 32,
    descArtistAvatarSize: 30,
    descIconSize: 32


}