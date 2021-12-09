import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItemSeperator = () => <View style={styles.seperator} />

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.2,
  },
})

export default ListItemSeperator