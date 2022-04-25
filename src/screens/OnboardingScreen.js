import React from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Slide from '../components/Slide';
import Button from '../components/Button';
import GradientButton from '../components/GradientButton';

import colors from '../constants/colors';

const OnboardingScreen = ({onDone}) => {
  const slides = [
    {
      key: 1,
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: require('../assets/images/Onboard1.png'),
    },
    {
      key: 2,
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: require('../assets/images/Onboard2.png'),
    },
    {
      key: 3,
      title: 'Spend more time doing the things you love',
      text: 'Get started within five minutes',
      image: require('../assets/images/Onboard3.png'),
    },
  ];

  const renderItem = ({item}) => {
    const {image, title, text} = item;

    return <Slide image={image} title={title} text={text} />;
  };

  const renderButton = (title, color) => {
    return <Button title={title} color={color} />;
  };

  const renderGradientButton = (title, colors) => {
    return <GradientButton title={title} colors={colors} />;
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      showPrevButton
      renderPrevButton={() => renderButton('Prev', colors.black)}
      renderNextButton={() => renderButton('Next', colors.blue)}
      renderDoneButton={() =>
        renderGradientButton('Done', ['#A5C8FF', '#23286B'])
      }
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: colors.gray,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
});
