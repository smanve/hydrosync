import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const CallPg: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./call.png')} style={styles.callImage} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#F3FDFF',
  },
  callImage: {
    width: '100%',
  },
});

export default CallPg;
