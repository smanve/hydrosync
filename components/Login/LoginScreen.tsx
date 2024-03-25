import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Import RootStackParamList from types.ts

const LoginPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Logging in with:', username, password);
    navigation.navigate('Grandma');
  };
  

  const handleSignup = () => {
    navigation.navigate('Signup'); // Navigate to SignupPage
  };

  return (
    <View style={styles.container}>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        New to HydroSync?{' '}
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F3FDFF', 
  },
  logo: {
    width: 190,
    height: 190,
    marginBottom: 20,
    marginTop: 35,
  },
  title: {
    marginTop: 20,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F3FDFF', 
    marginBottom: 20,
    textAlign: 'left',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#60A1FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded corners
    marginTop: 25,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
  },
  signupLink: {
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 45,
  },
});

export default LoginPage;
