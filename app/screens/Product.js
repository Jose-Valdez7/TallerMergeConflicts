import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text >Bienvenidos </Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('HomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'sky-blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });