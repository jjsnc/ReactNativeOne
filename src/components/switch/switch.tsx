import React from 'react';

import {Switch} from 'react-native';

interface SwitchProps {
  toggleSwitch: (value: boolean) => void;
  value: boolean;
}

const SwitchButton: React.FC<SwitchProps> = ({
  toggleSwitch,
  value,
  ...props
}) => {
  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={value}
      {...props}
    />
  );
};

export default SwitchButton;
