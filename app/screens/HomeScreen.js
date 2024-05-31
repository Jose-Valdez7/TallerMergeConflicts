import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion, soy Jose Valdez</Text>
        <Text> Estamos en el reto 36</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                    color={'red'}
                />
            </View>



            <Button
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNav');
                }}
                color={'green'}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cadetblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {
        
        marginRight: 60,

    },
});
