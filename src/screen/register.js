import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../components/CustomButton";
import InputForm from "../components/InputForm";
export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onGoBack = () => {
    navigation.goBack();
  };
  const SignUp = () => {
    return fetch("http://botstore.space/PHP_Server/Signup.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,

        username: username,

        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, backgroundColor: "#fff6eb", paddingHorizontal: 12 }}
      >
        <View
          style={{ flexDirection: "row", marginTop: 50, alignItems: "center" }}
        >
          {/* back button */}
          <TouchableOpacity
            onPress={onGoBack}
            style={{
              backgroundColor: "#f4f4f4",
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              borderWidth: 2,
              bordercolor: "#07204c",
            }}
          >
            <Image
              style={{ height: 45, width: 45, resizeMode: "contain" }}
              source={require("../../assets/icon/arrow-small-left.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#07204c",
              fontSize: 25,
              paddingLeft: 20,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              height: 200,
              resizeMode: "contain",
              width: 200,
            }}
            source={require("../../assets/Logo/logo-kitten.png")}
          />
          <InputForm
            placeholder={"Full name"}
            onChangeText={(text) => setName(text)}
          />
          <InputForm
            placeholder={"Username"}
            onChangeText={(text) => setUsername(text)}
          />
          <InputForm
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <CustomButton
            onPress={() => {
              SignUp();
            }}
            style={{ marginTop: 12 }}
            title={"Sign Up"}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
