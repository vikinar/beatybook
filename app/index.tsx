import { Text, View } from "react-native";
import {HelloWave} from "@/components/HelloWave";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {MyButton} from "../.storybook/stories/Button/Button";

export default function Index() {
  return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <TabBarIcon name={'menu'}/>
            <ThemedText>
                My text
            </ThemedText>
            <MyButton onPress={() => console.log('test')} text={'test'} />

        </ThemedView>

  );
}
