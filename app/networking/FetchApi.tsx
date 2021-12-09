import React from 'react'
import Axios from 'axios'
import {
  AllCharacters,
  AllEpisodes,
  AllLocations,
  Character,
  Episode,
  Location,
  MultipleCharacters,
} from './interface'

Axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

//const baseUrl = 'https://rickandmortyapi.com/api/'

export const getEpisode = async (episode: number | string) => {
  try {
    const result = await Axios.get<Episode>(`episode/${episode}`)
    return result.data
  } catch (error) {
    throw `Error fetching episode ${episode}: ${error}`
  }
}

export const getAllEpisodes = async (page: number | string) => {
  try {
    const result = await Axios.get<AllEpisodes>(`episode/?page=${page}`)
    return result.data
  } catch (error) {
    throw `Error fetching all episodes: ${error}`
  }
}

const getCharacter = async (character: number | string) => {
  try {
    const result = await Axios.get<Character>(`character/${character}`)
    return result.data
  } catch (error) {
    throw `Error fetching character ${character}: ${error}`
  }
}

const getAllCharacters = async (page: number | string) => {
  try {
    const result = await Axios.get<AllCharacters>(`character/?page=${page}`)
    return result.data
  } catch (error) {
    throw `Error fetching all characters: ${error}`
  }
}

export const getCharactersInEpisode = async (character: any) => {
  try {
    const result = await Axios.get<MultipleCharacters>(`character/${character}`)
    return result.data
  } catch (error) {
    throw `Error fetching all characters in episode: ${error}`
  }
}

const getLocation = async (location: number | string) => {
  try {
    const result = await Axios.get<Location>(`location/${location}`)
    return result.data
  } catch (error) {
    throw `Error fetching location ${location}: ${error}`
  }
}

const getAllLocations = async (page: number | string) => {
  try {
    const result = await Axios.get<AllLocations>(`location/?page=${page}`)
    return result.data
  } catch (error) {
    throw `Error fetching all locations: ${error}`
  }
}

const FetchApi = {
  getCharacter,
  getAllCharacters,
  getEpisode,
  getAllEpisodes,
  getLocation,
  getAllLocations,
  getCharactersInEpisode,
}

export default FetchApi
