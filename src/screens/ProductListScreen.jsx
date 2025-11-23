import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/productsSlice';
import ProductCard from '../components/ProductCard';
import { COLORS, SIZES } from '../constants/theme';
import { IMAGES } from '../constants/imgpath';

const ProductListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);



  const handleProductPress = item => {
    navigation.navigate('ProductDetail', { product: item });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Image source={IMAGES.APP} style={styles.logo} resizeMode="contain" />
        <Image
          source={IMAGES.BASKET}
          style={styles.basket}
          resizeMode="contain"
        />
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      )}

      {error && !loading && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <Text style={styles.errorSubtext}>
            Please check your internet connection and try again.
          </Text>
        </View>
      )}

      {!loading && !error && items.length === 0 && (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products available</Text>
        </View>
      )}

      {!loading && !error && items.length > 0 && (
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard item={item} onPress={() => handleProductPress(item)} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding * 2,
  },
  loadingText: {
    marginTop: SIZES.padding,
    fontSize: SIZES.font.medium,
    color: COLORS.textSecondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.padding * 2,
  },
  emptyText: {
    fontSize: SIZES.font.medium,
    color: COLORS.textSecondary,
  },
  errorSubtext: {
    marginTop: SIZES.padding * 0.5,
    fontSize: SIZES.font.small,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    // backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  logo: {
    width: SIZES.icon.large +10,
    height: SIZES.icon.large +10,
  },
  basket: {
    width: SIZES.icon.large,
    height: SIZES.icon.large,
  },

  listContent: {
    paddingTop: SIZES.padding * 0.5,
    paddingBottom: SIZES.padding,
  },
  errorText: {
    fontSize: SIZES.font.medium,
    color: COLORS.error,
  },
});

export default ProductListScreen;
