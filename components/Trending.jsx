import { View, Text,FlatList,ImageBackground,Image,TouchableOpacity,Alert } from 'react-native'
import React, { useCallback } from 'react'
import * as Animatable from 'react-native-animatable';
import { useState } from "react";
import { icons } from "../constants";
const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};
const TrendingItem = ({activeItem,item}) => {
  const [play, setPlay] = useState(false);
 
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
        {play ? (
        <Text className="text-black">Watch</Text>
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
         
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
         
          <Text className="font-psemibold text-sm text-white w-15 h-12 absolute" numberOfLines={1} resizeMode="contain">
               Sri Lanka
         </Text>

        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}



const Trending = ({posts}) => {
  const [activeItem, setActiveItem] = useState(posts[1]);
  const viewableItemsChanged =useCallback( ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  },[]);
  return (
    <FlatList
      data={posts}
      
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item}/>
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold:70
      }}
      contentOffset={{x: 170}}
      horizontal
     />
  )
}

export default Trending