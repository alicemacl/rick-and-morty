import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import CharactersOverview from '../CharactersOverview'
import CharacterDetails from '../CharacterDetails'
import { RootTabParamList } from '../../../navigation/TabNavigation'

const Stack = createNativeStackNavigator()

function Characters({ navigation, }: NativeStackScreenProps<RootTabParamList, 'Characters'>) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharactersOverview"
        component={CharactersOverview}
        options={{ title: 'All characters' }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetails}
        options={{ title: 'Characer profile' }}
      />
      {/* <TabNavigation /> */}
    </Stack.Navigator>
  )
}

export default Characters
