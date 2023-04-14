import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text , Image ,Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';


const Login = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleEmailChange = (email) => setEmail(email);
  const handlePasswordChange = (password) => setPassword(password);
  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    navigation.navigate('CustomerReviews')
}
  const handleSignUp = () => navigation.navigate('SignUp');

  return (
    <View style={styles.container}>
    <Image source={require('../assets/login.jpg')} style={styles.logo} />
     <Text style={styles.heading}>Login</Text>
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
     <Button title="Login" style={styles.button} st onPress={handleLogin} color={"#884da7"} />
     </View>
     <View style={styles.signUpContainer}>
     <Text style={styles.signUpText}>You don't have an account?</Text>
     <Pressable onPress={handleSignUp}>
      <Text style={styles.textButton}>SignUp</Text>
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
    marginBottom: 5,
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
    marginBottom: 2,
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
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    marginRight: 5,
    color: 'gray',
  },
});

export default Login
