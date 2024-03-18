/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ProductTable from './src/components/product/ProductTable';
import MadInput from './src/components/input/input';
import MadSwitch from './src/components/switch/switch';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const PRODUCTS = [
  {category: '水果', price: '￥1', name: 'PingGuo'},
  {category: '水果', price: '￥1', name: 'HuoLongGuo'},
  {category: '水果', price: '￥2', name: 'BaiXiangGuo'},
  {category: '蔬菜', price: '￥2', name: 'BoCai'},
  {category: '蔬菜', price: '￥4', name: 'NanGua'},
  {category: '蔬菜', price: '￥1', name: 'WanDou'},
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const inputStyle: ViewStyle = {paddingLeft: 10, paddingRight: 10};
  const switchStyle: ViewStyle = {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
  };

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (newValue: boolean) => {
    setSwitchValue(newValue);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text>Input Value: {text}</Text>
        </View>

        <View style={inputStyle}>
          <MadInput
            placeholder="Enter your text here"
            value={text}
            onChangeText={handleTextChange}
          />
        </View>
        <View style={switchStyle}>
          <MadSwitch
            label="只显示有库存的商品"
            toggleSwitch={handleSwitchChange}
            value={switchValue}
          />
        </View>
        <View>
          <ProductTable products={PRODUCTS} />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
