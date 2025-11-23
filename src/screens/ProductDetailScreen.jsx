import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import { IMAGES } from '../constants/imgpath';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={IMAGES.BACK}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.content}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {product.rating.rate}</Text>
            <Text style={styles.ratingCount}>
              ({product.rating.count} reviews)
            </Text>
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: SIZES.padding * 0.3,
  },
  backIcon: {
    width: SIZES.icon.medium,
    height: SIZES.icon.medium,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.4,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SIZES.padding,
  },
  category: {
    fontSize: SIZES.font.small,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SIZES.padding * 0.3,
  },
  title: {
    fontSize: SIZES.font.xlarge,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SIZES.padding * 0.5,
  },
  price: {
    fontSize: SIZES.font.xlarge,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: SIZES.padding * 0.5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  rating: {
    fontSize: SIZES.font.medium,
    fontWeight: '600',
    color: COLORS.text,
    marginRight: SIZES.padding * 0.5,
  },
  ratingCount: {
    fontSize: SIZES.font.small,
    color: COLORS.textSecondary,
  },
  descriptionTitle: {
    fontSize: SIZES.font.large,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.padding * 0.5,
  },
  description: {
    fontSize: SIZES.font.medium,
    color: COLORS.textSecondary,
    lineHeight: SIZES.font.medium * 1.6,
  },
});

export default ProductDetailScreen;
