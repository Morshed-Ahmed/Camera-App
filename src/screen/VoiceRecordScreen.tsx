// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import RNFS from 'react-native-fs';

// const VoiceRecordScreen = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [recordedFile, setRecordedFile] = useState(null);

//   const audioRecorderPlayer = new AudioRecorderPlayer();

//   // Start Recording
//   const onStartRecord = async () => {
//     const path = `${RNFS.DocumentDirectoryPath}/hello.m4a`; // Save to Documents Directory
//     try {
//       const result = await audioRecorderPlayer.startRecorder(path);
//       console.log('Recording started, file path:', result);
//       setIsRecording(true);
//       setRecordedFile(path); // Save path for playback
//     } catch (err) {
//       console.error('Recording error:', err);
//     }
//   };

//   // Stop Recording
//   const onStopRecord = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       console.log('Recording stopped, file saved at:', result);
//       setIsRecording(false);
//       audioRecorderPlayer.removeRecordBackListener();
//     } catch (err) {
//       console.error('Stop recording error:', err);
//     }
//   };

//   // Start Playback
//   const onStartPlay = async () => {
//     if (!recordedFile) {
//       console.log('No recorded file found to play.');
//       return;
//     }
//     try {
//       const cleanPath = recordedFile.replace('file://', ''); // Remove "file://" for Android
//       const result = await audioRecorderPlayer.startPlayer(cleanPath);
//       console.log('Playback started:', result);
//       setIsPlaying(true);
//       audioRecorderPlayer.addPlayBackListener(e => {
//         if (e.current_position === e.duration) {
//           onStopPlay();
//         }
//       });
//     } catch (err) {
//       console.error('Playback error:', err);
//     }
//   };

//   // Stop Playback
//   const onStopPlay = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopPlayer();
//       console.log('Playback stopped:', result);
//       setIsPlaying(false);
//       audioRecorderPlayer.removePlayBackListener();
//     } catch (err) {
//       console.error('Stop playback error:', err);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Audio Recorder & Player</Text>
//       <View style={styles.buttonContainer}>
//         {!isRecording ? (
//           <TouchableOpacity onPress={onStartRecord} style={styles.button}>
//             <Text style={styles.buttonText}>Start Recording</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity onPress={onStopRecord} style={styles.button}>
//             <Text style={styles.buttonText}>Stop Recording</Text>
//           </TouchableOpacity>
//         )}

//         {!isPlaying ? (
//           <TouchableOpacity
//             onPress={onStartPlay}
//             disabled={!recordedFile}
//             style={[
//               styles.button,
//               !recordedFile ? styles.disabledButton : null,
//             ]}>
//             <Text style={styles.buttonText}>Start Playback</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity onPress={onStopPlay} style={styles.button}>
//             <Text style={styles.buttonText}>Stop Playback</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '80%',
//   },
//   button: {
//     backgroundColor: '#6200ea',
//     padding: 15,
//     borderRadius: 10,
//     marginHorizontal: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#aaa',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default VoiceRecordScreen;

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// export default function VoiceRecordScreen() {
//   const audioRecorderPlayer = new AudioRecorderPlayer();

//   const onStartRecord = async () => {
//     try {
//       const result = await audioRecorderPlayer.startRecorder();
//       console.log('Recording started, file path:', result);
//     } catch (err) {
//       console.error('Recording error:', err);
//     }
//   };
//   const onStopRecord = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       console.log('Stop recoding result:', result);
//     } catch (err) {
//       console.error('Recording error:', err);
//     }
//   };
//   const onStartPlay = async () => {
//     try {
//       const result = await audioRecorderPlayer.startPlayer();
//       console.log('Start play result:', result);
//     } catch (err) {
//       console.error('Recording ply error:', err);
//     }
//   };
//   return (
//     <View>
//       <Text>VoiceRecordScreen</Text>
//       <TouchableOpacity
//         onPress={onStartRecord}
//         style={{
//           backgroundColor: 'blue',
//           padding: 10,
//           margin: 10,
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontSize: 18,
//             fontWeight: 'bold',
//           }}>
//           Start Record
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={onStopRecord}
//         style={{
//           backgroundColor: 'blue',
//           padding: 10,
//           margin: 10,
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontSize: 18,
//             fontWeight: 'bold',
//           }}>
//           Stop Record
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={onStartPlay}
//         style={{
//           backgroundColor: 'blue',
//           padding: 10,
//           margin: 10,
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: 'white',
//             fontSize: 18,
//             fontWeight: 'bold',
//           }}>
//           Play
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
//   Alert,
// } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import ReactNativeBlobUtil from 'react-native-blob-util';
// import {Platform} from 'react-native';

