import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import BottomNavbar from '../../components/BottomNavbar';

const ServiceDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {service} = route.params || {service: 'unknown'};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Service Details</Text>
        <Text style={styles.serviceType}>Service: {service}</Text>
      </View>
      <BottomNavbar navigation={navigation} activeScreen="menu" />
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
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  serviceType: {
    fontSize: 18,
  },
});

export default ServiceDetailsScreen;
