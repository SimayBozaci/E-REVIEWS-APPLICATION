import React from 'react';
import {View} from 'react-native';
import CommentScreenPage from '../Components/CommentScreenHeader';
import CommentScreenHeader from '../Components/CommentScreenPage';

const CommentScreen = () => {
  return (
    <View>
      <CommentScreenHeader />
      <CommentScreenPage />
    </View>
  );
};

export default CommentScreen;
