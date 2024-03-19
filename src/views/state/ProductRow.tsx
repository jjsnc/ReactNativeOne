import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

interface Product {
  name: string;
  price: number;
  count: number;
  id: string;
}
interface Props {
  product: Product;
  handleIncrement: (product: Product) => void;
  handleDecrement: (product: Product) => void;
}

const ProductRow: React.FC<Props> = ({
  product,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.textColumn}>{product.name}</Text>
      <Text style={styles.textColumn}>{product.price}</Text>
      <View style={styles.quantityContainer}>
        <Button
          hitSlop={10}
          title="+"
          onPress={() => handleIncrement(product)}
        />
        <Text>{product.count}</Text>
        <Button
          hitSlop={10}
          title="-"
          onPress={() => handleDecrement(product)}
        />
      </View>
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  textColumn: {
    flex: 1,
  },
  quantityContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
