import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const Todo = (props) => {
  return (
    <View style={styles.Todo}>
        <Text>{props.text}</Text>
        <TouchableOpacity onPress={ () => props.delete(props.index)} style={styles.button}>
            <Text style={styles.textBtn}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Todo: {
        width: "100%",
        minHeight: 70,
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        marginBottom: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
      width: 30,
      height: 30,
      borderRadius: 5,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    },
    textBtn: {
      color: "white",
       fontSize: 15,
        fontWeight: "bold"
      }
});

export default Todo