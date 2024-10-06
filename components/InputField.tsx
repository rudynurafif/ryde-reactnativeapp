import { icons } from '@/constants';
import { InputFieldProps } from '@/types/type';
import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <GestureHandlerRootView className='w-full'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className='my-2 w-full'>
            <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
              {label}
            </Text>
            <View
              className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
            >
              {icon && (
                <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
              )}
              <TextInput
                className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                secureTextEntry={isPasswordVisible}
                {...props}
              />
              {label === 'Password' && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image
                    source={isPasswordVisible ? icons.eye1 : icons.eye2}
                    className={`w-6 h-6 mr-4 ${iconStyle}`}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default InputField;
