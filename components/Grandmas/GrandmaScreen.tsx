import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

const GrandmaPage: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNavigateToLandingPage = () => {
    navigation.navigate('Landpage');
  };

  const handleGrandma = () => {
    navigation.navigate('Addmembers');
  };

  const handleCall = () => {
    navigation.navigate('Callpagess');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./pfp.png')} style={styles.profileImage} />
      <Text style={styles.welcomeText}>Welcome back, Diana!</Text>

      <TouchableOpacity style={[styles.box, styles.redBox]} onPress={handleNavigateToLandingPage}>
        <TouchableOpacity onPress={handleCall}>
          <Image source={require('./phone.png')} style={styles.phoneImage} />
        </TouchableOpacity>
        <Text style={styles.textLeft}>Dad</Text>
        <Text style={[styles.textRight, styles.severelyDehydrated]}>Severely Dehydrated</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.greenBox]} onPress={handleNavigateToLandingPage}>
        <TouchableOpacity onPress={handleCall}>
          <Image source={require('./phone.png')} style={styles.phoneImage} />
        </TouchableOpacity>
        <Text style={styles.textLeft}>Grandma</Text>
        <Text style={[styles.textRight, styles.hydrated]}>Hydrated</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.box, styles.yellowBox]} onPress={handleNavigateToLandingPage}>
        <TouchableOpacity onPress={handleCall}>
          <Image source={require('./phone.png')} style={styles.phoneImage} />
        </TouchableOpacity>
        <Text style={styles.textLeft}>Mom</Text>
        <Text style={[styles.textRight, styles.mildlyDehydrated]}>Mildly Dehydrated</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addMore} onPress={handleGrandma}>
        <Text style={styles.addMoreText}>+ add more members</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FDFF',
  },
  profileImage: {
    width: 160,
    height: 160,
    position: 'absolute',
    top: 75,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 73,
    marginVertical: 10,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 200,
  },
  phoneImage: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  textLeft: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Ensures it takes remaining space
  },
  textRight: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  redBox: {
    backgroundColor: '#ECA8A8',
  },
  hydrated: {
    color: '#217333',
  },
  severelyDehydrated: {
    color: '#E20F0F',
  },
  mildlyDehydrated: {
    color: '#FF7A00',
  },
  greenBox: {
    backgroundColor: '#A9E59A',
  },
  yellowBox: {
    backgroundColor: '#FCEA8D',
  },
  addMore: {
    fontSize: 15,
    color: '#717171',
    marginTop: 7,
  },
  addMoreText: {
    fontSize: 15,
    color: '#717171',
  },
});

export default GrandmaPage;
