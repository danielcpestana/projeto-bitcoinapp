import React from "react";
import {View, Text} from "react-native"
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 5443.255</Text>
            <Text style={styles.textPrice}>ultima cotação</Text>
        </View>
    )
}