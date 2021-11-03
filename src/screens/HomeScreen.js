import React, { useEffect } from 'react'
import {ScrollView, View, Image} from 'react-native'
import {Title, Headline, Paragraph, Text} from 'react-native-paper'
import { Screen } from '../components'

import { styles } from '../styles/home'

export const HomeScreen = ({navigation, route}) => {
    const response=route?.params?.params
    console.log(response, "response")


  if (response?.suggestions) {
    return (
      <Screen>
        <ScrollView contentContainerStyle={styles.container} style={{ marginTop: 64 }}>
          <Headline color="black">Plant ID </Headline>
          {response?.suggestions.map(suggested =>
            <>
              <Text><Title>Official Name:</Title> {suggested.plant_name}</Text>
              <Text>Common Names: </Text>
              {suggested.plant_details.common_names?.map(item =>
                <Text>{item.replace(item.charAt(0), item.charAt(0).toUpperCase())}</Text>
              )}
              <Text>Class: {suggested.plant_details.taxonomy.class}</Text>
              <Text>Family: {suggested.plant_details.taxonomy.family}</Text>
              <Text>Genus: {suggested.plant_details.taxonomy.genus}</Text>

              {/* <Text>Description: {suggested.plant_details.wiki_description.value}  </Text>
    <Text>{suggested.plant_details.wiki_description.citation}</Text>
    <Image source={{uri: suggested.plant_details.wiki_image.value}} style={{width: 500, height: 300}}/> */}
              <Text>Probability: {suggested.probability}</Text>
              <Text>Confirmed: {suggested.confirmed}</Text>

              {suggested.similar_images?.map(item =>

                <>
                  <Text>Similarity: {item.similarity}</Text>
                  <Image source={{ uri: item.url }} style={{ width: 500, height: 300 }} />
                </>
              )}

            </>
          )}
          <Text>Plant Health Assessment:</Text>

          <Text>Healthy: {response?.health_assessment?.is_healthy.toString()}</Text>
          <Text>Diseases:</Text>
          {response?.health_assessment?.diseases?.map(item =>
            <>
              <Text>Classification: {item.classification}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Probability: {item.probability}</Text>
            </>
          )}
          <Text> Simple Diseases:</Text>
          {response?.health_assessment?.diseases_simple?.map(item =>
            <>
              <Text>Name: {item.name}</Text>
              <Text>Probability: {item.probability}</Text>
            </>
          )}
        </ScrollView>
      </Screen>
    )
  } else {
    return (
      <Screen>
        <Title>No Saved Searches</Title>
      </Screen>
    )
  }
}
