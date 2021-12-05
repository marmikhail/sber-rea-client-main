import {request, Result} from '@/utils/request';

import {GetWeekScheduleDto} from './dto';

export const getCurrentWeekSchedule = (group: string, weekIndex: number): Promise<Result<GetWeekScheduleDto>> =>
    request(`https://rasp-rea.herokuapp.com/GetWeeklyTimetable?week=${weekIndex}&group=${group}`, {method: 'GET'});
