import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BottomNavbar from '../components/BottomNavbar';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/car-wash-products.png')}
          style={styles.headerImage}
        />
        <View style={styles.headerInfo}>
          <TouchableOpacity style={styles.infoSection}>
            <Text style={styles.vipText}>VIP</Text>
            <Text style={styles.linkText}>Level & Benefit ></Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.infoSection}>
            <Text style={styles.pointsText}>2.100 pts</Text>
            <Text style={styles.linkText}>your Point ></Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Balance:</Text>
            <Text style={styles.balanceAmount}>RP 65.000</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image
            source={require('../assets/images/profile-picture.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Image
          source={require('../assets/images/car-wash-products.png')}
          style={styles.mainImage}
        />
        <Text style={styles.cardNumber}>6062269593912344</Text>
        <Text style={styles.cardBalance}>RP 65.000</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="time-outline" size={40} color="#000" />
          <Text style={styles.actionText}>Payment History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart-outline" size={40} color="#000" />
          <Text style={styles.actionText}>Favorite Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navbar */}
      <BottomNavbar navigation={navigation} activeScreen="profile" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  infoSection: {
    alignItems: 'center',
  },
  vipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  linkText: {
    fontSize: 12,
    color: '#888',
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    width: 6,
    height: 40,
    backgroundColor: '#ccc',
    marginHorizontal: 8,
  },
  balanceContainer: {
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 14,
    color: '#000',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  mainContent: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mainImage: {
    width: 400,
    height: 400,
    marginBottom: 16,
  },
  cardNumber: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  cardBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginTop: 95,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 20,
    color: '#000',
  },
});


export default UserProfile;
