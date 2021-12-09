import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native'
import colors from '../../config/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { CharacterCardProps } from './interface'
import { styles } from './style'

const ListItem = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: CharacterCardProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <View style={styles.infoContainer}>
      {item.image && (
        <Image style={styles.thumbnail} source={{ uri: item.image }} />
      )}
      <Text style={[styles.title]}>{item.name}</Text>
      {item.status && (
        <View style={[styles.dot, { backgroundColor: backgroundColor }]} />
      )}
    </View>
    <View style={styles.arrow}>
      <FontAwesome5 name="arrow-right" size={20} color={colors.blue} />
    </View>
  </TouchableOpacity>
)

export default ListItem