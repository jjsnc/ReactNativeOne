import React from 'react';

import {Switch, Text, View, ViewStyle} from 'react-native';

interface SwitchProps {
  toggleSwitch: (value: boolean) => void;
  value: boolean;
  label: string;
}
const switchButtonStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const SwitchButton: React.FC<SwitchProps> = ({
  toggleSwitch,
  value,
  label,
  ...props
}) => {
  return (
    <View style={switchButtonStyle}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={value}
        {...props}
      />
      <Text>{label}</Text>
    </View>
  );
};

export default SwitchButton;
