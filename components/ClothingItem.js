import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ClothingItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item)}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSize}>Maat: {item.size}</Text>
        <Text style={styles.itemPrice}>Prijs: ${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  itemImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemDetails: {
    marginTop: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSize: {
    fontSize: 14,
    marginTop: 4,
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 4,
    color: '#007bff',
  },
});

export default ClothingItem;
