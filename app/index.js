import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES, SHADOWS ,icons,images} from "../constants"
import { Stack, useRouter } from 'expo-router'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

const Home = () => {
  const router = useRouter()


  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen 
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
        ),
        headerTitle: ""
      }} 
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: SIZES.medium, backgroundColor: COLORS.lightWhite}}>
        <View style={{flex: 1, padding: SIZES.medium}}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})