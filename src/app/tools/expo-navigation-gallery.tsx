import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import {
  Button,
  Card,
  Dialog,
  Paragraph,
  ScrollView,
  Stack,
  Text,
  Unspaced,
  useMedia,
  View,
} from "tamagui";
import { tokens } from "@/src/utils/tamagui-config/token/token";
import { TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  EXPO_NAVIGATION_GALLERY_DATA,
  ExpoNavigationGalleryItem,
} from "@/src/constants/expo-navigation-gallery-data";
import { GoToGitHubLink } from "@/src/components/parts/github-link";
import { Meta } from "@/src/components/parts/meta";

export default function ToolsExpoNavigationGallery() {
  return (
    <View flex={1} px="$xl">
      <Meta
        title="Navigation Gallery"
        description="Expoでの画面遷移のギャラリーです。Gifとコードで確認できます。"
        ogurl="https://toki-dev.vercel.app/tools/expo-navigation-gallery"
        image={
          "https://drive.usercontent.google.com/download?id=19sc692KL5glhd81f-42ggEyBtRXowOvu&export=view"
        }
      />
      <NavigationList />
    </View>
  );
}

function NavigationList() {
  const media = useMedia();
  const numColumns = media.lg ? 4 : media.md ? 3 : media.xxs ? 2 : 1;

  return (
    <FlashList
      data={EXPO_NAVIGATION_GALLERY_DATA}
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
            <NavigationItemWithModal {...item} />
            {/* <NavigationItem {...item} /> */}
          </View>
        );
      }}
    />
  );
}

const imgRate = 640 / 295; // height:640、width:295
function GifImage({ source, width }: { source: string; width: number }) {
  return (
    <Image
      source={source}
      style={{ width: width, height: width * imgRate }}
      contentFit="contain"
    />
  );
}

function NavigationItem({ imgSource, name }: ExpoNavigationGalleryItem) {
  const media = useMedia();
  const width = media.xs ? 240 : 140;

  return (
    <View>
      <GifImage source={imgSource} width={width} />
      <Text mt="$md" style={{ textAlign: "center" }}>
        {name}
      </Text>
    </View>
  );
}

function NavigationItemWithModal(props: ExpoNavigationGalleryItem) {
  const media = useMedia();

  const { imgSource, name, code, code2 } = props;
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <TouchableOpacity>
          <NavigationItem {...props} />
        </TouchableOpacity>
      </Dialog.Trigger>

      {/* <Adapt when="sm" platform="touch">
        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame p="$sm" gap="$sm">
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay
            background="$shadow6"
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt> */}

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          background="$shadow6"
          animation="slow"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quicker",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$md"
          style={{
            maxWidth: "calc(100% - 32px)",
            maxHeight: "calc(100% - 48px)",
          }}
          p="$xl"
        >
          <Dialog.Title>{name}</Dialog.Title>
          <ScrollView>
            <Stack
              gap={media.md ? "$md" : "$xl"}
              flexDirection="column"
              $md={{ flexDirection: "row" }}
            >
              <View
                px={"$2xl"}
                style={{ justifyContent: "center", alignItems: "center" }}
                gap="$4xl"
              >
                <CodeBlock
                  code={code.codeStr}
                  codeTitle={code.title}
                  href={code.githubUrl}
                />
                {code2 ? (
                  <CodeBlock
                    code={code2.codeStr}
                    codeTitle={code2.title}
                    href={code2.githubUrl}
                  />
                ) : null}
              </View>
              <View style={{ alignItems: "center" }}>
                <GifImage source={imgSource} width={media.md ? 280 : 200} />
              </View>
            </Stack>
          </ScrollView>
          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                style={{ top: 8, right: 8 }}
                size="$2"
                circular
                icon={<AntDesign name="close" size={20} />}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

function CodeBlock({
  code,
  codeTitle,
  href,
}: {
  code: string;
  codeTitle?: string;
  href: string;
}) {
  return (
    <View width="100%">
      {codeTitle ? (
        // TODO: colorHoverをlow-context-color的なものに変更する (テーマを考えた後)
        <Paragraph color="$colorHover">{codeTitle}</Paragraph>
      ) : null}
      <CodeHighlighter
        hljsStyle={atomOneDarkReasonable}
        language="tsx"
        scrollViewProps={{
          contentContainerStyle: { padding: 16 },
        }}
      >
        {code}
      </CodeHighlighter>
      <View style={{ alignItems: "flex-end" }} mt="$md">
        <GoToGitHubLink href={href} />
      </View>
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
      <Card.Footer padded justify="flex-end" gap="$md">
        {/* Zennも追加 */}
        <GoToGitHubLink
          href={"https://github.com/toki-developer/expo-pagination-example"}
          title="expo-pagination-example (GitHub)"
        />
      </Card.Footer>
    </Card>
  );
}
