import Feather from "@expo/vector-icons/Feather";
import { Linking, TouchableOpacity } from "react-native";
import { Paragraph, View } from "tamagui";

export function GoToGitHubLink({
  href,
  title,
}: {
  href: string;
  title?: string;
}) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(href)}>
      <Paragraph
        transition="color 0.6s"
        display="flex"
        style={{ alignItems: "center" }}
        hoverStyle={{ color: "orange" }}
      >
        {title ?? "GitHub"}
        <View display="inline" ml="$sm">
          <Feather name="external-link" size={20} color="inherit" />
        </View>
      </Paragraph>
    </TouchableOpacity>
  );
}
