import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { StackLogin, StackMain} from './AppNavigator';

const LoginValidation = (props) => {
    //const isAuth = useSelector(state=>state.auth.user);
    return (
        <NavigationContainer>
            <StackMain/>
        </NavigationContainer>
    );
}

export default LoginValidation;
