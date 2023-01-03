import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Dimensions, Keyboard} from 'react-native';
import Todo from './components/Todo';

export default function App() {
  const [todoList, setToDoList] = useState(["Fare colazione", "Andare a fare la spesa", "Studiare", "Studiare react"]);
  const [newTask, setNewTask] = useState("");
  let heightHeader = 80;
  let heightInput = 120;
  const [positionInput, setPositionInput] = useState(0);


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

  const openKeyboard = () => {
    setPositionInput(310);
  }

  const closeKeyboard = () => {
    setPositionInput(0);
    Keyboard.dismiss();
  }

  return (
    <View style={{width: "100%", height: Dimensions.get('window').height, backgroundColor: "#252525",position: "relative"}}>
      <View style={[styles.container, {bottom: positionInput}]}>
        <Text style={[styles.title, {marginTop: heightHeader}]}>To do List</Text>
        <ScrollView style={[styles.wrapperTodo, {maxHeight: (Dimensions.get('window').height) - (heightHeader + heightInput)}]}>
          {
            todoList.map( (el, index) => <Todo text={el} key={index} delete={deleteTodo} index={index}/> )
          }
        </ScrollView>
        <View style={[styles.wrapperInput, { height: heightInput}]}> 
          <TextInput 
            placeholder='inserisci un task'
            value={newTask}
            onChangeText={ setNewTask }
            style={styles.input}
            keyboardAppearance="dark"
            onFocus={openKeyboard}
            onEndEditing={closeKeyboard}
          />
          <TouchableOpacity onPress={ () => {
            addTodo();
            closeKeyboard()
            }} style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252525',
    position: "relative",
    height: Dimensions.get('window').height,
    position: "absolute",
    left: 0,
    right: 0
  },
  title: {
    marginLeft: 30,
    paddingBottom: 20,
    color: '#f5f5f5',
    fontSize: 25,
    fontWeight: 'bold'
  },
  wrapperTodo: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  wrapperInput: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
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
