import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenido a mi tienda, soy Josue</Text>

        <View style={styles.proH}>
            <Text>Helado</Text>
        </View>
        <View style={styles.proC}>
            <Text>Cachito</Text>
        </View>
        <View style={styles.proCC}>
            <Text>Coca-cola</Text>
        </View>
        

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
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    proH:{
        backgroundColor:"yellow"
    },
    proC:{
        backgroundColor:"green"
    },
    proCC:{
        backgroundColor:"red"
    }

  });