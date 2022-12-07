import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { Button } from "react-native-paper";

export default function CartScreen() {
  const isFocused = useIsFocused();
  const [cartList, setcartList] = useState([]);
  const onFinish = async () => {
    if (cartList.length > 0) {
      alert("Thanh Toán Thành Công!");
      let cartData = [];
      await AsyncStorage.setItem("cartData", JSON.stringify(cartData));
      setcartList([]);
    }
  };
  const getCartData = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
    } else {
      cartData = [];
    }
    setcartList(cartData);
  };
  useEffect(() => {
    getCartData();
  }, [isFocused]);
  const renderItem = ({ item, index }) => {
    return <CartItem item={item} index={index} onChange={setcartList} />;
  };
  const getTotal = () => {
    let total = 0;
    cartList.map((value) => (total += value.price * value.amount));
    return total;
  };
  return (
    <SafeAreaView
      style={{
        // paddingTop: 50,
        backgroundColor: "#f4e6dc",
        paddingHorizontal: 12,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#333",
            flex: 1,
          }}
        >
          SHOPPING CART
        </Text>
        {/* <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {"TỔNG: "}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#333",
          }}
        >
          {getTotal()} VND
        </Text> */}
      </View>
      {cartList.length > 0 ? (
        <FlatList
          style={{ marginTop: 12 }}
          data={cartList}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <Ionicons name="cart-outline" size={130} color="gray" /> */}
          <Image
            source={require("../../assets/icon/shopping-bag.png")}
            style={{ width: 150, height: 150, tintColor: 80 }}
          />
          <Text style={{ color: "gray", fontSize: 20 }}>Cart is emty!</Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {"TOTAL: "}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#333",
            }}
          >
            {getTotal()} VND
          </Text>
        </View>
        {/* <CustomButton
          onPress={onFinish}
          style={{ marginVertical: 12 }}
          title={"Check Out"}
        /> */}
        <Button
          onPress={onFinish}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: "#ea7f0a",
            borderRadius: 100,
            marginVertical: 12,
          }}
        >
          <Text style={{ color: "#f4e6dc", fontSize: 20 }}>Check Out</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
