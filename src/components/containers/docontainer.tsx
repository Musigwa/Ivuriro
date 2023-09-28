import { useAppTheme } from '@/assets/themes';
import React, { FC, PropsWithChildren } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CardProps = {
  elevated?: boolean;
};

type AvatarProps = {
  circular?: boolean;
};

type ContainerProps = ViewProps & {
  reverse?: boolean;
  direction?: 'row' | 'column';
  horizontalGap?: number;
  verticalGap?: number;
  scrollable?: boolean;
};

const Docontainer: FC<PropsWithChildren<ContainerProps & CardProps & AvatarProps>> = ({
  children,
  elevated,
  scrollable,
  circular,
  reverse,
  direction = 'column',
}) => {
  const { colors } = useAppTheme();
  const { bottom } = useSafeAreaInsets();

  const defaultStyle: any = {
    backgroundColor: colors.surface,
    // width: direction === 'column' ? '10%' : '100%',
    // height: direction === 'column' ? '100%' : '100%',
  };

  return scrollable ? (
    <ScrollView style={[defaultStyle, { maxWidth: '100%', maxHeight: '100%' }]}>
      {children}
    </ScrollView>
  ) : (
    <View
      style={[
        styles.container,
        elevated ? styles.elevated : null,
        styles.card,
        {
          borderColor: colors.outline,
          shadowColor: colors.outlineVariant,
          width: direction === 'column' ? '10%' : 'auto',
          flexDirection: `${direction}${reverse ? '-reverse' : ''}`,
          // gap: 2,
        },
        // style,
      ]}
    >
      {children}
    </View>
  );
};

export default Docontainer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  elevated: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
