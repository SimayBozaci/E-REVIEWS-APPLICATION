import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const HomeHeader = () => {
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: false,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    );

    pulse.start();

    return () => pulse.stop();
  }, [pulseAnimation]);

  const borderColor = pulseAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'rgba(255,255,255,0.2)'],
  });

  const textColor = pulseAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'darkgreen'],
  });

  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <View style={styles.textNotification}>
          <Animated.View
            style={[styles.textContainer, {borderColor: borderColor}]}>
            <Animated.Text style={[styles.text, {color: textColor}]}>
              E-REVIEWS
            </Animated.Text>
            {/* <Animated.Text style={[styles.subtext, {color: textColor}]}>
              Welcome to the world of E-Reviews
            </Animated.Text> */}
          </Animated.View>
          <Text style={styles.textİmage}>
            {' '}
            Welcome to the world of E-Reviews
          </Text>
          <View style={styles.containerlottie}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
  },
  contain: {
    backgroundColor: '#8FBC8F',
    flex: 1,
  },
  textNotification: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 25,
    paddingVertical: 190,
    borderRadius: 15,
    marginTop: 135,
    borderWidth: 3,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Times',
    textAlignVertical: 'center',
    color: 'green',
  },
  subtext: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  textİmage: {
    fontSize: 15,
    color: 'darkgreen',
    marginTop: 5,
    fontWeight: 'bold',
  },
  containerlottie: {
    width: 45,
    height: 45,
  },
});

export default HomeHeader;
