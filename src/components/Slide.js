import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import colors from '../constants/colors';

const Slide = ({image, title, text}) => {
  return (
    <View style={styles.container}>
      <Image source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    color: colors.gray,
    marginTop: 21,
  },
});
