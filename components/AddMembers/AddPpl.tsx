import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

const AddPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [mname, setMName] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [location, setLocation] = useState('');

  const handleGrandma = () => {
    navigation.navigate('Grandma'); // Navigate to LoginPage
  };

  const handleLogin = () => {
    navigation.navigate('Grandma'); // Navigate to Login page
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Add Members</Text>
      <Text style={styles.label}>Member's Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Member's Name"
        onChangeText={setMName}
        value={mname}
      />
      
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.label}>Weight (kg)</Text>
          <TextInput
            style={[styles.input, styles.halfInput, { marginRight: 10 }]}
            placeholder="kg"
            onChangeText={setGender}
            value={gender}
          />
        </View>
        <View style={styles.space} />
        <View>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Age"
            onChangeText={setActivityLevel}
            value={activityLevel}
          />
        </View>
        
      </View>
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Location"
        onChangeText={setLocation}
        value={location}
      />
      <Text style={styles.label}>Phone No</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone No"
        onChangeText={setLocation}
        value={location}
      />
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={[styles.input, styles.halfInput, { marginRight: 10 }]}
            placeholder="Gender"
            onChangeText={setGender}
            value={gender}
          />
        </View>
        <View style={styles.space} />
        <View>
          <Text style={styles.label}>Activity Level</Text>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Activity Level"
            onChangeText={setActivityLevel}
            value={activityLevel}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGrandma}>
        <Text style={styles.buttonText}>Add +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the left
    paddingHorizontal: 30,
    backgroundColor: '#F3FDFF',
  },
  title: {
    marginTop: 50,
    fontFamily: 'montserrat-bold',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start', // Align to the left
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F3FDFF',
    marginBottom: 15,
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
  halfInput: {
    width: 138, // Adjust as needed
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'flex-start', // Align items to the left
  },
  space: {
    width: '9%', // Adjust as needed
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#60A1FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Rounded corners
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 26,
  },
});

export default AddPage;
