import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Explore from '../../screens/Explore'
import Episodes from '../../screens/Episodes/Episodes'
import Characters from '../../screens/Characters/Characters'
import Locations from '../../screens/Locations/Locations'
import colors from '../../config/colors'

export type RootTabParamList = {
  Explore: undefined
  Characters: undefined
  Locations: undefined
  Episodes: undefined
}

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>()
  return (
    <Tab.Navigator screenOptions= {{ tabBarInactiveTintColor: colors.darkBlue}}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compass" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Characters"
        component={Characters}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="child" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      
    </Tab.Navigator>
  )
}

export default TabNavigation

//rsf
