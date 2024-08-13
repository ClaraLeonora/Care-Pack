import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  
    // Set up our fonts
    useFonts({
        'DMSerif':require('./../assets/fonts/DMSerifDisplay-Regular.ttf'),
        'Poppins':require('./../assets/fonts/Poppins-Regular.ttf')
    })
  
    return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" 
        options = {{
            headerShown:true
            }}
      />

    </Stack>
  );
}
