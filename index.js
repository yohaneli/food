/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase,{FirebaseContext} from './providers'

const AppContext = () => {
    return(
        <FirebaseContext.Provider value={new Firebase()}>
            <App/>
        </FirebaseContext.Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppContext);
