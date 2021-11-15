import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from "react-native";
import { AddIcon, Box, Text, Center, Modal, Button } from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";

import Task from "../components/Task";

import { API } from "../config/api";

import axios from "axios";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [taskItems, setTaskItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSubmitAddTask = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const data = {
                todo,
            };
            await API.post("/todo", data, config);
            setTodo("");
            getTodos();
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getTodos = async () => {
        try {
            await axios.get("http://192.168.18.180:5000/api/v1/todos")
                .then((res) => {
                    setTaskItems(res.data.todos);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Box style={style.container}>
            <StatusBar />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <Box style={style.tasksWrapper}>
                    <Text style={style.sectionTitle}>Today Tasks</Text>
                    <Box style={style.items}>
                        {taskItems.length === 0 ? (
                            <Center marginTop={200}>
                                <Text style={style.textNotToDo}>Nothing To Do</Text>
                                <FontAwesome5 name="smile-beam" size={50} color="#9c9c9c" />
                            </Center>
                        ) : (
                            <Box style={style.tasksItemWrapper}>
                                {taskItems.map((item, index) => {
                                    return (
                                        <Box key={index}>
                                            <Task data={item} index={index} getTodos={getTodos} />
                                        </Box>
                                    );
                                })}
                            </Box>
                        )}
                    </Box>
                </Box>
            </ScrollView>

            <Box style={style.writeTaskWrapper}>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Box style={style.addWrapper}>
                        <AddIcon color="#9c9c9c" size="7" />
                    </Box>
                </TouchableOpacity>
            </Box>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>Add Some Task</Modal.Header>
                    <Modal.Body>
                        <TextInput
                            style={style.input}
                            placeholder="Input task"
                            value={todo}
                            onChangeText={(value) => setTodo(value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                onPress={() => {
                                    handleSubmitAddTask();
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Box>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        paddingTop: 10,
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    textNotToDo: {
        padding: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: "#9c9c9c",
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        flex: 1,
        position: "absolute",
        bottom: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    tasksItemWrapper: {},
    input: {
        paddingVertical: 15,
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
        height: 50,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    addText: {
        fontSize: 20,
        color: "#000",
    },
});
