import React,{ useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image,Alert } from "react-native";
import {icons} from '../constants'
const FormField = ({title,value,placeholder,handleChangeText,otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary-100 font-pmedium">{title}</Text>

      <View className="border-2 border-gray-100 w-full h-16 px-4 bg-primary rounded-2xl focus:border-secondary items-center flex-row">
      <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
          {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        </View>
    </View>
  )
}

export default FormField

