import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BottomNavbar from '../components/BottomNavbar';
import {useNavigation} from '@react-navigation/native';
import { auth, database } from '../config/Firebase';
import { ref, get } from 'firebase/database';

const Payment = () => {
  const [userData, setUserData] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [quantities, setQuantities] = useState({carWash: 1, bikeWash: 1});
  const [isOrderComplete, setIsOrderComplete] = useState(false); // State for order confirmation
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(database, 'users/' + user.uid);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      }
    };

    fetchUserData();
  }, []);

  const handlePaymentMethod = method => {
    setSelectedPaymentMethod(method);
  };

  const handleQuantityChange = (item, action) => {
    setQuantities(prevQuantities => {
      const newQuantity =
        action === 'increment'
          ? prevQuantities[item] + 1
          : Math.max(prevQuantities[item] - 1, 0);
      return {...prevQuantities, [item]: newQuantity};
    });
  };

  const calculateTotal = () => {
    return quantities.carWash * 60000 + quantities.bikeWash * 25000;
  };

  const handleOrderNow = () => {
    setIsOrderComplete(true);
  };

  if (isOrderComplete) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/BackArrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.orderCompleteContainer}>
          <Text style={styles.orderCompleteText}>Done!!!</Text>
          <View style={styles.orderCard}>
            <Text style={styles.orderReadyText}>Your Order is Ready</Text>
            <Text style={styles.cashierText}>Cashier 2</Text>
            <Image
              source={require('../../assets/images/Symantec.png')} // Replace with your checkmark image
              style={styles.checkmarkImage}
            />
            <Text style={styles.thankYouText}>Thank You</Text>
          </View>
          {/* Back to Menu Button */}
          <TouchableOpacity
            style={styles.backToMenuButton}
            onPress={() => navigation.navigate('Home')} // Replace 'Home' with your menu screen name
          >
            <Text style={styles.backToMenuText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/images/BackArrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment</Text>
          <Image
            source={require('../../assets/images/profile-picture.png')}
            style={styles.profileImage}
          />
        </View>

        {/* Items */}
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Image
              source={require('../../assets/images/cuci-oto.png')}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Cuci Mobil</Text>
              <Text style={styles.itemPrice}>Rp. 60.000</Text>
            </View>
            <View style={styles.itemQuantity}>
              <TouchableOpacity
                onPress={() => handleQuantityChange('carWash', 'decrement')}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities.carWash}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange('carWash', 'increment')}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.item}>
            <Image
              source={require('../../assets/images/cuci-motor.png')}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>Cuci Motor</Text>
              <Text style={styles.itemPrice}>Rp. 25.000</Text>
            </View>
            <View style={styles.itemQuantity}>
              <TouchableOpacity
                onPress={() => handleQuantityChange('bikeWash', 'decrement')}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities.bikeWash}</Text>
              <TouchableOpacity
                onPress={() => handleQuantityChange('bikeWash', 'increment')}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>
            Rp. {calculateTotal().toLocaleString('id-ID')}
          </Text>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>
            Name: {userData ? userData.name : 'Loading...'}
          </Text>
          <Text style={styles.userInfoText}>
            Phone: {userData ? userData.phone || '082372635268' : '082372635268'}
          </Text>
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentMethods}>
          <Text style={styles.paymentTitle}>Payment method:</Text>
          {['Dana', 'M.banking', 'Cash'].map(method => (
            <TouchableOpacity
              key={method}
              style={styles.paymentOption}
              onPress={() => handlePaymentMethod(method)}>
              <Text style={styles.paymentText}>{method}</Text>
              <View
                style={[
                  styles.radioButton,
                  selectedPaymentMethod === method &&
                    styles.radioButtonSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Order Button */}
        <TouchableOpacity style={styles.orderButton} onPress={handleOrderNow}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navbar */}
      <BottomNavbar navigation={navigation} activeScreen="payment" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B71C1C',
  },
  backArrow: {
    width: 30,
    height: 30,
    marginTop: 30,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    fontSize: 24,
    color: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  itemContainer: {
    margin: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#B71C1C',
    margin: 10,
    borderRadius: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userInfo: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  backToMenuButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '60%',
  },
  backToMenuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B71C1C',
  },
  userInfoText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paymentMethods: {
    margin: 10,
  },
  paymentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B71C1C',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B71C1C',
  },
  paymentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#B71C1C',
  },
  radioButtonSelected: {
    backgroundColor: 'black',
    borderColor: 'black',
  },
  orderButton: {
    backgroundColor: 'grey',
    padding: 15,
    marginHorizontal: 80,
    borderRadius: 30,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  orderCompleteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B71C1C',
  },
  orderCompleteText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderReadyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cashierText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  checkmarkImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Payment;
