import React,{useState} from 'react'
import { View, Text, TextInput,TouchableOpacity, Image,FlatList } from 'react-native'

import {icons,SIZES} from '../../../constants'
import styles from './welcome.style'
import { useRouter } from 'expo-router'

const jopTypes = ['Full-time', ' international', 'Part-time', 'Monthly', ' monthlyyy']
const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mas</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Jop</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What you are looking for?"
            value=""
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
        data={jopTypes}
        keyExtractor={item => item}
        renderItem={({item})=>{
          return (
            <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType,item)} >{item}</Text>
            </TouchableOpacity>
          )
        }}
        horizontal={true}
        />
      </View>
    </View>
  );
}

export default Welcome