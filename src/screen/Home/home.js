import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ImageSlider } from "react-native-image-slider-banner";
// import { SliderBox } from "react-native-image-slider-box";
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
import ProductItem from "../../components/ProductItem";
import { manga } from "../../data/book";
import Slider from "../../components/Slider";

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
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const image = [
    "../../../assets/banner/manga.jpg",
    "../../../assets/banner/doraemon.jpg",
    "../../../assets/banner/giangsinh.jpg",
    "../../../assets/banner/vanhockinhdien.jpg",
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          backgroundColor: "#f4e6dc",
        }}
      >
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.search}
          />
        </View>
        <ImageSlider
          data={[
            { img: require("../../../assets/banner/manga.jpg") },
            { img: require("../../../assets/banner/doraemon.jpg") },
            { img: require("../../../assets/banner/giangsinh.jpg") },
            { img: require("../../../assets/banner/vanhockinhdien.jpg") },
          ]}
          localImg
          autoPlay={false}
          onItemChanged={(item) => console.log("item", item)}
          closeIconColor="#fff"
        />
        <StatusBar backgroundColor={"#f4e6dc"} barStyle={"dark-content"} />
        <View style={styles.sectionContainer}>
          <Text style={styles.title}>BEST OF ADIDAS</Text>
          {/* <FlatList
            data={manga}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
          /> */}
        </View>
        <Slider image={image}></Slider>
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
    marginTop: 10,
    borderRadius: 50,
    width: "90%",
  },
  searchContainer: {
    alignItems: "center",
  },
});
