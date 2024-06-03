import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";


const Stack = createNativeStackNavigator()

const App = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}></Stack.Screen>
        <Stack.Screen name="User" component={UserList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({

})

export default App;