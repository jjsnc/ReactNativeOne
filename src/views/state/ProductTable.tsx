import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ProductRow from './ProductRow';
enum RequestStatus {
  IDLE = 'IDLE',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PENDING = 'PENDING',
}

interface Product {
  name: string;
  price: number;
  id: string;
  count: number;
}

type Products = Product[];

function ProductTable() {
  const [products, setProducts] = useState<Products>([]);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.IDLE,
  );

  useEffect(() => {
    setRequestStatus(RequestStatus.PENDING);

    fetch('https://61c48e65f1af4a0017d9966d.mockapi.io/products')
      .then(res => res.json())
      .then((products: Products) => {
        products = [
          {
            name: 'Smartphone',
            price: 599.99,
            id: '001',
            count: 20,
          },
          {
            name: 'Laptop',
            price: 999.99,
            id: '002',
            count: 15,
          },
          {
            name: 'Headphones',
            price: 149.99,
            id: '003',
            count: 30,
          },
          {
            name: 'Tablet',
            price: 399.99,
            id: '004',
            count: 25,
          },
          {
            name: 'Smartwatch',
            price: 199.99,
            id: '005',
            count: 18,
          },
          {
            name: 'Camera',
            price: 799.99,
            id: '006',
            count: 12,
          },
        ];
        setRequestStatus(RequestStatus.SUCCESS);
        setProducts(products);
      })
      .catch(() => {
        setRequestStatus(RequestStatus.PENDING);
      });
  }, []);

  const total = products
    .reduce((sum, product) => {
      return sum + Number(product.price) * product.count;
    }, 0)
    .toFixed(2);

  const getUpdatedProducts = (product: Product) => {
    const newProducts = [...products];

    for (let index = 0; index < products.length; index++) {
      if (products[index].id === product.id) {
        newProducts[index] = product;
      }
    }

    return newProducts;
  };
  const handleIncrement = (product: Product) => {
    const newProduct: Product = {...product, count: product.count + 1};
    const newProducts: Products = getUpdatedProducts(newProduct);
    setProducts(newProducts);
  };
  const handleDecrement = (product: Product) => {
    const count = product.count - 1 >= 0 ? product.count - 1 : 0;
    const newProduct: Product = {...product, count: count};
    const newProducts: Products = getUpdatedProducts(newProduct);
    setProducts(newProducts);
  };
  if (requestStatus === RequestStatus.ERROR) {
    return <Text>网络出错了</Text>;
  }
  if (requestStatus === RequestStatus.PENDING) {
    return <Text>加载中...</Text>;
  }
  return (
    <View style={styles.marginTop10}>
      <View style={styles.rowContainer}>
        <Text style={styles.columnText}>名称</Text>
        <Text style={styles.columnText}>价格</Text>
        <Text style={styles.quantityText}>数量</Text>
      </View>
      <View>
        {products.map(product => (
          <ProductRow
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            product={product}
            key={product.id}
          />
        ))}
      </View>
      <Text style={styles.totalPriceTextStyle}>总价: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  totalPriceTextStyle: {
    marginTop: 30,
    fontWeight: 'bold',
  },
  marginTop10: {
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnText: {
    flex: 1,
    fontWeight: 'bold',
  },
  quantityText: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});

export default ProductTable;
