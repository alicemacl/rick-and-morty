import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LocationsOverview from '../LocationOverview'
import LocationDetails from '../LocationDetails'

const Stack = createNativeStackNavigator()

function Locations() {
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
