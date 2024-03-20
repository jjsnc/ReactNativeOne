import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
const dianxinIcon = require('./dianxin.jpg');
import ICON_BASE64 from './ICON_BASE64';
export default function Images() {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={dianxinIcon}
        defaultSource={{uri: ICON_BASE64}}
      />
      <Image
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
        defaultSource={{uri: ICON_BASE64}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
});
