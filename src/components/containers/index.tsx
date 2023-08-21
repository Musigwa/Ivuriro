import React, { Children, FC, PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

type ContainerProps = ViewProps & {
  variant?: 'row' | 'column' | 'columnCentered' | 'rowCentered';
  spacing?: number;
  scrollable?: boolean;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  spacing,
  style,
  variant = 'column',
  scrollable = false,
}) => {
  let defaultStyle: ViewStyle = {
    ...styles.column,
    width: '100%',
  };
  switch (variant) {
    case 'row':
      defaultStyle = { ...defaultStyle, ...styles.row };
      break;
    case 'columnCentered':
      defaultStyle = { ...defaultStyle, ...styles.center };
      break;
    case 'rowCentered':
      defaultStyle = { ...defaultStyle, flexDirection: 'row', ...styles.center };
      break;
    default:
      break;
  }
  const RenderChildren = Children.map(children, (child, idx) => (
    <>
      {idx !== 0 && <View style={{ height: spacing }} />}
      {child}
    </>
  ));

  return scrollable ? (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={[defaultStyle, style, { padding: 25 }]}
    >
      {RenderChildren}
    </ScrollView>
  ) : (
    <View style={[defaultStyle, style]}>{RenderChildren}</View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
