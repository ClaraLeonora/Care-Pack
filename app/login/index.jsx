import React from 'react';
import { Text, View, ImageBackground, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { scale } from 'react-native-size-matters';

{/*} Height of the text on bottom half of screen {*/}
const { height } = Dimensions.get('window')
const textPosition = height * .16;

{/*} Background colors #5e1af4, 183f23 {*/}
export default function LoginScreen() {
      
    {/*} Hook Add to the Box {*/}
      const router = useRouter()
      {/*} Navs to login screen {*/}
      const handlePress = () => {
          router.push('add-to-box');
      }
  
    return (
    <ImageBackground
    source={require('./../../assets/images/Sign_Up.png')}
    style={{

        backgroundColor: 'EFEFEF',
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
    <View
        style={{
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: textPosition
        }}
    >
        <Text
        style={{
            fontFamily: 'DMSerif',
            justifyContent: 'flex-start',
            textAlign: 'center',
            fontSize: scale(40),
            color: 'black',
            paddingTop: 20 // Optional: white text for contrast
        }}
        >
        Unboxing Care 
        </Text>

        <Text
            style={{
                fontFamily: 'Poppins',
                justifyContent: 'flex-start',
                textAlign: 'center',
                paddingLeft: scale(5),
                paddingRight: scale(5),
                fontSize: scale(18),
                color: 'black' // Optional: white text for contrast
            }}
        >
            A box of your student resources—food, housing, clothing, and mental health support—featuring 
            both university and external solutions! 
        </Text>

        {/*} Add to the box {*/}
        <Pressable
        onPress={ handlePress }
            style = {{
                padding: scale(12),
                marginTop: textPosition,
                backgroundColor: '#fcbf11',
                width:'65%',
                borderRadius:scale(20),
                borderColor: 'black',
                borderWidth: scale(7)
            }}
            >
            <Text style={{
                fontFamily: 'Poppins',
                fontSize: scale(20),
                textAlign:'center',
                
            }}
            >Add to the box</Text>
        </Pressable>

        {/*} Student Access Catalog Button {*/}
        <Pressable
            style = {{
                padding: scale(12),
                marginTop: textPosition/4,
                backgroundColor: '#fcbf11',
                width:'65%',
                borderRadius:scale(20),
                borderColor: 'black',
                borderWidth: scale(7)
            }}
            >
            <Text style={{
                fontFamily: 'Poppins',
                fontSize: scale(20),
                textAlign:'center',
                
            }}
            >Search the Box</Text>
        </Pressable>

    </View>
    </ImageBackground>
  );
}
