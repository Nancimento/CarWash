import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Settings,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomNavbar from '../components/BottomNavbar';

const Setting = () => {
  const navigation = useNavigation();
  const menuItems = [
    {
      title: 'Change Password',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      title: 'Fingerprint / FaceID Login',
      onPress: () => navigation.navigate('FingerprintLogin'),
    },
    {
      title: 'Create Pin Number',
      onPress: () => navigation.navigate('CreatePin'),
    },
    {title: 'Logout', onPress: () => navigation.navigate('SignIn')},
  ];

  const infoItems = [
    {title: 'About', onPress: () => navigation.navigate('About')},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/car-wash-products.png')}
            style={styles.headerImage}
          />
          <Text style={styles.header}>Settings</Text>
        </View>

        <Text style={styles.sectionHeader}>Security</Text>
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
              <Text style={styles.menuText}>{item.title}</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionHeader}>Info</Text>
        <FlatList
          data={infoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
              <Text style={styles.menuText}>{item.title}</Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.footer}>
          <Text style={styles.versionText}>App Version: 2.5.4</Text>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomNavbar navigation={navigation} activeScreen="profile" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  headerImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#555',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  versionText: {
    fontSize: 14,
    color: '#888',
  },
  updateButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  updateText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Setting;
