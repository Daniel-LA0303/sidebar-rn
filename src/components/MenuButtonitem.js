import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const MenuButtonitem = ({text, onPress}) => {
  return (
    <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={onPress}
    >
        <Image 
            source={{uri: 'https://images.pexels.com/photos/14012858/pexels-photo-14012858.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}}
            style={styles.image}
        />
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        marginBottom: 35,
        flexDirection: 'row',
        padding: 15
    },
    image:{
        borderRadius: 23,
        height: 45,
        width: 45
    },
    text:{
        marginStart: 25
    }

})

export default MenuButtonitem;