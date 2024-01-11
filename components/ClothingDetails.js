import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ClothingDetails = ({ item, onBackPress }) => {
  const [favorieten, setFavorieten] = useState([]);

  const addToFavorites = () => {
    setFavorieten([...favorieten, item]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backButtonText}>{'< Terug'}</Text>
      </TouchableOpacity>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSize}>Maat: {item.size}</Text>
        <Text style={styles.itemPrice}>Prijs: ${item.price}</Text>

        <TouchableOpacity style={styles.addToFavoritesButton} onPress={addToFavorites}>
          <Text style={styles.addToFavoritesText}>Toevoegen aan Favorieten</Text>
        </TouchableOpacity>
        <Text style={styles.itemDescription}>Productbeschrijving: {item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    marginBottom: 8,
    marginTop: 32,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
  itemImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemDetails: {
    marginTop: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemSize: {
    fontSize: 18,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    color: '#007bff',
  },
  addToFavoritesButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  addToFavoritesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default ClothingDetails;