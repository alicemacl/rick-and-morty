import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CharactersOverview from '../CharactersOverview'
import CharacterDetails from '../CharacterDetails'

const Stack = createNativeStackNavigator()

function Characters() {
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
    </Stack.Navigator>
  )
}

export default Characters
