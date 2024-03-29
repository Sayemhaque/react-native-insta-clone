import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/back-button";

const CreatePost = () => {
  return (
    <SafeAreaView>
      <BackButton />
      <Text>CreatePost</Text>
    </SafeAreaView>
  );
};

export default CreatePost;
