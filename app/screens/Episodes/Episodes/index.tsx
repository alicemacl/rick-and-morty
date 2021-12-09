import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import EpisodeDetails from '../EpisodeDetails'
import EpisodeOverview from '../EpisodesOverview'
import { RootTabParamList } from '../../../navigation/TabNavigation'

const Stack = createNativeStackNavigator()

function Episodes({ navigation, }: NativeStackScreenProps<RootTabParamList, 'Episodes'>) {
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
