import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const ProductCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.viewButton}>View Product</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: SIZES.height * 0.25,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SIZES.padding,
  },
  title: {
    fontSize: SIZES.font.medium,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.padding * 0.3,
  },
  category: {
    fontSize: SIZES.font.small,
    color: COLORS.textSecondary,
    textTransform: 'capitalize',
    marginBottom: SIZES.padding * 0.5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: SIZES.font.large,
    fontWeight: '700',
    color: COLORS.primary,
  },
  viewButton: {
    fontSize: SIZES.font.small,
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default ProductCard;