import React from 'react'
import {Image, View, Text} from 'react-native'
import { usePlantId } from '../hooks'

export const Response = () => {
  const {response} = usePlantId()
  return(
<View>
<>
  <Text>{response.plant_name}</Text>
  {response.plant_details.common_names.map(item => 
  <Text>{item}</Text>
  )}
  <Text>{response.plant_details.taxonomy.class}</Text>
    <Text>{response.plant_details.taxonomy.family}</Text>
    <Text>{response.plant_details.taxonomy.genus}</Text>
    <Text>{response.plant_details.url}</Text>
    <Text>{response.plant_details.wiki_description.value}  </Text>
    <Text>{response.plant_details.wiki_description.citation}</Text>
    <Text>{response.plant_details.wiki_image.value}</Text>
    <Text>{response.probability}</Text>
    <Text>{response.confirmed}</Text>
    
    {response.similar_images.map(item => 
      
      <>
        <Text>{item.similarity}</Text>
        <Text>{item.url}</Text>
        </>
        )}
</>    
</View>
  )
}
