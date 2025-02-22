import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import {
  Button,
  Card,
  Form,
  H2,
  ListItem,
  Paragraph,
  Stack,
  Text,
  useMedia,
  useTheme,
  View,
  XStack,
  YGroup,
} from "tamagui";
import { tokens } from "@/src/utils/tamagui-config/token/token";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function ToolsExpoNavigationGallery() {
  return (
    <View flex={1} px="$xl">
      <NavigationList />
    </View>
  );
}

const DATA = [
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/stack.gif"),
    name: "Stack",
  },
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/tab.gif"),
    name: "Tab",
  },
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/modal.gif"),
    name: "Modal",
  },
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/drawer.gif"),
    name: "Drawer",
  },
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/search.gif"),
    name: "Search",
  },
  {
    imgSource: require("../../../assets/app/tools-expo-navigaitions/gif/top-tab.gif"),
    name: "Material Top Tab",
  },
] as const;

type NavigationItem = (typeof DATA)[number];

function NavigationList() {
  const media = useMedia();
  const numColumns = media.lg ? 4 : media.md ? 3 : media.xxs ? 2 : 1;

  return (
    <FlashList
      data={DATA}
      keyExtractor={(item) => item.name}
      estimatedItemSize={400}
      numColumns={numColumns}
      contentContainerStyle={{ paddingVertical: tokens.space["4xl"].val }}
      ListFooterComponent={FooterComponent}
      renderItem={({ item, index }) => {
        return (
          <View
            flex={1}
            style={{ alignItems: "center" }}
            mt={index >= numColumns ? "$2xl" : undefined}
          >
            <NavigationItem {...item} />
          </View>
        );
      }}
    />
  );
}

// height:640、width:295
const imgRate = 640 / 295;
function NavigationItem({ imgSource, name }: NavigationItem) {
  const media = useMedia();
  const width = media.xs ? 240 : 140;

  return (
    <View>
      <Image
        source={imgSource}
        style={{ width: width, height: width * imgRate }}
        contentFit="contain"
      />
      <Text mt="$md" style={{ textAlign: "center" }}>
        {name}
      </Text>
    </View>
  );
}

function FooterComponent() {
  return (
    <Card theme="blue" bordered px="$xl" mx="auto" mt="$4xl" gap="$sm">
      <Card.Header padded>
        <Paragraph>Notes</Paragraph>
      </Card.Header>
      <Stack gap="$sm" px="$md">
        <Paragraph>
          expo-routerや@react-navigationを利用した画面遷移のギャラリーです。
        </Paragraph>
        <Paragraph>
          各画像をクリックすることでコードの確認ができます。
        </Paragraph>
        <Paragraph>
          IOS Simulatorを画面収録したデータです。随時追加する予定です。
        </Paragraph>
      </Stack>
      <Card.Footer padded justify="flex-end">
        {/* Zennも追加 */}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://github.com/toki-developer/expo-pagination-example"
            )
          }
        >
          <Paragraph
            transition="color 0.8s"
            display="flex"
            style={{ alignItems: "center" }}
            hoverStyle={{ color: "greenyellow" }}
          >
            GitHub
            <View display="inline" ml="$sm">
              <Feather name="external-link" size={20} color="inherit" />
            </View>
          </Paragraph>
        </TouchableOpacity>
      </Card.Footer>
    </Card>
  );
}
