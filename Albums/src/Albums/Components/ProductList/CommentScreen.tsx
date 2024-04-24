import { FlatList, Text, View } from "react-native";
import jsonDataTwo from '../../data/comments.json';
import styles from "./ProductList.styles";
const CommentScreen = () => {
    return (
      <View style={styles.mainScreen}>
        <FlatList
          data={jsonDataTwo}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            
              <View style={styles.dataItem}>
                <Text style={styles.productIndex}>{item.id}</Text>
                <Text style={styles.productPhoneName}>{item.bluetooth_name}</Text>
                <Text style={styles.productcommentauthor}>
                  {item.comment_author}
                </Text>
                <Text style={styles.reviewLikeCount}>{item.reviewLikeCount}</Text>
                <Text style={styles.comment_detail}>{item.comment_detail}</Text>
                <Text style={styles.comment_date}>{item.comment_date}</Text>
                <Text style={styles.seller_name}>{item.seller_name}</Text>
              </View>
            
          )}
        />
      </View>
    );
  };
  export default CommentScreen;