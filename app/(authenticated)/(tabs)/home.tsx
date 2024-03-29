import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <Image
                style={styles.profileImage}
                source={require("@/assets/images/ayman_dp.jpg")}
              />
              <Text style={styles.username}>akhi.ayman</Text>
            </View>
            <View>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>
          <Image
            style={styles.postImage}
            source={require("@/assets/images/akhi-ayman.jpg")}
          />
          <View style={styles.iconsWrapper}>
            <View style={styles.icons}>
              <AntDesign name="hearto" size={23} color="black" />
              <EvilIcons name="comment" size={35} color="black" />
              <FontAwesome5 name="paper-plane" size={22} color="black" />
              <FontAwesome name="whatsapp" size={26} color="black" />
            </View>
            <FontAwesome name="bookmark-o" size={24} color="black" />
          </View>
          <View style={styles.footer}>
            <Text style={styles.likes}>10,434 likes</Text>
            <Text style={styles.description}>Caption of the post</Text>
            <Text style={styles.hashtags}>#reactnative #instagram #coding</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerInfo}>
              <Image
                style={styles.profileImage}
                source={require("@/assets/images/userphoto.jpg")}
              />
              <Text style={styles.username}>asimriaz77.official</Text>
            </View>
            <View>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>
          <Image
            style={styles.postImage}
            source={{ uri: "https://via.placeholder.com/300" }}
          />
          <View style={styles.footer}>
            <Text style={styles.likes}>Likes: 100</Text>
            <Text style={styles.description}>Caption of the post</Text>
            <Text style={styles.hashtags}>#reactnative #instagram #coding</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "#000",
    marginTop: 10,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    resizeMode: "cover",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 500,
    marginTop: 10,
    resizeMode: "cover",
  },
  footer: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 3,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  likes: {
    fontWeight: "bold",
  },
  description: {
    marginTop: 5,
  },
  hashtags: {
    color: "blue",
    marginTop: 5,
  },
});

export default Home;
