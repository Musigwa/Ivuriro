import { useAppTheme } from '@/assets/themes';
import { ContainerProps } from '@/interfaces/types';
import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from '../containers';

const CardContainer: FC<PropsWithChildren<ContainerProps & { elevated?: boolean }>> = ({
  children,
  style,
  elevated,
  ...props
}) => {
  const { colors } = useAppTheme();
  return (
    <Container
      style={[
        {
          backgroundColor: colors.surface,
          borderColor: colors.outline,
          shadowColor: colors.outlineVariant,
        },
        elevated ? styles.elevated : null,
        styles.container,
        style,
      ]}
      {...props}
    >
      {children}
    </Container>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 10,
  },
  elevated: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
