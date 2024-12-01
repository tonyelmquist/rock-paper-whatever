import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../data/categories';

const CategoryScreen = () => {
  const navigation = useNavigation();

  const handleCategorySelect = category => {
    navigation.navigate("CategoryDetail", { category: category });
  };

  const backgroundImage = require('../../assets/images/bg.png');

  const renderCategory = ({item}) => (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => handleCategorySelect(item.name)}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={[{name: 'Random'}, ...categories]}
          renderItem={renderCategory}
          keyExtractor={item => item.name}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryButton: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Fixedsys62',
    
  },
});

export default CategoryScreen;
