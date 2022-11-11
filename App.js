import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
    setTodos([{ text: text, key: (todos.length + 1).toString() }, ...todos]);
  };

  const onPressHandler = (key) => {
    setTodos(todos.filter((todo) => todo.key != key));
  };

  return (
    <View style={styles.container}>
      <View>
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
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
