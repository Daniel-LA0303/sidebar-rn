import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feed from './src/components/pages/Feed';
import Article from './src/components/pages/Article';
import About from './src/components/pages/About';
import Settings from './src/components/pages/Settings';
import MenuButtonitem from './src/components/MenuButtonitem';

import 'react-native-gesture-handler';

import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Feed'
        drawerContent={(props) => <MenuItems {...props} />}
      >
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

const MenuItems = ({navigation}) => {

  return (
    <DrawerContentScrollView
      style={styles.container}
    >
      <Text style={styles.title}>Menu</Text>
      <MenuButtonitem 
        text = "Feed page"
        onPress = {() => navigation.navigate('Feed')}
      />
      <MenuButtonitem 
        text = "Article"
        onPress = {() => navigation.navigate('Article')}
      />
      <MenuButtonitem 
        text = "About"
        onPress = {() => navigation.navigate('About')}
      />
      <Text style={styles.title}>Settings</Text>
      <MenuButtonitem 
        text = "Settings"
        onPress = {() => navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
},
title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
}
})

export default App;

