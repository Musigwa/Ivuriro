import React from 'react';
import { Animated, ImageRequireSource, View } from 'react-native';
import style from './style';

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
  const scale = scrollOffsetAnimatedValue.interpolate({ inputRange, outputRange: [1, 0, 1] });

  const opacity = scrollOffsetAnimatedValue.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [1, 0, 1],
  });

  return (
    <View style={style.itemStyle}>
      <Animated.Image source={imageUri} style={[style.imageStyle, { transform: [{ scale }] }]} />
      <View style={style.textContainer}>
        <Animated.Text style={[style.heading, { opacity }]}>{heading}</Animated.Text>
      </View>
    </View>
  );
};
