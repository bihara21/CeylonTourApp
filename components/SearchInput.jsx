import React,{ useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {icons} from '../constants'
const SearchInput = ({title,value,placeholder,handleChangeText,otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
   

      <View className="border-2 border-gray-100 w-full h-16 px-4 bg-primary rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
          className="text-base mt-0.5 text-black flex-1 font-pregular"
          value={value}
          placeholder="Search for a Place"
          placeholderTextColor="#7D8B9F"
        
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
          <TouchableOpacity>
            <Image
             source={icons.search}
             className='w-7 h-7'
             resizeMode='contain'

             />
          </TouchableOpacity>
        </View>
    
  )
}

export default SearchInput

