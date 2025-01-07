import {
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export default function PhotoGalleryScreen() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    haspermission();
    getAllPhotos();
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

  const getAllPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        // console.log(JSON.stringify(r.edges));
        setPhotos(r.edges);
      })
      .catch(err => {
        //Error Loading Images
        console.log('first');
      });
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={photos}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: Dimensions.get('window').width / 2 - 20,
                height: 200,
                // backgroundColor: 'red',
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.node.image.uri}}
                style={{width: '95%', height: '95%'}}
              />
            </View>
          );
        }}
      />
      {/* 
      <TouchableOpacity
        onPress={() => getAllPhotos()}
        style={{backgroundColor: 'red', padding: 10}}>
        <Text>Get Photos</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({});
