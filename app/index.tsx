import { View, Text, Pressable } from "react-native";
import React from "react";

export default function index() {
  const onPress = () => {};
  return (
    <View style={{ padding: 40 }}>
      <Pressable onPress={onPress}>
        <Text>index</Text>
      </Pressable>
    </View>
  );
}
