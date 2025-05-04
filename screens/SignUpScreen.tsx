import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {auth,app} from './../src/config/Firebase';
import Button from '../components/Button';
import InputField from '../components/InputField';
import {showMessage} from 'react-native-flash-message';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';


const SignUpScreen = ({navigation}) => {

  const [name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleSignUp = () => {
 // Gunakan instance Firebase yang diinisialisasi
  const db = getDatabase(app);

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      set(ref(db, 'users/' + user.uid), {
        name: name,
        email: email,
      });
      showMessage({
        message: 'Registration success',
        type: 'success',
      });
      navigation.navigate('SignIn');
    })
    .catch(error => {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    });
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/car-wash-products.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.formContainer}>
          <InputField
            label="Name"
            placeholder="Type your name"
            value={name}
            onChangeText={setFullName}
          />

          <InputField
            label="Email"
            placeholder="Type your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputField
            label="Password"
            placeholder="Type your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button
            title="SIGN UP"
            onPress={handleSignUp}
            type="primary"
            style={styles.signUpButton}
          />

          <Button
            title="Back to Sign In"
            onPress={() => navigation.goBack()}
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
    marginTop: 150,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8B0000',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: '100%',
  },
  signUpButton: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignUpScreen;
