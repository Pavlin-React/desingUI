import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import BookmarkScreen from './BookmarkScreen';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = props => {

  let [isDarkTheme, setIsDarkTheme] = useState(false)

  let toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar.Image
                source={require('../assets/image/wolf.png')}
                size={50}
              />
              <View style={{marginLeft: 20}}>
                <Title style={styles.title}>Steve Jobs</Title>
                <Caption style={styles.caption}>www.pavlin.dev</Caption>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              onPress={() => {props.navigation.navigate('Home')}}
              label="Home"
              icon={({size, color}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {props.navigation.navigate('Profile')}}
              label="Profile"
              icon={({size, color}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {props.navigation.navigate('BookmarkScreen')}}
              label="Bookmarks"
              icon={({size, color}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {props.navigation.navigate('SettingsScreen')}}
              label="Settings"
              icon={({size, color}) => (
                <Icon name="account-settings-outline" color={color} size={size} />
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {props.navigation.navigate('SupportScreen')}}
              label="Support"
              icon={({size, color}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}></DrawerItem>
          </Drawer.Section>
          <Drawer.Section title='Preferences' >
            <TouchableRipple onPress={() => {toggleTheme()}} >
              <View style={styles.preference} >
                <Text>Dark theme</Text>
                <View pointerEvents='none' >
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={() => {}}
          label="Sign Out"
          icon={({size, color}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}></DrawerItem>
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
