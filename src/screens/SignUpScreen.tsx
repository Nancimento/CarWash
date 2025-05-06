import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Button from "../components/Button";
import InputField from "../components/InputField";
// Import from our firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../config/Firebase";


// Rest of your code stays the same

// Define your navigation types
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      const userId = userCredential.user.uid;

      // Save user data to Realtime Database
      await set(ref(database, 'users/' + userId), {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
        // Add any additional user data you want to store
      });

      Alert.alert(
        "Success", 
        "Account created successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("SignIn")
          }
        ]
      );
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };



  // Rest of component remains the same

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>

        {/* <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/car-wash-products.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View> */}

        <View style={styles.formContainer}>
          <InputField
            label="Name"
            placeholder="Type your name"
            value={name}
            onChangeText={setName}
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
    backgroundColor: "white",
  },
  content: {
    marginTop: 150,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#8B0000",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  formContainer: {
    width: "100%",
  },
  signUpButton: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SignUpScreen;
