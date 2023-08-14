import { View, Text, Button } from 'react-native'

export default function Details({ navigation, route }) {
  const { firstName, lastName } = route.params

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Button
        title='Enviar para a mesma tela'
        onPress={() => navigation.navigate({
          name: 'Home',
          params: {
            middleName: 'Rodrigues'
          },
          merge: true
        })}
      />
    </View>
  )
}