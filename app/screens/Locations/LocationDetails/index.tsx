import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { Location } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import { styles } from '../../Episodes/EpisodeDetails/style'
import ErrorHandler from '../../../components/ErrorHandler'

const LocationDetails = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LocationDetails'>) => {
  const { itemId } = route.params

  const getLocationDetails = useApi<Location>(FetchApi.getLocation)

  useEffect(() => {
    getLocationDetails.request([itemId])
  }, [itemId])

  console.log(itemId)

  const locationData = getLocationDetails.data

  return (
    <SafeAreaView style={styles.container}>
      {getLocationDetails.loading && (
        <ActivityIndicator
          animating={getLocationDetails.loading}
          size="large"
        />
      )}

      {getLocationDetails.error && (
        <ErrorHandler
          errorMsg="Noe gikk galt ved henting av detaljene til lokasjonen"
          buttonText="Prøv igjen"
          onPress={() => getLocationDetails.request([itemId])}
        />
      )}
      {!getLocationDetails.error && (
        <View style={styles.card}>
          <Text style={styles.title}>{locationData?.name}</Text>
          <Text style={styles.subTitle}>Type of location</Text>
          <Text style={styles.text}>{locationData?.type}</Text>
          <Text style={styles.subTitle}>Created</Text>
          <Text style={styles.text}>{locationData?.created}</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default LocationDetails
