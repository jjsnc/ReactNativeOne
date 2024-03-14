import React from 'react';

import Category from './Category';

import {View, ViewStyle, Text, TextStyle} from 'react-native';
import ProductItem from './Product';

interface Product {
  category: string;
  price: string;
  name: string;
}

interface ProductTableProps {
  products: Product[];
}

const productListStyle: ViewStyle = {
  marginTop: 10,
  paddingLeft: 10,
};
let flexDirection: ViewStyle = {flexDirection: 'row'};

let nameStyle: TextStyle = {flex: 1, fontWeight: 'bold'};
let typeStyle: TextStyle = {width: 50, fontWeight: 'bold'};

function ProductTable(list: ProductTableProps) {
  let products = list.products;
  const rows: any = [];
  let categoryArr: string[] = [];
  products.forEach((product, index) => {
    if (!categoryArr.includes(product.category)) {
      rows.push(
        <Category category={product.category} key={product.category + index} />,
      );
      categoryArr.push(product.category);
    }
    rows.push(<ProductItem product={product} key={product.name + index} />);
  });

  return (
    <View style={productListStyle}>
      <View style={flexDirection}>
        <Text style={nameStyle}>名称</Text>
        <Text style={typeStyle}>价格</Text>
      </View>
      <View>{rows}</View>
    </View>
  );
}
export default ProductTable;
