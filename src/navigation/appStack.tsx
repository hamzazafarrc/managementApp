import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@constants/routes';
import CardManagement from '@screens/cardManagement';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={SCREENS.CARD_MANAGEMENT} component={CardManagement} />

        </Stack.Navigator>
    )
}

export default AppStack