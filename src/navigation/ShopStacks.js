import { createStackNavigator } from "@react-navigation/stack"
import ProductDetail from "../screens/productDetail"
import Shop from "../screens/shop"

const Stack = createStackNavigator()
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown:false  }}
        name='Shop' component={Shop}
        />
      <Stack.Screen
        options={{headerShown:false  }}
        name='ProductDetail' component={ProductDetail}/>
    </Stack.Navigator>
  )
}