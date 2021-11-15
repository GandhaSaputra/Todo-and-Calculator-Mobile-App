import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckIcon, Box, CloseIcon } from 'native-base';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import axios from 'axios';

const Task = (props) => {
  const todo = props.data.todo
  const status = props.data.status

  const deleteTodo = async (id) => {
    try {
      await axios.delete("http://192.168.18.180:5000/api/v1/todo/" + id)
      props.getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  const finishedTodo = async (id) => {
    try {
      await axios.patch("http://192.168.18.180:5000/api/v1/todo/" + id)
      props.getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <Text style={styles.itemText}>
            {props.index + 1}
          </Text>
        </View>
        <Text style={styles.itemText}>{todo}</Text>
      </View>
      <Box style={styles.btnGroup}>
        {
          status === "Finished"
            ? (<Text style={styles.textDone}>Done</Text>
            ) : (
              <TouchableOpacity style={styles.squareCheckTodo} onPress={() => finishedTodo(props.data.id)}>
                <FontAwesome5 name="check" size={20} style={styles.btnCheckTodo} />
              </TouchableOpacity>
            )
        }
        <TouchableOpacity style={styles.squareDelTodo} onPress={() => deleteTodo(props.data.id)}>
          {/* <CloseIcon size="4" style={styles.btnDelTodo} /> */}
          <Feather name="trash-2" size={20} style={styles.btnDelTodo} />
        </TouchableOpacity>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 220
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    maxWidth: '80%',
    color: '#000'
  },
  btnGroup: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-evenly'
  },
  squareCheckTodo: {
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#9cffc2',
  },
  squareDelTodo: {
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#ff9696',
  },
  btnCheckTodo: {
    color: '#009e28'
  },
  btnDelTodo: {
    color: 'red'
  },
  textDone: {
    color: "#0ecf3e",
    fontWeight: 'bold'
  }
});

export default Task;