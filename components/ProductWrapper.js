import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Product from "./Product";
import Header from "./Header";

const ProductWrapper = ({navigation}) => {
    
    const Data = [
        {
            name: 'Google Pixel 9',
            color: 'black',
            price: 50000,
            image: 'https://www.digitaltrends.com/wp-content/uploads/2024/01/pixel-9-leaked-render-angled-sides.jpg?p=1'
        },
        {
            name: 'Iphone 15',
            color: 'red',
            price: 85000,
            image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg'
        },
        {
            name: 'Oneplus  13',
            color: 'black',
            price: 25000,
            image: 'https://www.gizmochina.com/wp-content/uploads/2023/11/OnePlus-12-1-1024x612.jpg'
        },
        {
            name: 'Realme GT 6',
            color: 'white',
            price: 55000,
            image: 'https://www.91-cdn.com/hub/wp-content/uploads/2024/05/realme-gt-neo-6-purple-1.jpg'
        },
    ]

    return (
        <View style={{ flex: 1,backgroundColor:'#000' }}>
            <Button title="Go to User List" onPress={() => navigation.navigate("User")} />
            <Header />
            <ScrollView>
                {Data.map((item) => <Product item={item} />)}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

})

export default ProductWrapper;