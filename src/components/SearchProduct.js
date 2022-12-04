import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function SearchProduct(props) {
  const { item, navigation } = props;
  const goToDetail = () => {
    if (navigation) {
      navigation.navigate("ProductDetailScreen", {
        item: item,
      });
    }
  };
  return (
    <TouchableOpacity style={{ ...styles.container }} onPress={goToDetail}>
      <Image style={styles.imageStyle} source={{ uri: item?.image }} />
      <View style={styles.infoContainer}>
        <Text
          numberOfLines={1}
          style={{
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {item?.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: "#F99928",
            marginBottom: 10,
          }}
        >
          {item?.owner}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              color: "#333",
              fontWeight: "bold",
              width: 100,
              textAlignVertical: "center",
            }}
          >
            {item?.price} VND
          </Text>
          <View
            style={{
              padding: 5,
              backgroundColor: "#f4e6dc",
              borderRadius: 25,
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: "#07204c",
              }}
              source={require("../../assets/icon/cart.png")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default SearchProduct;
const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 14,
  },
  container: {
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  infoContainer: {
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
