import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native";
import { addtoCart } from "./redux/action";
import { useDispatch } from "react-redux";

const Product = ({ item }) => {

    const dispatch = useDispatch()

    const handleAddToCart = (item) => {
        console.warn("Called", item)
        dispatch(addtoCart)
    }

    return (
        <View style={{}}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
        </View>

    )

}

const styles = StyleSheet.create({

})

export default Product;