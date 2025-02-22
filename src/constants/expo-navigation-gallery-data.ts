const stackCode = `
import { Stack } from "expo-router";
 
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen
        name="stack"
        options={{ headerBackButtonDisplayMode: "minimal" }}
      />
    </Stack>
  );
}
`;

const tabCode = `
import { Tabs } from "expo-router";
 
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}

`;

const modalCode = `
import { Stack } from "expo-router";
 
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
`;

const drawerCode = `
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
 
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="drawer1" />
        <Drawer.Screen name="drawer2" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
`;

const drawerCode2 = `
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Text } from "react-native";
 
function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView>
      <Text style={{ textAlign: "center", padding: 16 }}>Hello Drawer</Text>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Stack"
        onPress={() => router.push({ pathname: "/stack" })}
        icon={(props) => <Feather name="smile" size={24} color={props.color} />}
      />
    </DrawerContentScrollView>
  );
}
 
export default function CustomDrawerLayout() {
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="custom-drawer1"
          options={{
            title: "Drawer 1",
            drawerIcon: (props) => (
              <Feather name="frown" size={24} color={props.color} />
            ),
          }}
        />
        <Drawer.Screen name="custom-drawer2" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
`;

const searchCode = `
import { router, Stack } from "expo-router";
 
export default function SearchLayout() {
  return (
    <Stack
      screenOptions={{
        headerSearchBarOptions: {
          placeholder: "検索する",
          inputType: "text",
          onSearchButtonPress(e) {
            router.push({
              pathname: "/search-result",
              params: { q: e.nativeEvent.text },
            });
          },
        },
      }}
    >
      <Stack.Screen name="search" />
      <Stack.Screen name="search-result" />
    </Stack>
  );
}
`;

const topTabCode = `
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native";
 
const { Navigator } = createMaterialTopTabNavigator();
 
const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
 
export default function TopTabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MaterialTopTabs>
        <MaterialTopTabs.Screen name="top-tab1" />
        <MaterialTopTabs.Screen name="top-tab2" />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
`;

export type ExpoNavigationGalleryItem = {
  imgSource: string;
  name: string;
  code: {
    codeStr: string;
    githubUrl: string;
    title?: string;
  };
  code2?: {
    codeStr: string;
    githubUrl: string;
    title?: string;
  };
};

export const EXPO_NAVIGATION_GALLERY_DATA: ExpoNavigationGalleryItem[] = [
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/stack.gif"),
    name: "Stack",
    code: {
      codeStr: stackCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/_layout.tsx",
    },
  },
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/tab.gif"),
    name: "Tab",
    code: {
      codeStr: tabCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/(tabs)/_layout.tsx",
    },
  },
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/modal.gif"),
    name: "Modal",
    code: {
      codeStr: modalCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/_layout.tsx",
    },
  },
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/drawer.gif"),
    name: "Drawer",
    code: {
      codeStr: drawerCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/(drawer)/_layout.tsx",
      title: "Simple",
    },
    code2: {
      codeStr: drawerCode2,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/(custom-drawer)/_layout.tsx",
      title: "Menu Customization",
    },
  },
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/search.gif"),
    name: "Search",
    code: {
      codeStr: searchCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/(search)/_layout.tsx",
    },
  },
  {
    imgSource: require("../../assets/app/tools-expo-navigaitions/gif/top-tab.gif"),
    name: "Material Top Tab",
    code: {
      codeStr: topTabCode,
      githubUrl:
        "https://github.com/toki-developer/expo-pagination-example/blob/main/src/app/_layout.tsx",
    },
  },
] as const;
