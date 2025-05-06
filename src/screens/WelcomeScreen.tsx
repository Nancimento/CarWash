import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Welcome to{'\n'}Homepage</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/car-wash-products.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>Enjoy Your{'\n'}vehicle wash</Text>

        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignIn')}
          type="primary"
          style={styles.getStartedButton}
          textStyle={styles.getStartedButtonText}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 240,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  getStartedButton: {
    borderRadius: 10,
  },
  getStartedButtonText: {
    fontSize: 18,
  },
});

export default WelcomeScreen;
