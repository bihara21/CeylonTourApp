import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from "../constants";
import { useState } from "react";

const PlacesCard = ({places:{place,thumbnail,image,prompt,creator:{username,visit}}}) => {
    const [play, setPlay] = useState(false);
  return (
    <View className = "flex-col items-center px-4 mb-14">
         <View className="flex-row gap-3 items-start">
           <View className="items-center flex-row flex-1">
              
              <View classname="justify-center flex-1 ml-3 gap-y-1">
              <Text className="font-psemibold text-sm text-black" numberOfLines={1}>
               {place}
              </Text>
              <Text  className="font-pregular text-sm text-gray-100">
                {prompt}
            </Text>
              </View>
           </View>
            <View>
                <Image source={icons.menu} className="w-5 h-5" resizeMode="contain"/>
            </View>
         </View>
         {play ? (
        <Text>Places</Text>
      ) : (
        <TouchableOpacity
          
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          
        </TouchableOpacity>
      )}
    </View>
  )
}

export default PlacesCard