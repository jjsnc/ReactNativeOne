import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

interface WaterfallLayoutProps {
  list: any;
}

const WaterfallLayout: React.FC<WaterfallLayoutProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={[styles.item, styles.height100]}>
          <Text style={styles.text}>Item 1</Text>
        </View>
        <View style={[styles.item, styles.height150]}>
          <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={[styles.item, styles.height120]}>
          <Text style={styles.text}>Item 3</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={[styles.item, styles.height130]}>
          <Text style={styles.text}>Item 4</Text>
        </View>
        <View style={[styles.item, styles.height110]}>
          <Text style={styles.text}>Item 5</Text>
        </View>
        <View style={[styles.item, styles.height90]}>
          <Text style={styles.text}>Item 6</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={[styles.item, styles.height140]}>
          <Text style={styles.text}>Item 7</Text>
        </View>
        <View style={[styles.item, styles.height100]}>
          <Text style={styles.text}>Item 8</Text>
        </View>
        <View style={[styles.item, styles.heigh160]}>
          <Text style={styles.text}>Item 9</Text>
        </View>
      </View>
    </View>
  );
};

export default WaterfallLayout;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  item: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  height100: {
    height: 100,
  },

  height150: {
    height: 150,
  },
  height120: {
    height: 120,
  },
  height130: {
    height: 130,
  },
  height110: {
    height: 110,
  },
  height90: {
    height: 90,
  },
  height140: {
    height: 140,
  },
  heigh160: {
    height: 160,
  },
  text: {
    color: '#333',
  },
});
