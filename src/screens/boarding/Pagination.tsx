import React from 'react';
import { Animated, View } from 'react-native';
import data from './data';
import style, { DOT_SIZE } from './style';

const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(scrollOffsetAnimatedValue, positionAnimatedValue).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[style.pagination]}>
      <Animated.View
        style={[
          style.paginationIndicator,
          { position: 'absolute', transform: [{ translateX: translateX }] },
        ]}
      />
      {data.map((item: any) => {
        return (
          <View key={item.key} style={style.paginationDotContainer}>
            <View style={[style.paginationDot, { backgroundColor: item.color }]} />
          </View>
        );
      })}
    </View>
  );
};

export default Pagination;
