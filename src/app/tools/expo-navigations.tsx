import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function ToolsExpoNavigations() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image
          source={require("../../../assets/app/tools-expo-navigaitions/gif/stack.gif")}
          style={{ width: 300, height: 300 }}
          contentFit="contain"
        />
      </View>
    </View>
  );
}
