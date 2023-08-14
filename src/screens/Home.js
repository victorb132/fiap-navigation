import { View, Text, Button } from 'react-native'

export default function Home({ navigation, route }) {
  const name = {
    firstName: 'Victor',
    lastName: 'Novais'
  }

  function navigateToDetails() {
    navigation.navigate('Details', name);
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>{name.firstName}</Text>
      <Text>{name.lastName}</Text>
      <Text>{route?.params?.middleName}</Text>
      <Button title='Ir para detalhes' onPress={navigateToDetails} />
    </View>
  )
}