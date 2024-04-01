import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#833AB4",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 10,
      }}
    >
      <Entypo name="instagram" size={44} color="white" />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Link href="/add-post" asChild>
          <TouchableOpacity>
            <Feather name="plus-square" size={28} color="white" />
          </TouchableOpacity>
        </Link>
        <Link href="/message" asChild>
          <TouchableOpacity>
            <AntDesign name="hearto" size={28} color="white" />
          </TouchableOpacity>
        </Link>
        <Link href="/notification" asChild>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={28} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Header;
