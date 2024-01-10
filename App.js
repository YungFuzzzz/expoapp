import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ClothingItem from './components/ClothingItem';
import ClothingDetails from './components/ClothingDetails';

const clothingData = [
  { id: '1', name: 'Vetements Sweater', size: 'L', price: 1250, image: require('./assets/clothinitems/vetementssweater.png') },
  { id: '2', name: 'Balenciaga 3xl Sneakers', size: '43', price: 925, image: require('./assets/clothinitems/balenciaga3xl.png') },
  { id: '3', name: 'Rick Owens Jacket', size: 'M', price: 2500, image: require('./assets/clothinitems/rickowensjacket.png') },
  { id: '4', name: 'Vetements Jeans', size: '31', price: 1450, image: require('./assets/clothinitems/vetementsjeans.png') },
  { id: '5', name: 'Balenciaga Jeans', size: '33', price: 1800, image: require('./assets/clothinitems/balenciagajeans.png') },
  { id: '6', name: 'AMBUSH Tee', size: 'M', price: 450, image: require('./assets/clothinitems/ambushtee.png') },
  { id: '7', name: 'AMBUSH glasses', size: 'OS', price: 200, image: require('./assets/clothinitems/ambushglasses.png') },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    if (selectedItem) {
      return <ClothingDetails item={selectedItem} onBackPress={() => setSelectedItem(null)} />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Kledingwinkel</Text>
          <FlatList
            data={clothingData}
            keyExtractor={(item) => item.id}
            renderItem={renderClothingItem}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );
    }
  };

  const renderClothingItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}
    >
      <ClothingItem item={item} onPress={handleItemPress} />
    </TouchableOpacity>
  );

  return renderContent();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flex: 1,
    marginBottom: 16,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
});

export default App;