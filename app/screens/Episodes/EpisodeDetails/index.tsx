import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import ErrorHandler from '../../../components/ErrorHandler'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { Episode, MultipleCharacters } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import { styles } from './style'

const EpisodeDetails = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'EpisodeDetails'>) => {
  const { itemId } = route.params

  const getEpisodeApi = useApi<Episode>(FetchApi.getEpisode)

  useEffect(() => {
    getEpisodeApi.request([itemId])
  }, [itemId])

  const episodeData = getEpisodeApi.data

  /* 
  
      From here I tried to call the characters from each episode by...
          * making a new empty array
          * looping through to substring away the api link information
          * ... leaving me with an array of strings
          * which I then parsed to ints/numbers
          * which I again converted to string, as in ONE long string of numbers
          * I planned to fit this string onto the api to catch multiple characters (character/44,33,66,77)
          * but I only seem to be getting back the whole api 
          * 

  */

  const charactersInEpisode: any = episodeData?.characters

  const newCharacterIds: any = []

  for (let i = 0; i < charactersInEpisode?.length; i++) {
    const characterIds = parseInt(
      charactersInEpisode[i].substring(
        'https://rickandmortyapi.com/api/character/'.length
      )
    )
    newCharacterIds.push(characterIds)
  }

  const mapNumbers = newCharacterIds.toString()

  const getCharacterApi = useApi<MultipleCharacters>(
    FetchApi.getCharactersInEpisode
  )

  useEffect(() => {
    getCharacterApi.request(mapNumbers)
  }, [])

  console.log(getCharacterApi.data)

  console.log(mapNumbers)

  return (
    <SafeAreaView style={styles.container}>
      {getCharacterApi.error && (
        <ErrorHandler
          errorMsg="Noe gikk galt ved henting av detaljene til episoden"
          buttonText="Prøv igjen"
          onPress={() => getEpisodeApi.request([itemId])}
        />
      )}
      {!getEpisodeApi.error && (
        <View style={styles.card}>
          <Text style={styles.title}>{episodeData?.name}</Text>
          <Text style={styles.subTitle}>Episode</Text>
          <Text style={styles.text}>{episodeData?.episode}</Text>
          <Text style={styles.subTitle}>Aired</Text>
          <Text style={styles.text}>{episodeData?.created}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default EpisodeDetails
