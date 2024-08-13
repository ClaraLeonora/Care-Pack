import React from 'react';
import { Text, View, ImageBackground, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';



{/*} Height of the text on bottom half of screen {*/}
const { height } = Dimensions.get('window')
const textPosition = height * .14;

{/*} Background colors #5e1af4, 183f23 {*/}
export default function Index() {

    {/*} Hook {*/}
    const router = useRouter()
    {/*} Navs to login screen {*/}
    const handlePress = () => {
        router.push('login');
    }

  return ( 
    <ImageBackground
    source={require('./../assets/images/Landing_Page.png')}
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: textPosition
        }}
    >
        <Text
        style={{
            fontFamily: 'DMSerif',
            fontSize: scale(60),
            color: 'black',
            paddingBottom: scale(20) // Optional: white text for contrast
        }}
        >
        Care Pack
        </Text>

        {/* Button routes to the login screen */}
        <Pressable
        onPress={ handlePress }
        style = {{
            backgroundColor: '#fcbf11',
            borderColor: 'black',
            borderRadius: scale(20),
            borderWidth: scale(7),
            paddingVertical: scale(10),
            paddingHorizontal: scale(20),
            justifyContent: 'center',
            textAlign: 'center',
            width:'50%',
        }}>
        <Text
            style={{
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: scale(18),
                color: 'black' // Optional: white text for contrast
            }}
        >
            Tap to Open
        </Text>
        </Pressable>
    </View>
    </ImageBackground>
  );
}
