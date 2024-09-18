import { View, Text, ScrollView, Dimensions, Alert, Image,ImageBackground } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {images} from '../../constants'
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {createUser} from '../../lib/appwrite'


const SignUp = () => {
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting]=useState(false)


  const submit = async () => {
    if(!form.username || !form.email || !form.password)
    {
      Alert.alert('Error','Please Fill in all the fields')
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email,form.password,form.username)
      
      Alert.alert("Success", "User signed in successfully");
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error',error.message)
    }finally{
      setIsSubmitting(false)
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      
      
    <ScrollView>
      <View
        className="w-full flex justify-center h-full px-4 my-6">
       
        <Image source={images.signupman}
        resizeMode='contain'
        className="w-[350px] h-[200px]"/>

        <Text className="text-2xl font-semibold text-black mt-2 font-psemibold">
            Sign up to CeylonTour
        </Text>
        <FormField
           title="Username"
           value={form.username}
           handleChangeText={(e) => setForm ({...form,username:e})}
           otherStyles="mt-10"
           
        />
        <FormField
           title="Email"
           value={form.email}
           handleChangeText={(e) => setForm ({...form,email:e})}
           otherStyles="mt-7"
           keyboardType="email-address"
        />
        <FormField
           title="Password"
           value={form.password}
           handleChangeText={(e) => setForm ({...form,password:e})}
           otherStyles="mt-7"
           
        />
         <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an Account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
      </View>
    </ScrollView>
    
  </SafeAreaView>
  )
}

export default SignUp
