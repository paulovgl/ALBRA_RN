import React from 'react';
import {
  Dimensions,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface i {
  placeholder: string | undefined;
  keyboardType: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  multiline?: boolean | undefined;
  height?: number | undefined;
  numberOfLines?: number | undefined;
  autoComplete?:
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'gender'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
}

export default ({
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  autoComplete,
  multiline,
  height,
  numberOfLines,
}: i) => {
  const styles = StyleSheet.create({
    input: {
      width: Dimensions.get('window').width - 50,
      marginTop: 20,
      padding: 5,
      height: height == null ? 40 : height,
      borderBottomWidth: 1,
      borderBottomColor: '#b95835',
      color: '#3d323f',
    },
  });

  return (
    <View style={{height: height}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        autoComplete={autoComplete}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        placeholderTextColor="#3d323f"
        selectionColor="#3d323f"
      />
    </View>
  );
};
