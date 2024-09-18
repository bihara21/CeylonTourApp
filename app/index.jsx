import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, TouchableOpacity,Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";



//const Welcome = () => {
  
export default function App(){
  return (
    <SafeAreaView className="bg-primary h-full">
     
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center min-h-[85vh] px-5">
          <Image
            source={images.logo}
            className="w-[400px] h-[550px]"
            resizeMode="contain"
          />

          <View className="relative mt-1">
            <Text className="text-4xl text-black font-bold text-center">
              Discover Sri Lanka{"\n"}
              with{" "}
              <Text className="text-secondary-200">CeylonTour</Text>
            </Text>

           
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-3 text-center">
          Your perfect travel guide Partner
          </Text>

          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
};

