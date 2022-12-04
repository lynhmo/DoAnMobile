import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductDetailScreen({ navigation, route }) {
  const params = route.params;
  const { item } = params;
  const [amount, setAmount] = useState(1);
  // const [size, setSize] = useState(item.size[0]);
  const onGoBack = () => {
    navigation.goBack();
  };
  const addToCart = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
      });
    } else {
      cartData = [];
      cartData.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        amount: amount,
      });
    }
    AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    navigation.navigate("CartScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#f4e6dc", flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={onGoBack}
          style={{
            backgroundColor: "#ea7f0a",
            // position: "absolute",
            // top: 30,
            // left: 12,
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginLeft: 10,
          }}
        >
          {/* <Ionicons name="chevron-back-outline" size={30} color="white" /> */}
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/icon/angle-left-thick.png")}
          />
        </TouchableOpacity>
        <Image
          style={{ width: "100%", height: 400, marginTop: 12 }}
          source={require("../../assets/mobile_image/dac-nhan-tam.jpg")}
        />
      </View>
      <View style={{ paddingHorizontal: 12, marginTop: 12, paddingBottom: 30 }}>
        <Text style={styles.bookname}>{item.name}</Text>
        <View style={styles.textDescriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.textDescription}>{item.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 10,
            justifyContent: "space-between",
          }}
        >
          {/* <View style={{ flex: 1 }} /> */}
          <View>
            <Text style={styles.amount}>Amount</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amoutValue}>{amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (amount > 1) setAmount((val) => val - 1);
                }}
              >
                <Ionicons name="remove" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAmount((val) => val + 1);
                }}
              >
                <Ionicons name="add" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{}}>
            <View style={{ flex: 9 }}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.total}>{item.price * amount} VND</Text>
            </View>
          </View>
        </View>
        <CustomButton
          onPress={addToCart}
          style={{ marginTop: 5 }}
          title={"THÊM VÀO GIỎ"}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  textDescription: {
    color: "black",
    fontSize: 14,
  },
  textDescriptionContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  bookname: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#07204c",
    marginBottom: 5,
    // marginLeft: 10,
  },
  amount: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 12,
  },
  total: {
    color: "#07204c",
    fontSize: 30,
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 5,
  },
  totalTitle: {
    color: "#000",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "bold",
  },
  descriptionTitle: {
    color: "#07204c",
    fontSize: 16,
    fontWeight: "bold",
  },
  amoutValue: {
    color: "#000",
    flex: 1,
    fontSize: 20,
    marginStart: 10,
  },
  button: {},
  amountContainer: {
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 16,
    borderRadius: 100,
    marginTop: 3,
    width: 150,
    paddingVertical: 8,
    flexDirection: "row",
  },
});
