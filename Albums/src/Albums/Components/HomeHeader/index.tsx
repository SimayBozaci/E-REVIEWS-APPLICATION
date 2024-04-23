import React from 'react';
import {StyleSheet, View} from 'react-native';

const HomeHeader = () => {
  return (
    <>
      <View style={styles.header}>
        {/* <Image
          source={require('../../../../assets/İcons/homepage.png')}
          style={styles.imagesProduct}
          resizeMode="contain"
        /> */}
        <View style={styles.textNotification}>
          {/* <Text style={styles.text}>HomeScreen</Text> */}
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
  // imagesProduct: {
  //   width: 35,
  //   height: 50,
  //   marginLeft: 180,
  // },
  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  imagesSettings: {
    width: 35,
    height: 35,
  },
});
export default HomeHeader;
