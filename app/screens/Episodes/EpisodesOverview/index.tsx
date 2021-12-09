import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native'
import ListItem from '../../../components/ListItem'
import ListItemSeperator from '../../../components/ListItemSeperator'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { AllEpisodes } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import NavigationButtons from '../../../components/NavigationButtons'
import { styles } from './style'
import ErrorHandler from '../../../components/ErrorHandler'

const EpisodeOverview = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'EpisodeOverview'>) => {
  const [page, setPage] = useState(1)

  const getEpisodeApi = useApi<AllEpisodes>(FetchApi.getAllEpisodes)

  useEffect(() => {
    getEpisodeApi.request(page)
  }, [page])

  const episodeDetails = getEpisodeApi.data?.results

  return (
    <SafeAreaView style={styles.container}>
      {getEpisodeApi.error && (
        <ErrorHandler errorMsg="Noe gikk galt ved henting av episoder" buttonText="Prøv igjen" onPress={() => getEpisodeApi.request(page)} />
      )}
      {!getEpisodeApi.error && (
        <>
          <View style={styles.list}>
            <FlatList
              data={episodeDetails}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  onPress={() => {
                    navigation.navigate('EpisodeDetails', {
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
            disabledNext={page == getEpisodeApi.data?.info.pages}
            disabledPrev={page == 1}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default EpisodeOverview
