import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from "../screens/home";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Screen" component={Screen}/>
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}
export default MyDrawer;