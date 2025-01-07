import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PhotoGallery')}
        style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Photo Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
        style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('QrScanner')}
        style={styles.linkButton}>
        <Text style={styles.linkButtonText}>Qr Code Scanner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 20,
  },
  linkButton: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 12,
    width: '80%',
    alignSelf: 'center',
  },
  linkButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
