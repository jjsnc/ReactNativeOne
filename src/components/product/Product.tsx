// ProductTable.js
import React from 'react';
import {Text, View, TextStyle, ViewStyle} from 'react-native';
interface ProductT {
  price: string;
  name: string;
  category: string;
}

interface ProductProps {
  product: ProductT;
}

function Product(productProps: ProductProps): React.JSX.Element {
  let flexDirection: ViewStyle = {flexDirection: 'row', marginTop: 5};

  let product = productProps.product;
  let nameStyle: TextStyle = {flex: 1, fontWeight: 'bold'};
  let typeStyle: TextStyle = {width: 50, fontWeight: 'bold'};
  return (
    <View style={flexDirection}>
      <Text style={nameStyle}>{product.name}</Text>
      <Text style={typeStyle}>{product.price}</Text>
    </View>
  );
}

export default Product;
