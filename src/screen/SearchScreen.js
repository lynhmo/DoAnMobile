import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import SearchProduct from "../components/SearchProduct";
import InputForm from "../components/InputForm";
import { manga, All } from "../data/book";
export default function SearchScreen({ navigation }) {
  const [textSearch, settextSearch] = useState("");
  const suggestion = [
    "SPY X FAMILY",
    "CONAN",
    "RE:LIFE",
    "ĐẮC NHÂN TÂM",
    "NHỮNG ĐÊM KHÔNG NGỦ NHỮNG NGÀY CHẬM TRÔI",
    "TUỔI TRẺ ĐÁNG GIÁ BAO NHIÊU",
    "SỐ ĐỎ",
    "NGƯỜI GIÀU CÓ NHẤT THÀNH BABYLON",
  ];
  const renderResult = () => {
    const BookFilter = All.filter((value) =>
      value.name.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())
    );
    const renderItem = ({ item, index }) => (
      <SearchProduct item={item} navigation={navigation} />
    );
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>
          KẾT QUẢ
        </Text>
        <FlatList
          data={BookFilter}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f4e6dc",
        flex: 1,
        paddingHorizontal: 12,
      }}
    >
      <View style={{ marginTop: 20 }}>
        <InputForm
          value={textSearch}
          onChangeText={settextSearch}
          placeholder={"Nhập để tìm kiếm..."}
          title={"TÌM KIẾM"}
        />
      </View>
      {textSearch.trim().length > 0 ? (
        renderResult()
      ) : (
        <>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
            Recommended
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {suggestion.map((value, item) => (
              <TouchableOpacity
                onPress={() => {
                  settextSearch(value);
                }}
                style={{
                  backgroundColor: "#f4f4f4",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  marginRight: 12,
                  marginBottom: 12,
                  borderRadius: 100,
                }}
                key={item}
              >
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
