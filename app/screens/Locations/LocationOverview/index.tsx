import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native'
import ErrorHandler from '../../../components/ErrorHandler'
import ListItem from '../../../components/ListItem'
import ListItemSeperator from '../../../components/ListItemSeperator'
import NavigationButtons from '../../../components/NavigationButtons'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { AllLocations } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import { styles } from './style'

const LocationsOverview = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'LocationsOverview'>) => {
  const [page, setPage] = useState(1)

  const getLocationsDetails = useApi<AllLocations>(FetchApi.getAllLocations)

  useEffect(() => {
    getLocationsDetails.request(page)
  }, [page])

  const locationDetails = getLocationsDetails.data?.results

  return (
    <SafeAreaView style={styles.container}>
      {getLocationsDetails.loading && (
        <ActivityIndicator
          animating={getLocationsDetails.loading}
          size="large"
        />
      )}

      {getLocationsDetails.error && (
        <ErrorHandler
          errorMsg="Noe gikk galt ved henting av lokasjonene"
          buttonText="Prøv igjen"
          onPress={() => getLocationsDetails.request(page)}
        />
      )}
      {!getLocationsDetails.error && (
        <>
          <View style={styles.list}>
            <FlatList
              data={locationDetails}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  onPress={() => {
                    navigation.navigate('LocationDetails', {
                      itemId: item.id,
                    })
                  }}
                />
              )}
              ItemSeparatorComponent={ListItemSeperator}
            />
          </View>
          <NavigationButtons
            next={() => setPage(page + 1)}
            previous={() => setPage(page - 1)}
            disabledNext={page == getLocationsDetails.data?.info.pages}
            disabledPrev={page == 1}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default LocationsOverview
