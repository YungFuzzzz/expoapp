import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ClothingItem from './components/clothingItems';

const clothingData = [
  { id: '1', name: 'Vetements Sweater', size: 'L', price: 1250, image: require('./assets/clothinitems/vetementssweater.png') },
  { id: '2', name: 'Balenciaga 3xl Sneakers', size: '43', price: 925, image: require('./assets/clothinitems/balenciaga3xl.png') },
  { id: '3', name: 'Rick Owens Jacket', size: 'M', price: 2500, image: require('./assets/clothinitems/rickowensjacket.png') },
  { id: '4', name: 'Vetements Jeans', size: '31', price: 1450, image: require('./assets/clothinitems/vetementsjeans.png') },
  { id: '5', name: 'Balenciaga Jeans', size: '33', price: 1800, image: require('./assets/clothinitems/balenciagajeans.png') },
  { id: '6', name: 'AMBUSH Tee', size: 'M', price: 450, image: require('./assets/clothinitems/ambushtee.png') },
  { id: '7', name: 'AMBUSH glasses', size: 'OS', price: 200, image: require('./assets/clothinitems/ambushglasses.png') },
];

const ClothingApp = () => {
  const renderClothingItem = ({ item }) => (
    <ClothingItem item={item} onPress={handleItemPress} />
  );

  const handleItemPress = (item) => {
    console.log('Geselecteerd kledingstuk:', item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Clothing Store</Text>
      </View>
      <FlatList
        data={clothingData}
        keyExtractor={(item) => item.id}
        renderItem={renderClothingItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
});

export default ClothingApp;