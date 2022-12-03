import React from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%

export default class Slider extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurements.width
    );
    if (slide !== this.state.active) {
      this.setState({
        active: slide,
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scroll}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={this.change}
        >
          {this.props.image.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {this.props.image.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? styles.pagingActiveTextText
                  : styles.pagingText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  scroll: {
    width,
    height,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    color: "#888",
    marginBottom: 5,
    fontSize: width / 30,
  },
  pagingActiveText: {
    color: "#fff",
    marginBottom: 5,
    fontSize: width / 30,
  },
});
