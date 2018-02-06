import axios from 'axios';

export const fetchDataFromAPI = async (meterNo, deviceNo) => {
        
            const response = await fetch("https://functionappamber.azurewebsites.net/api/Register?code=i305nh9lfTvKO9ha5vtScAwvjiaxp20TEVYexLOF6RPk4sqqlYb/Mw==&qrcode="+deviceNo+"&barcode="+meterNo);
            const jsonResponse = await response.json();
            if (!response.ok) {
                if ('Message' in jsonResponse) {
                    throw new Error(jsonResponse.Message)
                }
                throw new Error(ApiErrorMessages.COULD_NOT_FETCH_DATA)
            }
            return jsonResponse;
        }
// Note this is just a random api that gets random data.
// This is for example
// Recommend you use axios


export const checkDataFromAPI = async (meterNo) => {
    
        const response = await fetch("https://functionappamber.azurewebsites.net/api/MeterCheck?code=BmNZlJYwstq0yT0agytwJeqhuDMDVRUnxLuC7pu/uf0o4HcjmwCEJA==&meter="+meterNo);
        const jsonResponse = await response.json();
        if (!response.ok) {
            if ('Message' in jsonResponse) {
                throw new Error(jsonResponse.Message)
            }
            throw new Error(ApiErrorMessages.COULD_NOT_FETCH_DATA)
        }
        return jsonResponse;
    }