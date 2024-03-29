import React from "react";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BackButton = () => {
  const router = useRouter();
  const back = () => router.push("../");
  return (
    <Pressable onPress={back}>
      <AntDesign name="close" size={24} color="black" />
    </Pressable>
  );
};

export default BackButton;
