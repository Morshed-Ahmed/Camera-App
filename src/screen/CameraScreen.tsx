// // CAMERA APP

// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// const {width, height} = Dimensions.get('window');
// export default function CameraScreen() {
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
//               style={{
//                 width: width * 0.95,
//                 height: height * 0.7,
//                 resizeMode: 'contain',
//               }}
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

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from 'react-native';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// const {width, height} = Dimensions.get('window');

// export default function CameraScreen() {
//   const [imageData, setImageData] = useState('');
//   const device = useCameraDevice('back');
//   const camera = useRef(null);

//   // পারমিশন চেক
//   useEffect(() => {
//     const checkPermission = async () => {
//       const cameraPermission = await Camera.requestCameraPermission();
//       const microphonePermission = await Camera.requestMicrophonePermission();
//       console.log('Camera Permission:', cameraPermission);
//       console.log('Microphone Permission:', microphonePermission);
//     };

//     checkPermission();
//   }, []);

//   if (!device) return <ActivityIndicator />;

//   const takePicture = async () => {
//     if (camera.current) {
//       try {
//         const photo = await camera.current.takePhoto();
//         setImageData(photo.path);
//       } catch (error) {
//         console.log('Error taking photo:', error);
//       }
//     }
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       {imageData === '' ? (
//         <View style={{flex: 1}}>
//           <Camera
//             ref={camera}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//           />
//           <TouchableOpacity
//             onPress={takePicture}
//             style={{
//               width: 60,
//               height: 60,
//               borderRadius: 30,
//               backgroundColor: 'red',
//               position: 'absolute',
//               bottom: 50,
//               alignSelf: 'center',
//             }}
//           />
//         </View>
//       ) : (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <Image
//             source={{uri: 'file://' + imageData}}
//             style={{
//               width: width * 0.95,
//               height: height * 0.7,
//               resizeMode: 'contain',
//             }}
//           />
//           <TouchableOpacity
//             onPress={() => setImageData('')}
//             style={{
//               marginTop: 20,
//               width: '90%',
//               height: 50,
//               borderWidth: 1,
//               alignSelf: 'center',
//               borderRadius: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#f2f2f2',
//             }}>
//             <Text style={{fontSize: 16}}>Close</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               marginTop: 20,
//               width: '90%',
//               height: 50,
//               borderWidth: 1,
//               alignSelf: 'center',
//               borderRadius: 10,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#f2f2f2',
//             }}>
//             <Text style={{fontSize: 16}}>Save</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import CameraRoll, {useCameraRoll} from '@react-native-camera-roll/camera-roll';

const {width, height} = Dimensions.get('window');

export default function CameraScreen() {
  const [imageData, setImageData] = useState('');
  const device = useCameraDevice('back');
  const camera = useRef(null);
  const [photos, getPhotos, save] = useCameraRoll();

  // ক্যামেরা পারমিশন চেক
  useEffect(() => {
    const checkPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();
      console.log('Camera Permission:', cameraPermission);
      console.log('Microphone Permission:', microphonePermission);
    };

    checkPermission();
  }, []);

  // Android পারমিশন চেক
  useEffect(() => {
    haspermission();
  }, []);
  const haspermission = async () => {
    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const haspermission = await PermissionsAndroid.check(permission);
    if (haspermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(permission);
    return status == 'granted';
  };

  // ছবি গ্যালারিতে সেভ করার ফাংশন
  const savePicture = async imagePath => {
    if (Platform.OS === 'android' && !(await haspermission())) {
      Alert.alert(
        'Permission Denied',
        'Storage permission is required to save the photo.',
      );
      return;
    }

    try {
      // await CameraRoll.save(imagePath, {
      //   type: 'photo', // টাইপ: ছবি
      //   album: 'MyAppPhotos', // কাস্টম অ্যালবাম তৈরি
      // });
      await save(imagePath, {type: 'photo', album: 'SelfieVision'});
      Alert.alert('Success', 'Photo saved to gallery successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save photo.');
      console.error('Error saving photo:', error);
    }
  };

  if (!device) return <ActivityIndicator />;

  const takePicture = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto();
        setImageData(photo.path);
      } catch (error) {
        console.log('Error taking photo:', error);
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {imageData === '' ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          <TouchableOpacity
            onPress={takePicture}
            style={styles.captureButton}
          />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{uri: 'file://' + imageData}}
            style={styles.imagePreview}
          />
          <TouchableOpacity
            onPress={() => setImageData('')}
            style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => savePicture('file://' + imageData)}
            style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  captureButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  imagePreview: {
    width: width * 0.95,
    height: height * 0.7,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  saveButton: {
    marginTop: 20,
    width: '90%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  buttonText: {
    fontSize: 16,
  },
});
