import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreens';
import DetailsComponent from './src/screens/DetailsComponent';

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details:DetailsComponent
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
