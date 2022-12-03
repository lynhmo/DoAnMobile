import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";
import InputForm from "../components/InputForm";
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const goToSignUp = async () => {
    navigation.navigate("Register");
  };
  const loginUser = () => {
    return fetch("https://dienmayblue.site/PHP_Server/Login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
        if (responseJson === "Data Matched") {
          //   Alert.alert("Đăng nhập thành công");
          //Then open Profile activity and send user email to profile activity.
          navigation.navigate("HomeTab");
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 12,
            backgroundColor: "#fff6eb",
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              height: 300,
              resizeMode: "contain",
              width: 300,
            }}
            source={require("../../assets/Logo/kitten-logo.png")}
          />
          <View>
            <Text style={styles.title}>Your username</Text>
            <InputForm
              // title={'Tài khoản'}
              placeholder={"Username"}
              onChangeText={(text) => setUsername(text)}
            />
            <Text style={styles.title}>Your password</Text>
            <InputForm
              placeholder={"Password"}
              // title={'Mật khẩu'}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <CustomButton
            style={{ marginTop: 20 }}
            title={"Login"}
            onPress={() => {
              loginUser();
            }}
          />
          <CustomButton
            style={{ marginTop: 12 }}
            title={"Sign up"}
            isSubButton={true}
            onPress={goToSignUp}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#07204c",
    marginBottom: 10,
  },
});
