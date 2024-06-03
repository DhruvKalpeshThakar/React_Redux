import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";


// Why Saga ?
// used with Redux to handle promise way or to handle data from async process 
// to overcome Redux side effects 

const Stack = createNativeStackNavigator()

const App = () => {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({

})

export default App;