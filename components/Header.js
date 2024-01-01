import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    console.warn("cartData-------------->>>>>", cartData);
    const [CartItems, setCartItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])


    return (
        <View style={{ backgroundColor: '#008' }}>
            <Text style={{ fontSize: 30, color: '#fff' }}>{CartItems}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

})

export default Header;