import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { Character } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import colors from '../../../config/colors'
import TextLine from '../../../components/TextLine'
import { styles } from './style'
import ErrorHandler from '../../../components/ErrorHandler'

const CharacterDetails = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CharacterDetails'>) => {
  const { itemId } = route.params

  const getCharacterDetails = useApi<Character>(FetchApi.getCharacter)

  useEffect(() => {
    getCharacterDetails.request([itemId])
  }, [itemId])

  const characterData = getCharacterDetails.data

  const characterInfo = [
    {
      title: 'Status:',
      text: characterData?.status,
      dot: characterData?.status === 'Alive' ? colors.green : 'red',
    },
    {
      title: 'Species:',
      text: characterData?.species,
    },
    {
      title: 'Gender:',
      text: characterData?.gender,
    },
    {
      title: 'Origin:',
      text: characterData?.origin.name,
    },
    {
      title: 'Last known location:',
      text: characterData?.location.name,
    },
    {
      title: 'Number of episodes:',
      text: characterData?.episode.length,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {getCharacterDetails.error && (
        <ErrorHandler
          errorMsg="Noe gikk galt ved henting av detaljene til denne karakteren"
          buttonText="Prøv igjen"
          onPress={() => getCharacterDetails.request([itemId])}
        />
      )}
      {!getCharacterDetails.error && (
        <>
          <Image style={styles.image} source={{ uri: characterData?.image }} />
          <View style={styles.infoBox}>
            <Text style={styles.title}>{characterData?.name}</Text>
            {characterInfo.map((item, index) => (
              <TextLine
                key={index}
                title={item.title}
                text={item.text}
                dot={item.dot}
              />
            ))}
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

export default CharacterDetails
