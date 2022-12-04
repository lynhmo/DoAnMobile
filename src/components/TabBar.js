import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
  var imgArr = [
    require("../../assets/icon/home.png"),
    require("../../assets/icon/search.png"),
    require("../../assets/icon/shopping-bag.png"),
    require("../../assets/icon/user.png"),
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ea7f0a",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: isFocused ? "#ebaf09" : "transparent",
                alignItems: "center",
                justifyContent: "center",
                marginVertically: 20,
                width: 45,
                height: 45,
                borderRadius: 25,
              }}
            >
              <Image
                style={{
                  tintColor: isFocused ? "#333" : "#222",
                  height: 22,
                  width: 22,
                  resizeMode: "contain",
                }}
                source={imgArr[index]}
              />
              <View
                style={{
                  marginTop: 4,
                  height: 2,
                  width: 8,
                  borderRadius: 10,
                  backgroundColor: isFocused ? "#333" : "transparent",
                }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
