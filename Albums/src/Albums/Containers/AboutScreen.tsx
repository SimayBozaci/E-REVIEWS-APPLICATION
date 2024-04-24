import React from 'react';
import {StyleSheet, View} from 'react-native';
import AboutScreenHeader from '../Components/AboutScreen';
import AboutScreenPage from '../Components/AboutScreenHeader';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <AboutScreenHeader />
      <AboutScreenPage />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
