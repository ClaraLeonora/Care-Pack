import React from 'react';
import { Text, View, ImageBackground, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { scale } from 'react-native-size-matters';

{/*} Height of the text on bottom half of screen {*/}
const { height } = Dimensions.get('window')
const textPosition = height * .1;

export default function index() {
  return (
    <View
    style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: textPosition
        }}
    >

      <Text>index</Text>
    </View>
  )
}