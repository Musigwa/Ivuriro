import React from 'react';
import { Animated, View } from 'react-native';
import type { PagerViewOnPageScrollEventData } from 'react-native-pager-view';
import PagerView from 'react-native-pager-view';
import Item from './Item';
import style from './style';
import Pagination from './Pagination';
import data from './data';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const BoardingScreen = () => {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  // const listener = ({ nativeEvent }: { nativeEvent: any }) => {
  //   const { offset, position } = nativeEvent;
  //   console.log(`Position: ${position} Offset: ${offset}`);
  // };

  return (
    <View style={style.container}>
      <AnimatedPagerView
        initialPage={0}
        style={{ width: '100%', height: '100%' }}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [{ nativeEvent: { offset: scrollOffsetAnimatedValue, position: positionAnimatedValue } }],
          { useNativeDriver: true }
        )}
      >
        {data.map((item, index) => (
          <View collapsable={false} key={index}>
            <Item
              {...item}
              scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
              positionAnimatedValue={positionAnimatedValue}
            />
          </View>
        ))}
      </AnimatedPagerView>
      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    </View>
  );
};

export default BoardingScreen;
