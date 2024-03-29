import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/back-button";

const Message = () => {
  return (
    <SafeAreaView>
      <BackButton />
      <Text>Messages</Text>
    </SafeAreaView>
  );
};

export default Message;
