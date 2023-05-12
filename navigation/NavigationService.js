import { CommonActions } from '@react-navigation/native';

let navigationRef;

function setTopLevelNavigator(ref) {
  navigationRef = ref;
}

function navigate(routeName, params) {
  navigationRef?.current?.navigate(routeName, params);
}

export default {
  navigate,
  setTopLevelNavigator,
};
