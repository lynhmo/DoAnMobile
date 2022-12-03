import React from "react";
import { View, Text, TextInput } from "react-native";

export default function MainInput(props) {
  const {
    title,
    value,
    onChangeText,
    placeholder,
    onEndEditing,
    secureTextEntry,
  } = props;
  return (
    <>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{
          backgroundColor: "#f4f4f4",
          paddingVertical: 6,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#07204c50",
          fontSize: 16,
          paddingHorizontal: 20,
          marginBottom: 14,
        }}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
}
