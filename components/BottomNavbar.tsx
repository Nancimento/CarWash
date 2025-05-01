import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

interface BottomNavbarProps {
  navigation: any;
  activeScreen: 'home' | 'cart' | 'gallery' | 'profile' | 'menu';
}

const BottomNavbar = ({navigation, activeScreen}: BottomNavbarProps) => {
  const navigateTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Cart')}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.navText,
            activeScreen === 'cart' ? styles.activeText : {},
          ]}>
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Gallery')}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.navText,
            activeScreen === 'gallery' ? styles.activeText : {},
          ]}>
          Gallery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Home')}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.navText,
            activeScreen === 'home' ? styles.activeText : {},
          ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Profile')}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.navText,
            activeScreen === 'profile' ? styles.activeText : {},
          ]}>
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Menu')}
        activeOpacity={0.7}>
        <Text
          style={[
            styles.navText,
            activeScreen === 'menu' ? styles.activeText : {},
          ]}>
          Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 60,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  activeText: {
    color: '#8B0000',
    fontWeight: 'bold',
  },
});

export default BottomNavbar;
