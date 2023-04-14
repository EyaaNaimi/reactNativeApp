import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text , Image ,Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (firstName) => setFirstName(firstName);
  const handleLastNameChange = (lastName) => setLastName(lastName);
  const handleEmailChange = (email) => setEmail(email);
  const handlePasswordChange = (password) => setPassword(password);
  const handleSignUp = () => {console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
  navigation.navigate('CustomerReviews')}

  const handleLogin = () => navigation.navigate('Login');

  return (
    <View style={styles.container}>
    <Image source={require('../assets/signup.png')} style={styles.logo} />
     <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={handleEmailChange}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
     <Button title="Sign Up" style={styles.button} st onPress={handleSignUp} color={"#884da7"} />
     </View>
     <View style={styles.loginContainer}>
     <Text style={styles.loginText}>You already have an account?</Text>
     <Pressable onPress={handleLogin}>
      <Text style={styles.textButton}>Login</Text>
    </Pressable>
</View>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 17,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft:15
  },
  textButton:{
    color:"#B2C1F9",
    fontWeight:"bold",
    fontSize:17
  },
  logo: {
    width: 300,
    height: 300,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight:15
  },
  buttonContainer: {
    marginVertical: 5,
    width: '40%',
    borderRadius: 10,
  },

  button :{
   borderRadius:5 ,

  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    marginRight: 5,
    color: 'gray',
  },
});

export default SignUp
