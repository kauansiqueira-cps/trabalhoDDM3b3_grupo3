import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start", 
        height: "100vh",           
        paddingTop: 10,            
    },
    
    boxTitle: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        width: "50%",
    },

    texTitle: {
        color: "#0B3954",
        fontSize: 24,
        fontWeight: "bold",
    },
    nomes: {
        fontSize: 18,
    },

});

export default styles