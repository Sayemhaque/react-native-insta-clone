import * as React from "react";
import { View, StyleSheet, Button, Switch } from "react-native";
import { Video, ResizeMode, VideoState, AVPlaybackStatus } from "expo-av";
import Switchh from "@/components/switch";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus>();
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        volume={10}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={setStatus}
        usePoster
        useNativeControls
        aria-hidden
      />
      <Switchh />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    width: "100%",
    height: 400,
  },
  buttons: {
    marginTop: 5,
  },
});
