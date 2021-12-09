import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

interface ErrorHandlerProps {
  errorMsg: string
  buttonText: string
  onPress: () => void
}

export default function ErrorHandler({ errorMsg, buttonText, onPress }: ErrorHandlerProps) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: colors.white, padding: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>{errorMsg}</Text>
      <Button title={buttonText} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({})
