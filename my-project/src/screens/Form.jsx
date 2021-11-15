import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default function Form() {
    return (
        <View style={style.containerForm}>
            <Text style={style.header}>Sign In</Text>

            <Text style={style.textTitle}>Email</Text>
            <TextInput style={style.textInput} placeholder="ex: your-name@mail.com"/>

            <Text style={style.textTitle}>Password</Text>
            <TextInput style={style.textInput} placeholder="Input Your Password"/>

            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    containerForm: {
        flex: 1,
        padding: 20,
        marginTop: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    textTitle: {
        fontSize: 16,
        marginBottom: 7,
        fontWeight: 'bold',
    },
    textInput: {
        borderRadius: 5,
        marginBottom: 5,
        borderWidth: 1,
        height: 40,
        borderColor: 'gray',
        color: 'black',
        padding: 10,
    },
    button: {
        marginTop: 10,
        width: '100%',
        height: 40,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})