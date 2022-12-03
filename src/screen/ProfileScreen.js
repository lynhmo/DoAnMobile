import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Image, SafeAreaView } from "react-native";
import CustomButton from "../components/CustomButton";

export default function ProfileScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem("curUser");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f4e6dc",
        flex: 1,
        width: "100%",
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          // flex: 1,
          height: 130,
          width: 130,
          alignItems: "center",
          borderRadius: 100,
          borderWidth: 2,
          borderColor: "#07204c",
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            // borderRadius: 100,
            // borderWidth: 2,
            // borderColor: "#07204c",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/icon/user.png")}
        />
      </View>
      <CustomButton
        onPress={logOut}
        style={{
          backgroundColor: "#ea7f0a",
          marginBottom: 100,
        }}
        title={"Logout"}
      />
    </SafeAreaView>
  );
}
