import { Stack } from "expo-router";
import Constants from 'expo-constants';
import Index from "@/app/index";

const  RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index'/>
    </Stack>
  );
}

let AppEntryPoint = RootLayout

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
    AppEntryPoint = require('./../.storybook').default;
}

export default AppEntryPoint;
