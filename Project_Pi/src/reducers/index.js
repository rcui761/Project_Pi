import { combineReducers } from 'redux';

import TitleReducer from './title-reducer';
import CameraReducer from './camera-active-reducer';
import Navigation from '../navigation/navigation';
import MeterNoReducer from './meterNo-reducer';
import DeviceNoReducer from './deviceNo-reducer';
import CameraTypeReducer from './cameraType-reducer';
import RegisterReducer from './register-reducer';
import CheckReducer from './check-reducer';

const navReducer = (state, action) => {
    const newState = Navigation.router.getStateForAction(action, state)
    return newState || state
  }
export default combineReducers(Object.assign(
    {
        nav: navReducer
    },
    { 
        title: TitleReducer,
        cameraActive: CameraReducer,
        meterNo: MeterNoReducer,
        deviceNo: DeviceNoReducer,
        cameraType: CameraTypeReducer,
        register: RegisterReducer,
        check:CheckReducer
    }
));