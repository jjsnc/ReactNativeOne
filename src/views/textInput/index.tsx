import React, {useRef, useState} from 'react';

import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
const multiTypeTextInput = () => {
  return (
    <View>
      <UncontrolledTextInput1 />
      <UncontrolledTextInput2 />
      <ControlledTextInput />
      <ControlledTextInput2 />
      <CompositeComponentMethod />
      <AutoFocusTextInput />
      <AutoNextFocusTextInputs />
    </View>
  );
};

function UncontrolledTextInput1() {
  return (
    <View style={styles.row}>
      <Text>非受控1: </Text>
      <TextInput style={styles.textInput} />
    </View>
  );
}

function UncontrolledTextInput2() {
  const textRef = useRef<string>('');
  return (
    <View>
      <Text>非受控12 </Text>
      <TextInput
        style={styles.textInput2}
        onChangeText={text => {
          textRef.current = text;
        }}
      />
      <Text
        onPress={() => {
          Alert.alert(textRef.current);
        }}>
        可获取文字
      </Text>
    </View>
  );
}
function ControlledTextInput() {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.row}>
      <Text>受控1: </Text>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={text => {
          setText(text);
        }}
      />
      <Text
        onPress={() => {
          Alert.alert(text);
        }}>
        可获取文字
      </Text>
    </View>
  );
}

function ControlledTextInput2() {
  const [text, setText] = useState<string>('');
  return (
    <View style={styles.row}>
      <Text>受控2: </Text>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={text => {
          const time = Date.now();
          // 复杂逻辑，输入文字卡
          while (Date.now() - time <= 1000) {}
          setText(text);
        }}
      />
      <Text
        onPress={() => {
          Alert.alert(text);
        }}>
        可获取文字
      </Text>
    </View>
  );
}

function CompositeComponentMethod() {
  const [text, setText] = useState<string>('');

  return (
    <View style={{flexDirection: 'row'}}>
      <Text>1s延迟: </Text>
      <TextInput
        value={text}
        style={{flex: 1, borderBottomWidth: 1}}
        onChangeText={text => {
          const time = Date.now();
          // 复杂逻辑
          while (Date.now() - time <= 1000) {}
          setText(text);
        }}
      />
      <Text
        onPress={() => {
          Alert.alert(text);
        }}>
        可获取文字
      </Text>
    </View>
  );
}
function AutoFocusTextInput() {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>自动对焦： </Text>
      <TextInput style={{flex: 1, borderBottomWidth: 1}} autoFocus />
    </View>
  );
}

function AutoNextFocusTextInputs() {
  const ref1 = React.useRef<TextInput>(null);
  const ref2 = React.useRef<TextInput>(null);
  const ref3 = React.useRef<TextInput>(null);

  return (
    <View style={styles.row}>
      <TextInput
        ref={ref1}
        style={styles.textInput3}
        placeholder="姓名"
        textContentType="name"
        returnKeyType="next"
        onSubmitEditing={() => ref2.current?.focus()}
      />
      <TextInput
        ref={ref2}
        style={styles.textInput3}
        placeholder="电话"
        keyboardType="phone-pad"
        returnKeyType="done"
        onSubmitEditing={() => ref3.current?.focus()}
      />
      <TextInput
        ref={ref3}
        style={styles.textInput3}
        placeholder="地址"
        returnKeyType="done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
  },
  textInput2: {
    flex: 1,
    borderBottomWidth: 1,
  },
  textInput3: {borderBottomWidth: 1, height: 30},
});

export default multiTypeTextInput;
