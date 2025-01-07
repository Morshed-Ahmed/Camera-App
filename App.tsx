// CAMERA APP

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// export default function App() {
//   const [imageData, setImageData] = useState('');
//   const [takePhotoClicked, setTakePhotoClicked] = useState(false);

//   const device = useCameraDevice('back');
//   const camera = useRef(null);

//   useEffect(() => {
//     checkPermission();
//   }, []);
//   const checkPermission = async () => {
//     const cameraPermission = Camera.getCameraPermissionStatus();
//     const microphonePermission = Camera.getMicrophonePermissionStatus();
//     console.log(cameraPermission);
//   };

//   if (device == null) return <ActivityIndicator />;

//   const takePicture = async () => {
//     if (camera != null) {
//       const photo = await camera.current.takePhoto();
//       setImageData(photo.path);
//       setTakePhotoClicked(false);
//       console.log(photo.path);
//     }
//   };
//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       {takePhotoClicked ? (
//         <View style={{flex: 1}}>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo
//           />
//           <TouchableOpacity
//             onPress={() => takePicture()}
//             style={{
//               width: 60,
//               height: 60,
//               borderRadius: 30,
//               backgroundColor: 'red',
//               position: 'absolute',
//               bottom: 50,
//               alignSelf: 'center',
//             }}></TouchableOpacity>
//         </View>
//       ) : (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           {imageData !== '' && (
//             <Image
//               source={{uri: 'file://' + imageData}}
//               style={{width: '90%', height: 200, resizeMode: 'contain'}}
//             />
//           )}
//           <TouchableOpacity
//             onPress={() => setTakePhotoClicked(true)}
//             style={{
//               width: '90%',
//               height: 50,
//               borderWidth: 1,
//               alignSelf: 'center',
//               borderRadius: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text>Click Photo</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import React, {useEffect} from 'react';
// import {
//   Camera,
//   useCameraDevice,
//   useCodeScanner,
// } from 'react-native-vision-camera';
// const {width, height} = Dimensions.get('window');
// export default function App() {
//   const device = useCameraDevice('back');
//   useEffect(() => {
//     checkPermission();
//   }, []);
//   const checkPermission = async () => {
//     const cameraPermission = Camera.getCameraPermissionStatus();
//     const microphonePermission = Camera.getMicrophonePermissionStatus();
//     console.log(cameraPermission);
//   };

//   if (device == null) return <ActivityIndicator />;

//   const codeScanner = useCodeScanner({
//     codeTypes: ['qr', 'ean-13'],
//     // onCodeScanned: codes => {
//     //   console.log(`Scanned ${codes} codes!`);
//     // },
//     onCodeScanned: codes => {
//       for (const code of codes) {
//         console.log(code.value);
//       }
//     },
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

// QR SCRENNER
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

// export default function App() {
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

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import CameraScreen from './src/screen/CameraScreen';
import QrScannerScreen from './src/screen/QrScannerScreen';
import PhotoGalleryScreen from './src/screen/PhotoGalleryScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Camera"
        component={CameraScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="QrScanner"
        component={QrScannerScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PhotoGallery"
        component={PhotoGalleryScreen}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
