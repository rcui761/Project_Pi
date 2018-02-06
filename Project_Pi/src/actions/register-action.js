import { actionType } from '../utilities/shared-values';
import { fetchDataFromAPI } from '../utilities/api-client';

export const registrationFromAPI = (meterNo, deviceNo) => {
    return async (dispatch) => {
      try {
        const register = await fetchDataFromAPI(meterNo, deviceNo);
        console.log("this is register:" + register);
        dispatch({ type: actionType.SET_REGISTER, payload: register });
      }
      catch (error) {
        console.log('!!!!!!' + error.message + ' Error on get user data')
      }
    }
  }
  