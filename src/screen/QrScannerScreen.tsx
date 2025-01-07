// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   Dimensions,
//   Linking,
//   Alert,
// } from 'react-native';
// import React, {useEffect} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useCodeScanner,
// } from 'react-native-vision-camera';

// const {width, height} = Dimensions.get('window');

// export default function QrScannerScreen() {
//   const device = useCameraDevice('back');

//   useEffect(() => {
//     checkPermission();
//   }, []);

//   const checkPermission = async () => {
//     const cameraPermission = await Camera.requestCameraPermission();
//     const microphonePermission = await Camera.requestMicrophonePermission();
//     console.log('Camera Permission:', cameraPermission);
//     console.log('Microphone Permission:', microphonePermission);
//   };

//   if (device == null) return <ActivityIndicator />;

//   const handleCodeScanned = codes => {
//     for (const code of codes) {
//       console.log('Scanned Code:', code.value);
//       openScannedURL(code.value);
//     }
//   };

//   const openScannedURL = url => {
//     if (url.startsWith('http') || url.startsWith('https')) {
//       Linking.openURL(url).catch(err =>
//         Alert.alert('Error', 'Failed to open the URL: ' + err),
//       );
//     } else {
//       Alert.alert('Scanned Data', url);
//     }
//   };

//   const codeScanner = useCodeScanner({
//     codeTypes: ['qr', 'ean-13'],
//     onCodeScanned: handleCodeScanned,
//   });

//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         photo
//         codeScanner={codeScanner}
//       />

//       <View style={styles.overlay}>
//         <View style={styles.scannerFrame}>
//           <Text style={styles.scannerText}>Align QR Code within the frame</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scannerFrame: {
//     width: width * 0.8,
//     height: width * 0.8,
//     borderWidth: 2,
//     borderColor: 'green',
//     borderRadius: 10,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scannerText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     position: 'absolute',
//     bottom: -30,
//   },
// });

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';

const {width} = Dimensions.get('window');

export default function QrScannerScreen() {
  const device = useCameraDevice('back');
  const handleCodeScannedRef = useRef(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    const microphonePermission = await Camera.requestMicrophonePermission();
    console.log('Camera Permission:', cameraPermission);
    console.log('Microphone Permission:', microphonePermission);
  };

  const openScannedURL = url => {
    if (url.startsWith('http') || url.startsWith('https')) {
      Linking.openURL(url).catch(err =>
        Alert.alert('Error', 'Failed to open the URL: ' + err),
      );
    } else {
      Alert.alert('Scanned Data', url);
    }
  };

  // Store the handleCodeScanned function in a ref
  handleCodeScannedRef.current = codes => {
    for (const code of codes) {
      console.log('Scanned Code:', code.value);
      openScannedURL(code.value);
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      // Safely access the ref for the function
      if (handleCodeScannedRef.current) {
        handleCodeScannedRef.current(codes);
      }
    },
  });

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo
        codeScanner={codeScanner}
      />

      <View style={styles.overlay}>
        <View style={styles.scannerFrame}>
          <Text style={styles.scannerText}>Align QR Code within the frame</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerFrame: {
    width: width * 0.8,
    height: width * 0.8,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: -30,
  },
});
