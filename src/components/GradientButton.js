import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../constants/colors';

const GradientButton = ({title, colors}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[...colors]}
      style={styles.linearGradient}>
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 80,
    marginRight: -80,
    borderRadius: 25,
  },
  title: {
    color: colors.white,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
});
