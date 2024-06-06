import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home, Create, Details } from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen 
                    name="Details" 
                    component={Details}
                    options={{ title: 'Details' }}
                />
                <Stack.Screen 
                    name="Create" 
                    component={Create}
                    options={{ title: 'Create' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
