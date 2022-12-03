import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton(props) {
  const { title, onPress, style, isSubButton } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        ...(isSubButton && styles.subButton),
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, color: isSubButton ? "#333" : "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#ea7f0a",
    borderRadius: 100,
  },
  title: {
    color: "#f4e6dc",
    fontSize: 20,
  },
  subButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ea7f0a",
    borderRadius: 100,
  },
});
