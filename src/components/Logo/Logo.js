import React from "react";
import { Text,Image } from "react-native";
import { styles } from "./LogoStyles";




const Logo = ()=>{
    return(
        <>
        <Image style={styles.logo} source={require("../../../assets/logo.png")}/>
        </>
    )
}

export default Logo