import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import Constants from 'expo-constants';

const styles = {
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
}

const ContentView = () => {
    return (
        <View
            style={styles.container}
        >
            <WebView
                source={{ uri: 'https://marrojo.netlify.app/' }}
            />
        </View>
    );
}

export default ContentView
