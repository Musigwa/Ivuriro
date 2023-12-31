import React, { Children, FC, PropsWithChildren } from 'react';
import { ScrollView, View, ViewProps, ViewStyle } from 'react-native';
import { ContainerProps } from '@/interfaces/types';

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  spacing,
  style,
  scrollable,
  direction = 'column',
  justfy,
  align,
  reverse,
}) => {
  let defaultStyle: ViewStyle = {
    width: direction === 'column' ? '100%' : 'auto',
    justifyContent: justfy,
    alignItems: align,
    flexDirection: `${direction}${reverse ? '-reverse' : ''}`,
  };

  const RenderChildren = Children.map(children, (child, idx) => (
    <>
      {idx !== 0 && <View style={direction === 'row' ? { width: spacing } : { height: spacing }} />}
      {child}
    </>
  ));

  return scrollable ? (
    <ScrollView
      horizontal={direction === 'row'}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[defaultStyle, { padding: 25 }, style]}
    >
      {RenderChildren}
    </ScrollView>
  ) : (
    <View style={[defaultStyle, style]}>{RenderChildren}</View>
  );
};
