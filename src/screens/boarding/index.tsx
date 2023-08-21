import { useAppTheme } from '@/assets/themes';
import { Container } from '@/components/containers';
import { BoardingProps } from '@/interfaces/types';
import AntDesignIcons from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import type { PagerViewOnPageScrollEventData } from 'react-native-pager-view';
import PagerView from 'react-native-pager-view';
import { Button, IconButton, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import data from './data';
import style from './style';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const BoardingScreen = ({ navigation }: BoardingProps) => {
  const insets = useSafeAreaInsets();
  const [position, setPosition] = useState(0);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const inputRange = [0, 0.5, 0.99];
  const inputRangeOpacity = [0, 0.5, 0.99];
  const { colors } = useAppTheme();
  const scale = scrollOffsetAnimatedValue.interpolate({ inputRange, outputRange: [1, 0, 1] });

  const handleComplete = () => {
    navigation.navigate('GetStarted');
  };

  return (
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
            colors={[colors.elevation.level2, colors.elevation.level1, colors.background]}
            style={[style.textContainer]}
          >
            <Text variant='headlineSmall' style={{ textAlign: 'center' }}>
              {heading}
            </Text>
            <Container variant='row'>
              <Container variant='row' style={{ width: 'auto' }}>
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
              </Container>
              {position !== data.length - 1 ? (
                <Button
                  labelStyle={{ fontWeight: 'bold', fontSize: 18 }}
                  onPress={handleComplete}
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
                  onPress={handleComplete}
                  containerColor={colors.primary}
                />
              )}
            </Container>
          </LinearGradient>
        </View>
      ))}
    </AnimatedPagerView>
  );
};

export default BoardingScreen;
