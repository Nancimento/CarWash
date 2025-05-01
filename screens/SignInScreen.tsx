import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>WELCOME</Text>
        <Text style={styles.subtitleText}>
          First time creating a new account?
          {'\n'}Get a free bottle of your choice!
        </Text>

        <Text style={styles.accountText}>Already have an account?</Text>
        <Text style={styles.benefitsText}>
          Sign in now for guaranteed 1.5%
          {'\n'}cashback for every order!
        </Text>

        <Image
          source={require('../assets/images/car-wash-products.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#A9A9A9"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#A9A9A9"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={() => {}}>
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.createAccountText}>Create New Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestButton} onPress={() => {}}>
          <Text style={styles.guestButtonText}>
            Continue without an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 10,
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 15,
  },
  accountText: {
    fontSize: 14,
    fontWeight: '500',
  },
  benefitsText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    width: '100%',
    backgroundColor: '#F8F8F8',
  },
  signInButton: {
    backgroundColor: '#8B0000',
    borderRadius: 8,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 15,
    marginBottom: 5,
  },
  createAccountText: {
    color: '#8B0000',
    fontSize: 14,
    fontWeight: '500',
  },
  guestButton: {
    marginTop: 5,
  },
  guestButtonText: {
    color: '#777',
    fontSize: 14,
  },
});

export default SignInScreen;
