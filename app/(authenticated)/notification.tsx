import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/back-button";

const Notification = () => {
  return (
    <SafeAreaView>
      <BackButton />
      <Text>Notification</Text>
    </SafeAreaView>
  );
};

export default Notification;
