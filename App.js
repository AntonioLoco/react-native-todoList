import React, {useState, useRef} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import Todo from './components/Todo';

export default function App() {
  const [todoList, setToDoList] = useState(["Fare colazione", "Andare a fare la spesa", "Studiare", "Studiare react"]);
  const [newTask, setNewTask] = useState("");


  const deleteTodo = (index) => {
    const newList = todoList.filter( (el, i) => {
      if( index !== i){
        return el;
      }
    });
    setToDoList(newList);
  }

  const addTodo = () => {
    if(newTask !== ""){
        const old = todoList.map( el => el );
        old.push(newTask);
        setToDoList(old);
        setNewTask("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>
      <ScrollView style={styles.wrapperTodo}>
        {
          todoList.map( (el, index) => <Todo text={el} key={index} delete={deleteTodo} index={index}/> )
        }
      </ScrollView>
      <View style={styles.wrapperInput}> 
        <TextInput 
          placeholder='inserisci un task'
          value={newTask}
          onChangeText={ setNewTask }
          style={styles.input}
        />
        <TouchableOpacity onPress={ () => addTodo()} style={styles.button}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    position: "relative",
    height: Dimensions.get('window').height
  },
  title: {
    marginTop: 80,
    marginLeft: 30,
    color: '#f5f5f5',
    fontSize: 25,
    fontWeight: 'bold'
  },
  wrapperTodo: {
    width: "90%",
    maxHeight: (Dimensions.get('window').height) - 250, 
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperInput: {
    position: "absolute",
    width: "100%",
    height: 120,
    bottom: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingBottom: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "flex-end",
  },
  input: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
  textButton: {
    fontSize: 20,
  }
});
