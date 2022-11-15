import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function AddTodo({ pressHandler }) {
  const [text, setText] = useState("");

  const onChangeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeHandler}
        value={text}
      />
      <Button
        style={styles.button}
        title="add Todo"
        color={"#5dc1b9"}
        onPress={() => pressHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    borderColor: "#5dc1b9",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default AddTodo;
