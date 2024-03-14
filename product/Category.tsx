import React from 'react';
import {Text, TextStyle} from 'react-native';

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({category}): React.ReactElement => {
  const textStyle: TextStyle = {
    marginTop: 20,
    flexDirection: 'row', // 这个样式属性似乎不适用于 Text 组件，你可能需要将它移除
    width: 100,
    fontWeight: 'bold',
  };

  return <Text style={textStyle}>{category}</Text>;
};

export default Category;
