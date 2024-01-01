import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Product from "./components/Product";
import Header from "./components/Header";

const App = () => {

  const Data = [
    {
      name: 'Google Pixel',
      color: 'black',
      price: 15000,
      image: 'https://imgs.search.brave.com/uEA9ZmZkeDyKeUuUmfySFDbIqPp4ud-8dLlRoqWp28M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bGFuay1tb2JpbGUt/cGhvbmUtc2NyZWVu/LWltYWdlLWRpZ2l0/YWwtZGV2aWNlXzUz/ODc2LTEzMjA4OS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw'
    },
    {
      name: 'Apple Iphone',
      color: 'red',
      price: 1500000,
      image: 'https://imgs.search.brave.com/uEA9ZmZkeDyKeUuUmfySFDbIqPp4ud-8dLlRoqWp28M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bGFuay1tb2JpbGUt/cGhvbmUtc2NyZWVu/LWltYWdlLWRpZ2l0/YWwtZGV2aWNlXzUz/ODc2LTEzMjA4OS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw'
    },
    {
      name: 'Oneplus',
      color: 'black',
      price: 25000,
      image: 'https://imgs.search.brave.com/uEA9ZmZkeDyKeUuUmfySFDbIqPp4ud-8dLlRoqWp28M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bGFuay1tb2JpbGUt/cGhvbmUtc2NyZWVu/LWltYWdlLWRpZ2l0/YWwtZGV2aWNlXzUz/ODc2LTEzMjA4OS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw'
    },

  ]

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        {Data.map((item) => <Product item={item} />)}
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({

})

export default App;