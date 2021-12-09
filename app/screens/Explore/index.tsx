import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useApi from '../../hooks/useApi'
import { RootTabParamList } from '../../navigation/TabNavigation'
import FetchApi from '../../networking/FetchApi'
import {
  AllCharacters,
  AllEpisodes,
  AllLocations,
} from '../../networking/interface'
import DetailsCard from '../../components/DetailsCard'
import { styles } from './style'
import ErrorHandler from '../../components/ErrorHandler'

export default function Explore({
  navigation,
}: NativeStackScreenProps<RootTabParamList, 'Explore'>) {
  const getCharacterApi = useApi<AllCharacters>(FetchApi.getAllCharacters)
  const getLocationsApi = useApi<AllLocations>(FetchApi.getAllLocations)
  const getEpisodesApi = useApi<AllEpisodes>(FetchApi.getAllEpisodes)

  useEffect(() => {
    getCharacterApi.request()
    getLocationsApi.request()
    getEpisodesApi.request()
  }, [])

  const exploreContent = [
    {
      title: 'Total characters',
      text: getCharacterApi.data?.info.count,
      buttonTitle: 'Show characters',
      screenLink: () => navigation.navigate('Characters'),
      imageUri: require('../../assets/characters.jpeg'),
    },
    {
      title: 'Total locations',
      text: getLocationsApi.data?.info.count,
      buttonTitle: 'Show locations',
      screenLink: () => navigation.navigate('Locations'),
      imageUri: require('../../assets/locations.jpeg'),
    },
    {
      title: 'Total episodes',
      text: getEpisodesApi.data?.info.count,
      buttonTitle: 'Show episodes',
      screenLink: () => navigation.navigate('Episodes'),
      imageUri: require('../../assets/episodes.jpeg'),
    },
  ]

  const handleErrorRequest = () => {
    getCharacterApi.request()
    getLocationsApi.request()
    getEpisodesApi.request()
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.subTitle}>
          Your daily source to keep up with the different dimensions of the Rick
          and Morty universe.
        </Text>
        {getCharacterApi.loading && getLocationsApi.loading && getEpisodesApi.loading && (
          <ActivityIndicator animating={getCharacterApi.loading && getLocationsApi.loading && getEpisodesApi.loading} size="large" />
        )}
        {getCharacterApi.error &&
          getEpisodesApi.error &&
          (getLocationsApi.error && (
            <ErrorHandler
              errorMsg="Noe gikk galt ved henting av detaljene til episoden"
              buttonText="Prøv igjen"
              onPress={handleErrorRequest}
            />
          ))}
        {!getCharacterApi.error &&
          !getEpisodesApi.error &&
          (!getLocationsApi.error && (
            <ScrollView>
              {exploreContent.map((item, index) => (
                <DetailsCard
                  key={index}
                  title={item.title}
                  text={item.text}
                  buttonTitle={item.buttonTitle}
                  screenLink={item.screenLink}
                  imageUri={item.imageUri}
                />
              ))}
            </ScrollView>
          ))}
      </SafeAreaView>
    </View>
  )
}
