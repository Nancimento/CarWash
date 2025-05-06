import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomNavbar from '../../components/BottomNavbar';

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/car-wash-products.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.title}>Menu</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/images/profile-picture.png')}
                style={styles.avatar}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>

          {/* Services */}
          <ScrollView style={styles.servicesContainer}>
            {/* Service 1: Motorcycle Wash */}
            <View style={styles.serviceItem}>
              <Image
                source={require('../../assets/images/cuci-motor.png')}
                style={styles.serviceImage}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() =>
                  navigation.navigate('ServiceDetails', {service: 'motor'})
                }>
                <Text style={styles.serviceButtonText}>Cuci Motor</Text>
              </TouchableOpacity>
            </View>

            {/* Service 2: Car Wash */}
            <View style={styles.serviceItem}>
              <Image
                source={require('../../assets/images/cuci-oto.png')}
                style={styles.serviceImage}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() =>
                  navigation.navigate('ServiceDetails', {service: 'mobil'})
                }>
                <Text style={styles.serviceButtonText}>Cuci Mobil</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Bottom Navigation */}
        <BottomNavbar navigation={navigation} activeScreen="menu" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
  content: {
    marginTop: 50,
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  servicesContainer: {
    flex: 1,
  },
  serviceItem: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  serviceButton: {
    backgroundColor: '#8B0000',
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
