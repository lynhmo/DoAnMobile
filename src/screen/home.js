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
import {
  manga,
  vanhoc,
  doisong,
  kinhte,
  tieuxuhoiki,
  nuoidaycon,
  tienganh,
} from "../data/book";

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
            // { img: require("../../assets/banner/1212541.jpg") },
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
        {/* MANGA */}
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
        {/* DOI SONG */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/light-bulb.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>KỸ NĂNG SỐNG</Text>
        </View>
        <FlatList
          data={doisong}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        {/* KINH TE */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/piggy-bank.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>KINH TẾ</Text>
        </View>
        <FlatList
          data={kinhte}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        {/* VANHOC */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/manuscript.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>VĂN HỌC</Text>
        </View>
        <FlatList
          data={vanhoc}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        {/* tieu su */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/abraham-lincoln.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>TIỂU SỬ HỒI KÍ</Text>
        </View>
        <FlatList
          data={tieuxuhoiki}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        {/* nuoi day con */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/blackboard.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>NUÔI DẠY CON</Text>
        </View>
        <FlatList
          data={nuoidaycon}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
        {/* TIENG ANH */}
        <View style={styles.titleContainer}>
          <Image
            source={require("../../assets/icon/eng.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>TIẾNG ANH</Text>
        </View>
        <FlatList
          data={tienganh}
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
