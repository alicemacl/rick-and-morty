import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
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
    </SafeAreaView>
  )
}

export default LocationsOverview
