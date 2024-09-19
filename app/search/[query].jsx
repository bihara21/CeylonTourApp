import { StyleSheet, Text, View,FlatList,Image,RefreshControl,Alert} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import PlacesCard from '../../components/PlacesCard'
import { useState } from "react";
import useAppwrite from '../../lib/useAppwrite'
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import { useLocalSearchParams } from 'expo-router'


const Search = () => {
  const {query}=useLocalSearchParams()
  const { data: posts,refetch } = useAppwrite(() =>searchPosts(query));
  
  useEffect(() =>{
      refetch()
  },[query])
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
       data={posts}
       //data={[]}
       keyExtractor={(item) => item.$id}
       renderItem={({item})=>(
         <PlacesCard places={item} />
       )}
       ListHeaderComponent={() => (
        <View className="flex my-6 px-4">
          
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Result
                </Text>
              
              
                <Text className="text-2xl text-black font-psemibold">
                  {query}
                </Text>
                <View className="mt-6 mb-8">
                <SearchInput initialQuery={query}/>
                </View>
                
            
        </View>
       )}
       ListEmptyComponent={() => (
        <EmptyState
          title="No Places Found for this search query"
        />
      )}
      
      />
    </SafeAreaView>
  )
}

export default Search

//const styles = StyleSheet.create({})