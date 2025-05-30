import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, get } from 'firebase/database';
import { auth, database } from '../config/Firebase';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = async () => {
    if (!email || !password) {
      showMessage({
        message: 'Error',
        description: 'Please fill in all fields',
        type: 'danger',
      });
      return;
    }

    setLoading(true);
    try {
      // First authenticate with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      if (userCredential.user) {
        // Then get user data from Realtime Database
        const userRef = ref(database, 'users/' + userCredential.user.uid);
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
          const userData = snapshot.val();
          
          showMessage({
            message: 'Welcome back!',
            description: `Happy to see you again, ${userData.name}!`,
            type: 'success',
            duration: 3000,
            icon: 'success',
            style: {
              backgroundColor: '#8B0000', // Matches your theme color
            },
          });

          navigation.navigate('Home');
        } else {
          showMessage({
            message: 'Error',
            description: 'User data not found in database',
            type: 'danger',
          });
        }
      }
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>WELCOME</Text>

        <Text style={styles.promoText}>
          First time creating a new account?
          {'\n'}Get a free soda of your choice!
        </Text>

        <Text style={styles.accountText}>
          Already have an account?
          {'\n'}Sign in now for guaranteed 2.5%
          {'\n'}cashback for every orders!
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/car-wash-products.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <InputField
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            title="SIGN IN"
            onPress={handleSignIn}
            type="primary"
            style={styles.signInButton}
            disabled={loading}
          />

          <Button
            title="Create New Account"
            onPress={() => navigation.navigate('SignUp')}
            type="secondary"
            style={styles.createAccountButton}
          />

          <Button
            title="Continue without an account"
            onPress={() => navigation.navigate('Home')}
            type="text"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 120,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 10,
    textAlign: 'center',
  },
  promoText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  accountText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
  },
  formContainer: {
    width: '100%',
  },
  signInButton: {
    marginBottom: 10,
  },
  createAccountButton: {
    marginBottom: 15,
  },
});

export default SignInScreen;
