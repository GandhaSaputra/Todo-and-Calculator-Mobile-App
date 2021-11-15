import { Box, Text, SimpleGrid, Center, Pressable } from 'native-base'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const data = [
    { value: "1", color: "red", type: "number" },
    { value: "2", color: "red", type: "number" },
    { value: "-", color: "orange", type: "operator", operation: "-" },
    { value: "+", color: "orange", type: "operator", operation: "+" },
    { value: "3", color: "red", type: "number" },
    { value: "4", color: "red", type: "number" },
    { value: "/", color: "orange", type: "operator", operation: "/" },
    { value: "x", color: "orange", type: "operator", operation: "*" },
    { value: "5", color: "red", type: "number" },
    { value: "6", color: "red", type: "number" },
    { value: "%", color: "orange", type: "operator", operation: "%" },
    { value: "=", color: "orange", type: "operator", operation: "=" },
    { value: "7", color: "red", type: "number" },
    { value: "8", color: "red", type: "number" },
    { value: "9", color: "red", type: "number" },
    { value: "0", color: "red", type: "number" },
];

export default function CalculatorTwo() {
    const [value, setValue] = useState(null)

    const [stringNumber, setStringNumber] = useState("");
    const [stringNumberNext, setStringNumberNext] = useState("");
    const [operand, setOperand] = useState("");

    const onResult = (value) => {
        setValue(value);
    };

    const reset = (resultTmp) => {
        setStringNumber(resultTmp);
        setOperand("");
        setStringNumberNext("");
    };

    const onPress = (item) => {
        switch (item.type) {
            case "number":
                if (operand) setStringNumberNext(stringNumberNext + item.value);
                else setStringNumber(stringNumber + item.value);
                // code block
                break;
            default:
                if (!stringNumber) return false;
                if (
                    stringNumberNext &&
                    stringNumber &&
                    item.operation == "=" &&
                    operand
                ) {
                    let resultTmp = 0;
                    let stringNumberTmp = parseFloat(stringNumber);
                    let stringNumberTmpNext = parseFloat(stringNumberNext);
                    switch (operand) {
                        case "-":
                            resultTmp = stringNumberTmp - stringNumberTmpNext;
                            break;
                        case "/":
                            resultTmp = stringNumberTmp / stringNumberTmpNext;
                            break;
                        case "+":
                            resultTmp = stringNumberTmp + stringNumberTmpNext;
                            break;
                        case "*":
                            resultTmp = stringNumberTmp * stringNumberTmpNext;
                            break;
                        case "%":
                            resultTmp = stringNumberTmp % stringNumberTmpNext;
                            break;
                    }
                    reset(resultTmp);
                } else if (item.operation != "=") {
                    setOperand(item.operation);
                }
        }
    };

    useEffect(() => {
        onResult(`${stringNumber} ${operand} ${stringNumberNext}`);
    }, [stringNumber, operand, stringNumberNext]);

    return (
        <Box style={style.container}>
            <StatusBar />
            <Text color="primary.100" fontWeight="bold" fontSize={40}>
                CALCULATOR
            </Text>
            <Box bg="primary.50" borderRadius={5} height={100} mb={5}>
                <Text
                    fontSize={45}
                    mx={3}
                    my={2}
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                    }}
                    color="primary.100"
                >
                    {value ?? 0}
                </Text>
            </Box>
            <SimpleGrid columns={4} spacing={2}>
                {data.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={() => onPress(item)}>
                            <Box
                                ml="1"
                                mb="1"
                                key={index}
                                bg={`${item.color}.400`}
                                size={85}
                                rounded="lg"
                            >
                                <Center my="auto">
                                    <Text color="primary.50" fontWeight="bold" fontSize={40}>
                                        {item.value}
                                    </Text>
                                </Center>
                            </Box>
                        </Pressable>
                    );
                })}
            </SimpleGrid>
        </Box>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fda4af",
    }
})