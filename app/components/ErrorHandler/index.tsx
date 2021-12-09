import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import { styles } from './style'
import { ErrorHandlerProps } from './interface'

export default function ErrorHandler({
  errorMsg,
  buttonText,
  onPress,
}: ErrorHandlerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{errorMsg}</Text>
      <Button title={buttonText} onPress={onPress} />
    </View>
  )
}