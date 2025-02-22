import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { Text, View } from "tamagui";
import { tokens } from "@/tamagui.config";

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

const NavigationList = () => {
  const numColumns = 4;

  return (
    <FlashList
      data={DATA}
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
      estimatedItemSize={400}
      numColumns={numColumns}
      contentContainerStyle={{ paddingVertical: tokens.space["4xl"].val }}
      // ListFooterComponent={
      //   <View>
      //     <Text>GitHub</Text>
      //   </View>
      // }
    />
  );
};

const NavigationItem = ({ imgSource, name }: NavigationItem) => {
  return (
    <View>
      <Image
        source={imgSource}
        style={{ width: 300, height: 400 }}
        contentFit="contain"
      />
      <Text mt="$md" style={{ textAlign: "center" }}>
        {name}
      </Text>
    </View>
  );
};
