const { exp } = require("react-native-reanimated")
import React from "react";
import {StyleSheet, View, Text} from "react-native";

const HomeScreen = () => {
    return(
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>
                Olá Mundo!
            </Text>
        </View>
    )
}

export default HomeScreen;

const style = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold"
    }
})