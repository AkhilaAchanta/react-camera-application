import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity,  Image, ImageBackground} from
'react-native';
import * as FaceDetector from 'expo-face-detector';
import { useIsFocused } from '@react-navigation/native';
export const ImageDisplay = ({navigation, route}) => {
   let {uri} = route.params;
   // State hook for rectangle of captured face
   const [top, setTop] = useState(0);
   const [left, setLeft] = useState(0);
   const [height, setHeight] = useState(0);
   const [width, setWidth] = useState(0);
   const [color, setColor] = useState('black');
   const isFocused = useIsFocused();
   useEffect(() => {
        let iamgeUri = route.params.uri;
        (async iamgeUri => {
         const options = { mode: FaceDetector.Constants.Mode.fast};
         let detctedFace = await FaceDetector.detectFacesAsync(route.params.uri, options);
         // If no.of faces detected is one then the rectangle properties are set
         if (detctedFace.faces && detctedFace.faces.length == 1) {
              let inp = detctedFace.faces[0].bounds.origin.y;
              setTop(0 + inp);
              inp = detctedFace.faces[0].bounds.origin.x;
              setLeft(0 + inp);
              setHeight(0 + detctedFace.faces[0].bounds.size.height);
              setWidth(0 + detctedFace.faces[0].bounds.size.width);
              setColor('red');
          } 
     })();
     }, [route.params]);
        
    return (
      <View style={{ flex: 1 }}>
       {isFocused  &&
         <View>
           <ImageBackground style={{position: 'absolute',
            top: top / 12,left: left / 12,height: height / 5 ,
             width: width / 6,borderWidth: 2,borderColor: color,zIndex: 100}}/>
        <Image
        source={{ uri: uri}} style={{width:380,height:550}}/>  
      </View>
    }
    </View>
  );
}
