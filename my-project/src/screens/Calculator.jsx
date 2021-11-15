import { FormControl, Input, StatusBar, VStack, Box, NumberInput, NumberInputField, Text, HStack, Button } from 'native-base';
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function Calculator() {
    const [firstOperand, setFirstOperand] = useState("0");
    const [secondOperand, setSecondOperand] = useState("0");
    const [result, setResult] = useState("0");

    const addition = () => {
        setResult(parseFloat(firstOperand) + parseFloat(secondOperand));
    }

    const subtraction = () => {
        setResult(parseFloat(firstOperand) - parseFloat(secondOperand));
    }

    const multiplication = () => {
        setResult(parseFloat(firstOperand) * parseFloat(secondOperand));
    }

    const division = () => {
        setResult(parseFloat(firstOperand) / parseFloat(secondOperand));
    }

    const modulus = () => {
        setResult(parseFloat(firstOperand) % parseFloat(secondOperand));
    }

    const clear = () => {
        setFirstOperand("0")
        setSecondOperand("0")
        setResult(0)
    }

    // const handleChange = (value) => {
    //     setFirstOperand(parseInt(value))
    // }

    // if (typeof (firstOperand) === "string") {
    //     alert("Input Number")
    // }

    return (
        <Box style={style.containerForm}>
            <StatusBar />
            <Box style={style.containerResult}>
                <Text style={style.resultTitle} fontSize="5xl">
                    {result}
                </Text>
            </Box>
            <Box>
                <VStack>
                    <Text style={style.inputLabel} mb="3">Value A</Text>
                    <TextInput
                        style={style.inputField}
                        pl="3"
                        value={firstOperand}
                        onChangeText={(valueOne) => setFirstOperand(valueOne)}
                    >
                    </TextInput>
                    <Text style={style.inputLabel} mb="3" mt="3">Value B</Text>
                    <TextInput
                        style={style.inputField}
                        pl="3"
                        value={secondOperand}
                        onChangeText={(valueTwo) => setSecondOperand(valueTwo)}
                    >
                    </TextInput>
                </VStack>
            </Box>
            <HStack space={6} alignItems="center" justifyContent="center" mt="5">
                <TouchableOpacity style={style.buttonOperator} onPress={addition}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mb="1">+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonOperator} onPress={subtraction}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mb="1">-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonOperator} onPress={multiplication}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mt="2">*</Text>
                </TouchableOpacity>
            </HStack>
            <HStack space={6} alignItems="center" justifyContent="center" mt="5">
                <TouchableOpacity style={style.buttonOperator} onPress={division}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mb="1">/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonOperator} onPress={modulus}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mb="1">%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonOperator} onPress={clear}>
                    <Text style={style.buttonOperatorText} fontSize="4xl" mb="1">AC</Text>
                </TouchableOpacity>
            </HStack>
        </Box>
    )
}

const style = StyleSheet.create({
    containerForm: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFA0A0'
    },
    containerResult: {
        marginTop: 50,
        alignItems: 'center',
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    resultTitle: {
        fontWeight: 'bold',
        color: '#000',
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    inputField: {
        backgroundColor: '#ECECEC',
        color: '#000',
        fontSize: 20,
        height: 50,
        borderRadius: 10,
        borderWidth: 0,
        paddingLeft: 10
    },
    buttonOperator: {
        backgroundColor: '#FF5757',
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonOperatorText: {
        fontWeight: 'bold',
    }
});