// const VoiceRecordScreen = () => {
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const [recordedFiles, setRecordedFiles] = useState([]);

//   // Set path for recording files
//   const dirs = ReactNativeBlobUtil.fs.dirs;
//   const folderPath = Platform.select({
//     ios: `${dirs.DocumentDir}/AudioRecords`,
//     android: `${dirs.DocumentDir}/AudioRecords`,
//   });

//   // Function to create the folder (if it doesn't exist)
//   const createFolder = async () => {
//     try {
//       const isFolderExists = await ReactNativeBlobUtil.fs.isDir(folderPath);
//       if (!isFolderExists) {
//         await ReactNativeBlobUtil.fs.mkdir(folderPath);
//         console.log('Folder created:', folderPath);
//       }
//     } catch (err) {
//       console.error('Error creating folder:', err);
//     }
//   };

//   // Start recording
//   const onStartRecord = async () => {
//     try {
//       const filePath = `${folderPath}/record_${Date.now()}.mp3`; // Unique file name
//       const result = await audioRecorderPlayer.startRecorder(filePath);
//       console.log('Recording started, file path:', result);
//     } catch (err) {
//       console.error('Recording error:', err);
//     }
//   };

//   // Stop recording
//   const onStopRecord = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       console.log('Recording stopped, file path:', result);
//       fetchRecordedFiles(); // Update file list
//     } catch (err) {
//       console.error('Error stopping recording:', err);
//     }
//   };

//   // Fetch all recorded files
//   const fetchRecordedFiles = async () => {
//     try {
//       const files = await ReactNativeBlobUtil.fs.ls(folderPath);
//       setRecordedFiles(files);
//       console.log('Files in folder:', files);
//     } catch (err) {
//       console.error('Error fetching files:', err);
//     }
//   };

//   // Play a specific file
//   const onPlayFile = async fileName => {
//     try {
//       const filePath = `${folderPath}/${fileName}`;
//       const result = await audioRecorderPlayer.startPlayer(filePath);
//       console.log('Playing file:', result);
//     } catch (err) {
//       console.error('Error playing file:', err);
//     }
//   };

//   // Delete a specific file
//   const onDeleteFile = async fileName => {
//     try {
//       const filePath = `${folderPath}/${fileName}`;
//       await ReactNativeBlobUtil.fs.unlink(filePath);
//       Alert.alert('File deleted', fileName);
//       fetchRecordedFiles(); // Update file list
//     } catch (err) {
//       console.error('Error deleting file:', err);
//     }
//   };

//   useEffect(() => {
//     createFolder();
//     fetchRecordedFiles();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Voice Record Screen</Text>
//       <TouchableOpacity style={styles.button} onPress={onStartRecord}>
//         <Text style={styles.buttonText}>Start Record</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={onStopRecord}>
//         <Text style={styles.buttonText}>Stop Record</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={recordedFiles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.fileItem}>
//             <Text>{item}</Text>
//             <TouchableOpacity
//               style={[styles.fileButton, {backgroundColor: 'green'}]}
//               onPress={() => onPlayFile(item)}>
//               <Text style={styles.buttonText}>Play</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.fileButton, {backgroundColor: 'red'}]}
//               onPress={() => onDeleteFile(item)}>
//               <Text style={styles.buttonText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   fileItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   fileButton: {
//     padding: 5,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
// });

