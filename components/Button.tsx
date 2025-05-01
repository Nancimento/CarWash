import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'text';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button = ({
  title,
  onPress,
  type = 'primary',
  style,
  textStyle,
  disabled = false,
}: ButtonProps) => {
  const buttonStyle = [
    styles.button,
    type === 'primary' && styles.primaryButton,
    type === 'secondary' && styles.secondaryButton,
    type === 'text' && styles.textButton,
    disabled && styles.disabledButton,
    style,
  ];

  const buttonTextStyle = [
    styles.buttonText,
    type === 'primary' && styles.primaryButtonText,
    type === 'secondary' && styles.secondaryButtonText,
    type === 'text' && styles.textButtonText,
    disabled && styles.disabledButtonText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#8B0000',
  },
  secondaryButton: {
    backgroundColor: '#E5E5E5',
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButtonText: {
    color: '#333',
  },
  textButtonText: {
    color: '#666',
  },
  disabledButtonText: {
    // No specific style needed, opacity from the button is sufficient
  },
});

export default Button;
