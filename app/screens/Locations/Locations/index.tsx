import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import LocationsOverview from '../LocationOverview'
import LocationDetails from '../LocationDetails'
import { RootTabParamList } from '../../../navigation/TabNavigation'

const Stack = createNativeStackNavigator()

function Locations({ navigation, }: NativeStackScreenProps<RootTabParamList, 'Locations'>) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LocationsOverview"
        component={LocationsOverview}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
      />
    </Stack.Navigator>
  )
}

export default Locations
