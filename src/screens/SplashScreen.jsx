import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { IMAGES } from '../constants/imgpath';
import { COLORS, SIZES } from '../constants/theme';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('ProductList');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.APP} style={styles.logo} resizeMode="contain" />
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  logo: {
    width: SIZES.icon.large * 4,
    height: SIZES.icon.large * 4,
    marginBottom: SIZES.padding * 2,
  },

});

export default SplashScreen;

