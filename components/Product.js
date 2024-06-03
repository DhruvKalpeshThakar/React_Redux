import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native";
import { addtoCart, removefromCart } from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Product = ({ item }) => {

    const dispatch = useDispatch()

    const CartItems = useSelector((state) => state.reducer);

    const [isAdded, setisAdded] = useState(false)

    const handleAddToCart = (item) => {
        // console.warn("Called", item)
        dispatch(addtoCart(item))  //to dispatch actions and trigger state changes to the store
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removefromCart(item.name))
    }

    useEffect(() => {
        let result = CartItems.filter((e) => {
            return e?.name === item?.name
        });
        if (result.length) {
            setisAdded(true)
        } else {
            setisAdded(false)
        }
    }, [CartItems])

    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 24 }}>{item.name}</Text>
                <Text style={{ fontSize: 24 }}>${item.price}</Text>
            </View>
            {/* <Text style={{ fontSize: 24 }}>{item.color}</Text> */}
            <Image source={{ uri: item.image }} style={{ width: '100%', height: 250 }} resizeMode="center" />
            {isAdded ?
                <Button title="Remove from cart" onPress={() => handleRemoveFromCart(item)} /> :
                <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
            }


        </View>

    )

}

const styles = StyleSheet.create({

})

export default Product;