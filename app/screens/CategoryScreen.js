import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { categories } from "../data/categories";
import NotchedButton from "../components/NotchedButton";

const CategoryScreen = () => {
  const navigation = useNavigation();

  const handleCategorySelect = (category) => {
    navigation.navigate("CategoryDetail", { category: category });
  };

  const backgroundImage = require("../../assets/images/vicbg.jpg");

  const renderCategory = ({ item }) => (
    <NotchedButton
      style={styles.categoryButton}
      action={() => handleCategorySelect(item.name)}
      text={item.name}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgImageWrapper}>
        <Image source={backgroundImage} style={styles.bgImage} />
      </View>

      <FlatList
        data={[
          { name: "Random" },
          { name: "Really Random" },
          { name: "Create Your Own" },

          ...categories,
        ]}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  bgImageWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch",
    width: "100%",
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignSelf: "center",
    alignItems: "center",
  },
  categoryButton: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  flatList: {
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    height: "60%",
  },
  categoryText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CategoryScreen;
