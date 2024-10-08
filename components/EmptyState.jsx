import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
const EmptyState = ({ title, subtitle }) => {
    return (
      <View className="flex justify-center items-center px-4">
        <Image
          source={images.empty}
          resizeMode="contain"
          className="w-[270px] h-[216px]"
        />
  
        <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
        
  
        <CustomButton
          title="Back to Explore"
          handlePress={() => router.push("/home")}
          containerStyles="w-full my-5"
        />
      </View>
    );
  };
  
  export default EmptyState;