import React from 'react';
import {View, Text} from 'react-native'
import StatusBarPage from '../../components/StatusBarPage';
import { Menu } from "../../components/Menu";

import { LinearGradient } from 'expo-linear-gradient';

export default function MyLinks(){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#132742'}}>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Text style={{color:'#fff'}}>Meus Links</Text>
        </View>
    )
}