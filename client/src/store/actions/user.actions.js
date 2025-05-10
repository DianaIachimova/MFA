import { 
    TOGGLE_2FA_REQUEST, 
    TOGGLE_2FA_SUCCESS, 
    TOGGLE_2FA_FAILURE 
} from '../types';
import { api } from '../../services/api';

export const toggle2FA = () => async (dispatch) => {
    try {
        dispatch({ type: TOGGLE_2FA_REQUEST });
        
        const response = await api.post('/auth/2fa/toggle');
        
        dispatch({
            type: TOGGLE_2FA_SUCCESS,
            payload: { twoFactorEnabled: response.twoFactorEnabled }
        });
        
        return response;
    } catch (error) {
        dispatch({
            type: TOGGLE_2FA_FAILURE,
            payload: error.message
        });
        throw error;
    }
}; 