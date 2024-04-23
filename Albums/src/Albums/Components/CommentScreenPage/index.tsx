import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CommentScreenPage = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('../../../../assets/ıcons/comment.png')}
          style={styles.imagesProduct}
          resizeMode="contain"
        />
        <View style={styles.textNotification}>
          <Text style={styles.text}>Comment Screen</Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagesProduct: {
    width: 35,
    height: 50,
  },
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
export default CommentScreenPage;
