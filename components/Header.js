import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";



const Header = () => {

    const cartData = useSelector((state) => state.reducer) //Hook used to access redux store's state
    // console.warn("cartData-------------->>>>>", cartData.length);
    const [CartItems, setCartItems] = useState(0)

    useEffect(() => {
        setCartItems(cartData.length)
        // console.warn("cartDatas-------------->>>>>", cartData.length);
    }, [cartData])


    return (
        <View style={{ backgroundColor: '#008', alignItems: 'center', paddingVertical: 10 ,marginTop:15}}>
            <Text style={{ fontSize: 15, color: '#fff', paddingHorizontal: 15, paddingVertical: 7, backgroundColor: "#FFA500", borderRadius: 10 }}>
                {CartItems} Items in cart</Text>
        </View>
    )

}

const styles = StyleSheet.create({

})

export default Header;