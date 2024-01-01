import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    console.warn("cartData-------------->>>>>", cartData);

    return (
        <View style={{}}>
            <Text style={{ fontSize: 30, color: '#000' }}>0</Text>
        </View>
    )

}

const styles = StyleSheet.create({

})

export default Header;