import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

const ProductHeader = () => {
  StatusBar.setBackgroundColor('#8FBC8F');
  return (
    <View style={{}}>
      <View style={styles.header}>
        <View style={styles.textNotification}>
          {/* <Text style={styles.text}>Ürünler</Text> */}
        </View>
        {/* <Image
          source={require('../../../../assets/İcons/product-29.png')}
          style={styles.imagesProduct}
          resizeMode="contain"
        /> */}
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
  imagesProduct: {
    width: 33,
    height: 33,
    backgroundColor: '#8FBC8F',
    marginRight: 5,
  },

  textNotification: {
    flex: 1,
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Times',
    marginRight: 21,
    marginLeft: 55,
    marginBottom: 11,
    marginTop: 11,
  },
  lefttext: {
    fontSize: 14,
    color: '#8FBC8F',
    fontWeight: 'bold',
    marginLeft: 1,
    marginTop: 5,
  },
  leftHeader: {
    borderWidth: 0.5,
    borderRadius: 21,
    borderColor: 'white',
    width: 35,
    height: 35,
    marginLeft: 3,
    backgroundColor: 'white',
  },
});
export default ProductHeader;
