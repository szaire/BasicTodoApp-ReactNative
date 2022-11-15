import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

// Todo app
function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos([{ text: text, key: (todos.length + 1).toString() }, ...todos]);
    } else {
      Alert.alert("Oops!", `Todo's must be over 3 chars long`, [
        { text: "Ok" },
      ]);
    }
  };

  const onPressHandler = (key) => {
    setTodos(todos.filter((todo) => todo.key != key));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo pressHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={onPressHandler} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
  },
  list: {
    flex: 1,
    // backgroundColor: "pink",
    marginTop: 20,
  },
});

export default App;
