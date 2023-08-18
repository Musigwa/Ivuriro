import AntDesignIcons from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import type { PagerViewOnPageScrollEventData } from 'react-native-pager-view';
import PagerView from 'react-native-pager-view';
import { Button, IconButton, useTheme } from 'react-native-paper';
import data from './data';
import style from './style';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const BoardingScreen = () => {
  const [position, setPosition] = useState(0);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

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
    <View style={{ flex: 1 }}>
      <AnimatedPagerView
        initialPage={0}
        style={{ flex: 1 }}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [{ nativeEvent: { offset: scrollOffsetAnimatedValue, position: positionAnimatedValue } }],
          { useNativeDriver: true }
        )}
        onPageSelected={e => {
          setPosition(e.nativeEvent.position);
        }}
      >
        {data.map(({ imageUri, heading, key }) => (
          <View key={key} style={style.itemStyle}>
            <Animated.Image
              source={imageUri}
              style={[style.imageStyle, { transform: [{ scale }] }]}
            />
            <LinearGradient
              colors={[
                'rgb(215, 232, 229)',
                'rgb(238, 246, 243)',
                'rgb(255, 255, 255)',
                'rgb(255, 255, 255)',
              ]}
              style={style.textContainer}
            >
              <Animated.Text style={[style.heading, { opacity }]}>{heading}</Animated.Text>
              <View
                style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}
              >
                <View style={{ flexDirection: 'row' }}>
                  {data.map(({}, index) => (
                    <View key={index} style={style.paginationDotContainer}>
                      <View
                        style={[
                          style.paginationDot,
                          {
                            backgroundColor:
                              position === index ? colors.primary : colors.surfaceVariant,
                          },
                        ]}
                      />
                    </View>
                  ))}
                </View>
                {position !== data.length - 1 ? (
                  <Button
                    labelStyle={{ fontWeight: 'bold', fontSize: 18 }}
                    onPress={() => console.log('Pressed')}
                    rippleColor='transparent'
                    compact
                  >
                    Skip
                  </Button>
                ) : (
                  <IconButton
                    icon={() => (
                      <AntDesignIcons name='arrowright' color={colors.onPrimary} size={25} />
                    )}
                    iconColor={colors.onPrimary}
                    size={40}
                    onPress={() => console.log('Pressed')}
                    containerColor={colors.primary}
                  />
                )}
              </View>
            </LinearGradient>
          </View>
        ))}
      </AnimatedPagerView>
      {/* <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      /> */}
    </View>
  );
};

export default BoardingScreen;
