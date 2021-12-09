import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { Location } from '../../../networking/interface'
import { RootStackParamList } from '../interface'

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
    <SafeAreaView>
      <Text>Location Details</Text>
      <Text>{itemId}</Text>
      <Text>{locationData?.name}</Text>
    </SafeAreaView>
  )
}

export default LocationDetails
