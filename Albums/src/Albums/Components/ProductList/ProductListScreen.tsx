import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import jsonData from '../../data/products.json';
import styles from "./ProductList.styles";
const ProductListScreen = () => {

    const navigation = useNavigation();
  
    function onPress() {
      navigation.navigate('CommentScreen');
    }
  
    return (
      <View style={styles.mainScreen}>
        <FlatList
          data={jsonData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.mainbutton} onPress={onPress}>
              <View style={styles.dataItem}>
                <Text style={styles.productText}>{item.name}</Text>
                <Text style={styles.productText}>{item.brand}</Text>
                <View style={styles.imagebackpage}>
                  <Image style={styles.image} source={{uri: item.image}} />
                </View>
  
                <TouchableOpacity style={styles.button} onPress={onPress}>
                  <Text style={styles.text}>Go Comment</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  export default ProductListScreen;