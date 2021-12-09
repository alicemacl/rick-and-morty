import React from 'react'
import { View, Text } from 'react-native'
import { TextLineProps } from './interface'
import { styles } from './style'

const TextLine = ({ title, text, dot }: TextLineProps) => (
  <View style={styles.textContainer}>
    <Text style={[styles.text, { fontWeight: '700', marginRight: 5 }]}>
      {title}
    </Text>
    <Text style={styles.text}>{text}</Text>
    {dot && (
      <View
        style={[
          styles.dot,
          {
            backgroundColor: dot,
            marginLeft: 10,
          },
        ]}
      />
    )}
  </View>
)

export default TextLine