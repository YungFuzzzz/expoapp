import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ClothingItem from './components/ClothingItem';
import ClothingDetails from './components/ClothingDetails';
import FavouritesPage from './components/FavouritesPage';

const clothingData = [
  { id: '1', name: 'Vetements Sweater', size: 'L', price: 1250, image: require('./assets/clothinitems/vetementssweater.png'), description: 'Groene sweater gemaakt uit 100% katoen. Gemaakt in Portugal.' },
  { id: '2', name: 'Balenciaga 3xl Sneakers', size: '43', price: 925, image: require('./assets/clothinitems/balenciaga3xl.png'), description: 'Oversized zwarte sneakers met veters op de neus van de schoen.' },
  { id: '3', name: 'Rick Owens Jacket', size: 'M', price: 2500, image: require('./assets/clothinitems/rickowensjacket.png'), description: 'Kahki groene puffer jas met overdreve lange mouwen.' },
  { id: '4', name: 'Vetements Jeans', size: '31', price: 1450, image: require('./assets/clothinitems/vetementsjeans.png'), description: 'super oversized zwarte jeans uit Japanse denim, gemaakt in Japan.' },
  { id: '5', name: 'Balenciaga Jeans', size: '33', price: 1800, image: require('./assets/clothinitems/balenciagajeans.png'), description: 'Half jeans half trainingsbroek. Gemaakt uit 100% katoen.' },
  { id: '6', name: 'AMBUSH Tee', size: 'M', price: 450, image: require('./assets/clothinitems/ambushtee.png'), description: 'Witte tee met zwarte graphics op de voorkant. Gemaakt in Amerika.' },
  { id: '7', name: 'AMBUSH glasses', size: 'OS', price: 200, image: require('./assets/clothinitems/ambushglasses.png'), description: 'Zwarte zonnebril met paarse glazen. 100% UV bescherming.' },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFavourites, setShowFavourites] = useState(false);

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const handleViewFavouritesPress = () => {
    setShowFavourites(true);
  };

  const handleBackPress = () => {
    setShowFavourites(false);
  };

  const renderContent = () => {
    if (showFavourites) {
      return <FavouritesPage onBackPress={handleBackPress} />;
    } else if (selectedItem) {
      return <ClothingDetails item={selectedItem} onBackPress={() => setSelectedItem(null)} />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>T'Winkelke</Text>
          <FlatList
            data={clothingData}
            keyExtractor={(item) => item.id}
            renderItem={renderClothingItem}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
          />
          <TouchableOpacity style={styles.viewFavouritesButton} onPress={handleViewFavouritesPress}>
            <Text style={styles.viewFavouritesText}>Bekijk Favorieten</Text>
          </TouchableOpacity>
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
  viewFavouritesButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  viewFavouritesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;