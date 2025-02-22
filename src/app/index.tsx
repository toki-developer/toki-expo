import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello EAS Hosting. by Toki</Text>
      <Link href={{ pathname: "/tools/expo-navigation-gallery" }}>
        Go to Navigation Gallery
      </Link>
    </View>
  );
}
