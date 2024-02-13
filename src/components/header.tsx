import { Image, View, Text } from "react-native";

export function Header() {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-2 w-12" />
        <Text className="text-white text-xl font-body mt-2">Cardápio</Text>
      </View>
    </View>
  );
}
