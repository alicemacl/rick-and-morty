import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import ListItem from '../../../components/ListItem'
import ListItemSeperator from '../../../components/ListItemSeperator'
import useApi from '../../../hooks/useApi'
import FetchApi from '../../../networking/FetchApi'
import { AllCharacters } from '../../../networking/interface'
import { RootStackParamList } from '../interface'
import colors from '../../../config/colors'
import NavigationButtons from '../../../components/NavigationButtons'
import { styles } from './style'
import ErrorHandler from '../../../components/ErrorHandler'

const CharactersOverview = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CharactersOverview'>) => {
  const [page, setPage] = useState(1)

  const getCharactersDetails = useApi<AllCharacters>(FetchApi.getAllCharacters)

  useEffect(() => {
    getCharactersDetails.request(page)
  }, [page])

  const characterDetails = getCharactersDetails.data?.results

  return (
    <SafeAreaView style={styles.container}>
      {getCharactersDetails.error && (
        <ErrorHandler
          errorMsg="Noe gikk galt ved henting av karakterer"
          buttonText="Prøv igjen"
          onPress={() => getCharactersDetails.request(page)}
        />
      )}
      {!getCharactersDetails.error && (
        <>
          <SafeAreaView style={styles.list}>
            <FlatList
              data={characterDetails}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  onPress={() => {
                    navigation.navigate('CharacterDetails', {
                      itemId: item.id,
                    })
                  }}
                  backgroundColor={
                    item.status === 'Alive' ? colors.green : 'red'
                  }
                />
              )}
              ItemSeparatorComponent={ListItemSeperator}
            />
          </SafeAreaView>
          <NavigationButtons
            next={() => setPage(page + 1)}
            previous={() => setPage(page - 1)}
            disabledNext={page == getCharactersDetails.data?.info.pages}
            disabledPrev={page == 1}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default CharactersOverview
