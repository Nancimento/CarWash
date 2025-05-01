import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Icon
          name="shopping-cart"
          size={24}
          color={activeScreen === 'cart' ? '#8B0000' : '#666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Gallery')}
        activeOpacity={0.7}>
        <Icon
          name="photo-library"
          size={24}
          color={activeScreen === 'gallery' ? '#8B0000' : '#666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Home')}
        activeOpacity={0.7}>
        <Icon
          name="home"
          size={24}
          color={activeScreen === 'home' ? '#8B0000' : '#666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Profile')}
        activeOpacity={0.7}>
        <Icon
          name="person"
          size={24}
          color={activeScreen === 'profile' ? '#8B0000' : '#666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigateTo('Menu')}
        activeOpacity={0.7}>
        <Icon
          name="more-horiz"
          size={24}
          color={activeScreen === 'menu' ? '#8B0000' : '#666'}
        />
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
    width: 60,
    height: 60,
  },
});

export default BottomNavbar;
