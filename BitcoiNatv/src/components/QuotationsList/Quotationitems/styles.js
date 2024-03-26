import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width: "90%",
        height: "auto",
        backgroundColor: "#000000",
        marginBottom: 400,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,


    },
    contextLeft:{
        width:"36%",
        height:"auto",
        alignItems:"flex-start"

    },
    contextRight:{
        alignItems:"flex-end",
        width:"100%"
        
        

    },
    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color:"#ffffff",
        fontWeight:"bold"

    },
    price:{
        color:"#ffffff",
        fontSize:18,
        fontWeight:"bold"

    },
    logBitcoin:{
        width:40,
        height:40,
        marginLeft:2,

    },
    boxLogo:{
        flexDirection:"column",
        alignItems:"center"
    }
});

export default styles