import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    recordContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center', 
        marginTop: 10,
    },
    discContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center', 
        height:280, 
        width: '100%', 
        
    },
    discWrap: {
        backgroundColor: 'transparent', 
        justifyContent:'flex-end', 
        alignItems: 'center'
    },
    discImageWrap: {
        backgroundColor: 'transparent',
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
        top: 20, 
        right: 20, 
    },
    uploadInfoWrap: {
        backgroundColor: 'transparent', 
        position:'absolute', 
        bottom:0, 
        paddingRight: 20, 
        paddingLeft: 20,
        height: 28, 
        width: '100%', 
    },
    uploadInfoText: {
        width: 80,
        opacity: 0.6,
        fontSize: 9,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    discHr: {
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center',
        width: '100%',
        height: 1,
        opacity: 0.2,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff"
    },
    artistLikeShareContainer: {
        backgroundColor: 'transparent', 
        height: 44, 
        width: '100%', 
        paddingLeft: 20, 
        paddingRight: 20
    },
    artistWrap: { 
        backgroundColor: 'transparent',
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    artistText: {
        marginLeft: 6,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    likeShareWrap: {
        backgroundColor: 'transparent', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    likeShareIcon: { 
        color: 'white', 
        marginLeft: 20 
    },
    likeCountTitleContainer: {
        backgroundColor: 'transparent', 
        width: '100%', 
        paddingLeft: 20,
        paddingRight: 20
    },
    likeCountContainer: { 
        height: 20, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end' 
    },
    likeCountText: {
        fontSize: 10,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    likeCountCount: {
        fontWeight: 'bold', 
        paddingLeft: 4
    },
    titleContainer: { 
        height: 26, 
        justifyContent: 'flex-start', 
        alignItems:'flex-end'
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: 0,
        color: "#ffffff"
    },
    hashTagContainer: {
        backgroundColor: 'transparent', 
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        flexWrap: "wrap",
        justifyContent: 'flex-start', 
        alignItems: 'flex-start' 
    },
    hashTagWrap: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 2,
        marginRight: 4,
        height: 24,
        borderRadius: 12,
    },
    hashTagText: {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 6,
        marginRight: 6,
        height: 24,
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        color: "rgba(255,255,255,0.7)"
    }
})

export const constant = {
    discPlayBtnSize: 55,
    discInfoBtnSize: 32,
    artistAvatarSize: 30,
    likeShareIconSize: 32


}