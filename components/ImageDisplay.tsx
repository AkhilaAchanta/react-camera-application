import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,  Image, ImageBackground} from
'react-native';
import * as FaceDetector from 'expo-face-detector';
import { useIsFocused } from '@react-navigation/native';
export const ImageDisplay = ({navigation, route}) => {
  let {uri} = route.params;
 
   const [top] = useState(0);
   const left = 0;

 useEffect(() => {

 let iamgeUri = route.params.uri;
        (async iamgeUri => {
         const options = { mode: FaceDetector.Constants.Mode.fast };
let detctedFace = await FaceDetector.detectFacesAsync(route.params.uri, options);
  console.log("Detected Face is", detctedFace);
     if (detctedFace.faces && detctedFace.faces.length > 0) {
      let face = detctedFace.faces[0];
      }
     })();

     }, [route.params]);
        
    



  return (
    <View>
       <ImageBackground
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: 9000,
      width: 9000,
      borderWidth: 1,
      color: 'red',
      zIndex: 100
    }}
  />
        <Image
        source={{ uri: uri}} style={{width:380,height:550}}
      />
    </View>
  );
}
