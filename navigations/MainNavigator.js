import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import CartScreen from '../screens/Home/Cart/CartScreen';
import CustomDrawer from '../components/menu/CustomDrawer';
import AboutUsScreen from '../screens/AboutUs/AboutUsScreen';
import RefundPolicyScreen from '../screens/RefundPolicy/RefundPolicyScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditions/TermsAndConditionsScreen';
import ContactUsScreen from '../screens/ContactUs/ContactUsScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import FAQsScreen from '../screens/FAQs/FAQsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import UpdateProfileScreen from '../screens/Profile/UpdateProfileScreen';
import OrderSummaryScreen from '../screens/Home/Order/OrderSummaryScreen';
import SecurePaymentScreen from '../screens/Home/Order/SecurePaymentScreen';
import SubCategoriesScreen from '../screens/Categories/SubCategoriesScreen';
import ProductsScreen from '../screens/product/ProductsScreen';
import ProductDetailsScreen from '../screens/product/ProductDetailsScreen';
import MyOrdersScreen from '../screens/Home/Order/MyOrdersScreen';
import OrderDetailsScreen from '../screens/Home/Order/OrderDetailsScreen';
import TrackOrderScreen from '../screens/Home/Order/TrackOrderScreen';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="CategoriesScreen" component={CategoriesScreen} />
            <HomeStack.Screen name="ProductsScreen" component={ProductsScreen} />
            <HomeStack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
            <HomeStack.Screen name="CartScreen" component={CartScreen} />
            {/* <HomeStack.Screen name="MyOrdersScreen" component={MyOrdersScreen} /> */}
            <HomeStack.Screen name="OrderSummary" component={OrderSummaryScreen} />
            <HomeStack.Screen name="SecurePayment" component={SecurePaymentScreen} />
            <HomeStack.Screen name="SubCategories" component={SubCategoriesScreen} />
            
        </HomeStack.Navigator>
    )
}


const OrderStack = createStackNavigator();

const OrderNavigator = () => {
    return (
        <OrderStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <OrderStack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
            <OrderStack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
            <OrderStack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
            
        </OrderStack.Navigator>
    )
}

const MainNavigator = () => {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"  
            drawerContent={(props) => <CustomDrawer {...props} />}    
        >
            <Drawer.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="ContactUs" component={ContactUsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="RefundPolicy" component={RefundPolicyScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="FAQs" component={FAQsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="MyOrders" component={OrderNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default MainNavigator