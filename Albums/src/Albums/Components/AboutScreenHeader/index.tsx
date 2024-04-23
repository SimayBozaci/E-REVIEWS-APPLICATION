import React from 'react';
import {StyleSheet, View} from 'react-native';

const AboutScreenHeader = () => {
  return (
    <>
      <View style={styles.header}>
        {/* <Image
          source={require('../../../../assets/İcons/about.png')}
          style={styles.imagesProduct}
          resizeMode="contain"
        /> */}
        <View style={styles.textNotification}>
          {/* <Text style={styles.text}>Hakkımızda</Text> */}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8FBC8F',
  },
  imagesProduct: {
    width: 35,
    height: 50,
    // backgroundColor: '#8FBC8F',
  },
  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',

    backgroundColor: '#8FBC8F',
  },
  imagesSettings: {
    width: 35,
    height: 35,
  },
});
export default AboutScreenHeader;
