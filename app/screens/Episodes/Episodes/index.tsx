import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EpisodeDetails from '../EpisodeDetails'
import EpisodeOverview from '../EpisodesOverview'

const Stack = createNativeStackNavigator()

function Episodes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EpisodeOverview"
        component={EpisodeOverview}
      />
      <Stack.Screen
        name="EpisodeDetails"
        component={EpisodeDetails}
      />
    </Stack.Navigator>
  )
}

export default Episodes
