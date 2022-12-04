import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ImageSlider } from "react-native-image-slider-banner";
import { Searchbar } from "react-native-paper";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Icon,
} from "react-native";
// import { StatusBar } from 'expo-status-bar';
import ProductItem from "../components/ProductItem";
import { manga } from "../data/book";

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <ProductItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem("curUser");
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  //search bar
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: "#f4e6dc",
          // paddingHorizontal: 12,
        }}
      >
        <View style={styles.searchContainer}>
          <Image
            source={require("../../assets/Logo/logo-kitten.png")}
            style={{
              width: 60,
              height: 60,
            }}
          />
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
          />
        </View>
        <ImageSlider
          data={[
            { img: require("../../assets/banner/manga.jpg") },
            { img: require("../../assets/banner/doraemon.jpg") },
            { img: require("../../assets/banner/giangsinh.jpg") },
            { img: require("../../assets/banner/vanhockinhdien.jpg") },
            { img: require("../../assets/banner/collection_banner.webp") },
            { img: require("../../assets/banner/slide_2_img.webp") },
            { img: require("../../assets/banner/1212541.jpg") },
          ]}
          localImg
          timer={6000}
          autoPlay={true}
          onItemChanged={(item) => console.log("item", item)}
          closeIconColor="#fff"
          activeIndicatorStyle={{ backgroundColor: "#ea7f0a" }}
          inActiveIndicatorStyle={{ backgroundColor: "#f5cea4" }}
          indicatorContainerStyle={{
            backgroundColor: "#f5cea4",
            position: "absolute",
            top: 5,
          }}
          caroselImageStyle={{ height: 210 }}
          preview={false}
          styles={{ position: "relative" }}
        />
        <StatusBar backgroundColor={"#f4e6dc"} barStyle={"dark-content"} />
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/flame.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>MANGA</Text>
        </View>
        <FlatList
          data={manga}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  search: {
    // marginTop: 10,
    borderRadius: 50,
    width: "80%",
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    // marginBottom: 12,
    marginLeft: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
  },
});
