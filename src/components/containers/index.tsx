import { StyleSheet, Text, View, ViewProps, ViewStyle, useWindowDimensions } from 'react-native';
import React, { FC, PropsWithChildren, Children } from 'react';

type ContainerProps = ViewProps & {
  variant?: 'row' | 'column' | 'columnCentered' | 'rowCentered';
  spacing?: number;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  spacing,
  style,
  variant = 'column',
}) => {
  const { width } = useWindowDimensions();
  let defaultStyle: ViewStyle = { ...styles.column, width: '100%' };
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
  return (
    <View style={[defaultStyle, style]}>
      {Children.map(children, (child, idx) => (
        <>
          {idx !== 0 && <View style={{ height: spacing }} />}
          {child}
        </>
      ))}
    </View>
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