// export default VoiceRecordScreen;

// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   FlatList,
//   Alert,
// } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import ReactNativeBlobUtil from 'react-native-blob-util';
// import {Platform} from 'react-native';

// const VoiceRecordScreen = () => {
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const [recordedFiles, setRecordedFiles] = useState([]);

//   // Set path for recording files
//   const dirs = ReactNativeBlobUtil.fs.dirs;
//   const folderPath = Platform.select({
//     ios: `${dirs.DocumentDir}/AudioRecords`,
//     android: `${dirs.DocumentDir}/AudioRecords`,
//   });

//   // Function to create the folder (if it doesn't exist)
//   const createFolder = async () => {
//     try {
//       const isFolderExists = await ReactNativeBlobUtil.fs.isDir(folderPath);
//       if (!isFolderExists) {
//         await ReactNativeBlobUtil.fs.mkdir(folderPath);
//         console.log('Folder created:', folderPath);
//       }
//     } catch (err) {
//       console.error('Error creating folder:', err);
//     }
//   };

//   // Start recording
//   const onStartRecord = async () => {
//     try {
//       const filePath = `${folderPath}/record_${Date.now()}.mp3`; // Unique file name
//       const result = await audioRecorderPlayer.startRecorder(filePath);
//       console.log('Recording started, file path:', result);
//     } catch (err) {
//       console.error('Recording error:', err);
//     }
//   };

//   // Stop recording
//   const onStopRecord = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       console.log('Recording stopped, file path:', result);
//       fetchRecordedFiles(); // Update file list
//     } catch (err) {
//       console.error('Error stopping recording:', err);
//     }
//   };

//   // Fetch all recorded files
//   const fetchRecordedFiles = async () => {
//     try {
//       const files = await ReactNativeBlobUtil.fs.ls(folderPath);
//       setRecordedFiles(files);
//       console.log('Files in folder:', files);
//     } catch (err) {
//       console.error('Error fetching files:', err);
//     }
//   };

//   // Play a specific file
//   const onPlayFile = async fileName => {
//     try {
//       // আগের প্লেয়ারটি বন্ধ করুন
//       await audioRecorderPlayer.stopPlayer();
//       audioRecorderPlayer.removePlayBackListener();

//       const filePath = `${folderPath}/${fileName}`;
//       const result = await audioRecorderPlayer.startPlayer(filePath);
//       console.log('Playing file:', result);

//       // প্লেব্যাক লিসেনার যোগ করুন (ঐচ্ছিক)
//       audioRecorderPlayer.addPlayBackListener(e => {
//         if (e.currentPosition === e.duration) {
//           console.log('Playback finished');
//           audioRecorderPlayer.stopPlayer();
//           audioRecorderPlayer.removePlayBackListener();
//         }
//       });
//     } catch (err) {
//       console.error('Error playing file:', err);
//     }
//   };

//   // Delete a specific file
//   const onDeleteFile = async fileName => {
//     try {
//       const filePath = `${folderPath}/${fileName}`;
//       await ReactNativeBlobUtil.fs.unlink(filePath);
//       Alert.alert('File deleted', fileName);
//       fetchRecordedFiles(); // Update file list
//     } catch (err) {
//       console.error('Error deleting file:', err);
//     }
//   };

//   useEffect(() => {
//     createFolder();
//     fetchRecordedFiles();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Voice Record Screen</Text>
//       <TouchableOpacity style={styles.button} onPress={onStartRecord}>
//         <Text style={styles.buttonText}>Start Record</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={onStopRecord}>
//         <Text style={styles.buttonText}>Stop Record</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={recordedFiles}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.fileItem}>
//             <Text>{item}</Text>
//             <TouchableOpacity
//               style={[styles.fileButton, {backgroundColor: 'green'}]}
//               onPress={() => onPlayFile(item)}>
//               <Text style={styles.buttonText}>Play</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.fileButton, {backgroundColor: 'red'}]}
//               onPress={() => onDeleteFile(item)}>
//               <Text style={styles.buttonText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   fileItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   fileButton: {
//     padding: 5,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
// });

