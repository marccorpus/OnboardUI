import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Button = ({title, color}) => {
  return <Text style={[styles.title, {color}]}>{title}</Text>;
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    marginTop: 12,
  },
});
