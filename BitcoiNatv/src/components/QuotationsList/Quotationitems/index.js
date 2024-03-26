import React from "react";
import {View, Text, Image} from "react-native"
import styles from "./styles"

export default function Quotationitems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextleft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitcoin} source={require("../../../img/logo-bitcoin.png")}/>
                    <Text style={styles.dayCotation}>07/05/2023</Text>
                </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>$53331.052</Text>
                </View>
            </View>
        </View>
    )
    
}