// export default VoiceRecordScreen;
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import ReactNativeBlobUtil from 'react-native-blob-util';
import {Platform} from 'react-native';

const VoiceRecordScreen = () => {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [recordedFiles, setRecordedFiles] = useState([]);

  // Set path for recording files
  const dirs = ReactNativeBlobUtil.fs.dirs;
  const folderPath = Platform.select({
    ios: `${dirs.DocumentDir}/AudioRecords`,
    android: `${dirs.SDCardDir}/TestApp/Media/AudioRecords`,
    // android: `/storage/emulated/0/Android/media/com.test/TestApp/Media/AudioRecords`,
    // android: `${
    //   dirs.SDCardDir ? dirs.SDCardDir : dirs.DocumentDir
    // }/Test/Media/AudioRecords`,
  });

  // Function to create the folder (if it doesn't exist)
  const createFolder = async () => {
    try {
      const isFolderExists = await ReactNativeBlobUtil.fs.isDir(folderPath);
      if (!isFolderExists) {
        await ReactNativeBlobUtil.fs.mkdir(folderPath);
        console.log('Folder created:', folderPath);
      }
    } catch (err) {
      console.error('Error creating folder:', err);
    }
  };

  // Start recording
  const onStartRecord = async () => {
    try {
      const filePath = `${folderPath}/record_${Date.now()}.mp3`; // Unique file name
      const result = await audioRecorderPlayer.startRecorder(filePath);
      console.log('Recording started, file path:', result);
    } catch (err) {
      console.error('Recording error:', err);
    }
  };

  // Stop recording
  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('Recording stopped, file path:', result);
      fetchRecordedFiles(); // Update file list
    } catch (err) {
      console.error('Error stopping recording:', err);
    }
  };

  // Fetch all recorded files
  const fetchRecordedFiles = async () => {
    try {
      const files = await ReactNativeBlobUtil.fs.ls(folderPath);
      setRecordedFiles(files);
      console.log('Files in folder:', files);
    } catch (err) {
      console.error('Error fetching files:', err);
    }
  };

  // Play a specific file
  const onPlayFile = async fileName => {
    try {
      // আগের প্লেয়ারটি বন্ধ করুন
      await audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removePlayBackListener();

      const filePath = `${folderPath}/${fileName}`;
      const result = await audioRecorderPlayer.startPlayer(filePath);
      console.log('Playing file:', result);

      // প্লেব্যাক লিসেনার যোগ করুন (ঐচ্ছিক)
      audioRecorderPlayer.addPlayBackListener(e => {
        if (e.currentPosition === e.duration) {
          console.log('Playback finished');
          audioRecorderPlayer.stopPlayer();
          audioRecorderPlayer.removePlayBackListener();
        }
      });
    } catch (err) {
      console.error('Error playing file:', err);
    }
  };

  // Delete a specific file
  const onDeleteFile = async fileName => {
    try {
      const filePath = `${folderPath}/${fileName}`;
      await ReactNativeBlobUtil.fs.unlink(filePath);
      Alert.alert('File deleted', fileName);
      fetchRecordedFiles(); // Update file list
    } catch (err) {
      console.error('Error deleting file:', err);
    }
  };

  useEffect(() => {
    createFolder();
    fetchRecordedFiles();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Record Screen</Text>
      <TouchableOpacity style={styles.button} onPress={onStartRecord}>
        <Text style={styles.buttonText}>Start Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onStopRecord}>
        <Text style={styles.buttonText}>Stop Record</Text>
      </TouchableOpacity>
      <FlatList
        data={recordedFiles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.fileItem}>
            <Text>{item}</Text>
            <TouchableOpacity
              style={[styles.fileButton, {backgroundColor: 'green'}]}
              onPress={() => onPlayFile(item)}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.fileButton, {backgroundColor: 'red'}]}
              onPress={() => onDeleteFile(item)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  fileButton: {
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
});

export default VoiceRecordScreen;
