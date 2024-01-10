import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ClothingDetails = ({ item, onBackPress }) => {
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
});

export default ClothingDetails;