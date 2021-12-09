import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import colors from '../../config/colors'
import { DetailsCardProps } from './interface'
import { styles } from './style'

export default function DetailsCard({
  title,
  text,
  buttonTitle,
  screenLink,
  imageUri
}: DetailsCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={imageUri}
        style={{ height: 100, width: 100, marginRight: 10 }}
      />
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardNumber}>{text}</Text>
        <Button title={buttonTitle} onPress={screenLink} color={colors.darkBlue} />
      </View>
    </View>
  )
}
