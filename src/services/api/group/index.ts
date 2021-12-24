import {API_URL} from '@/settings';
import {request, Result} from '@/utils/request';

export const validateGroup = (group: string): Promise<Result<boolean>> =>
    request(`${API_URL}/CheckGroupForAvailability?group=${group}`, {method: 'GET'});
