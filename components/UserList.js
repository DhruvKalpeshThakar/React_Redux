import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./redux/action";



const UserList = () => {
    
    // const dispatch = useDispatch();
    // const userList = useSelector((state) => state.reducer) //state is from Redux and not from React

    // useEffect(() => {
    //     dispatch(getUserList());
    // }, []);
    // console.warn("userListr caLLED--->>>>", userList);
    return (
        <View style={styles.container}>
         <Text style={{color:'#000'}}>fhbgg</Text>
            {/* {userList.length ?
                userList.map((item) => (
                
                 console.log("itemddddddddddddddddddddddddddddddd",item?.users[0].firstName)
                
                ))
                :
                null
            } */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20
    }
})

export default UserList;