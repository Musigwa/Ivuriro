import React from 'react';
import {
  Animated,
  Button,
  Pressable,
  Text,
  ImageRequireSource,
  View,
  Platform,
} from 'react-native';
import style from '../style';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from 'react-native-paper';

export default ({
  imageUri,
  heading,
  // description,
  scrollOffsetAnimatedValue,
}: {
  imageUri: ImageRequireSource;
  // description: string;
  heading: string;
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, 0.5, 0.99];
  const inputRangeOpacity = [0, 0.5, 0.99];
  const { colors } = useTheme();
  const scale = scrollOffsetAnimatedValue.interpolate({ inputRange, outputRange: [1, 0, 1] });
  const opacity = scrollOffsetAnimatedValue.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [1, 0, 1],
  });

  const onPress = () => {};

  return (
    <View style={style.itemStyle}>
      <Animated.Image source={imageUri} style={[style.imageStyle, { transform: [{ scale }] }]} />
      <LinearGradient
        colors={['rgba(244, 246, 254,1)', 'rgba(249, 250, 255,1)', 'rgba(255, 255, 255,1)']}
        style={style.textContainer}
      >
        <Animated.Text style={[style.heading, { opacity }]}>{heading}</Animated.Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={style.paginationDotContainer}>
              <View style={[style.paginationDot, { backgroundColor: colors.primary }]} />
            </View>
            <View style={style.paginationDotContainer}>
              <View style={[style.paginationDot, { backgroundColor: colors.surfaceVariant }]} />
            </View>
            <View style={style.paginationDotContainer}>
              <View style={[style.paginationDot, { backgroundColor: colors.surfaceVariant }]} />
            </View>
          </View>
          <Pressable
            style={[style.button, { backgroundColor: false ? 'transparent' : colors.primary }]}
            onPress={onPress}
          >
            <MaterialIcons
              name='trending-flat'
              size={Platform.select({ android: 28, ios: 32 })}
              color='white'
            />
            {/* <Text style={style.skipBtn}>Skip</Text> */}
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};
