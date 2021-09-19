import {request, Result} from '@/utils/request';

import {GetWeekScheduleDto} from './dto';

export const getCurrentWeekSchedule = (group: string): Promise<Result<GetWeekScheduleDto>> =>
    request('http://localhost:3000/schedule', {method: 'GET'});
