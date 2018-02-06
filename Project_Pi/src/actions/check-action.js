import { actionType } from '../utilities/shared-values';
import { checkDataFromAPI } from '../utilities/api-client';

export const checkFromAPI = (meterNo) => {
    return async (dispatch) => {
      try {
        const check = await checkDataFromAPI(meterNo);
        console.log("this is check 1:" + check);
        dispatch({ type: actionType.SET_CHECK, payload: check });
      }
      catch (error) {
        console.log('!!!!!!' + error.message + ' Error on get user data')
      }
    }
  }
  