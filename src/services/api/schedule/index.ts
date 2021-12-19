import {LessonFullInfo} from '@/domain/schedule/types';
import {API_URL} from '@/settings';
import {decorateResponse, request, Result} from '@/utils/request';

import {GetWeekScheduleDto, LessonFullInfoDto} from './dto';
import {prepareLessonFullInfo} from './transformers';
import {getApiDate} from '../utils/getApiDate';

export const getCurrentWeekSchedule = (group: string, weekIndex: number): Promise<Result<GetWeekScheduleDto>> =>
    request(`${API_URL}/GetWeeklyTimetable?week=${weekIndex}&group=${group}`, {method: 'GET'});

export const getLessonInfo = async (group: string, date: Date, slot: number): Promise<Result<LessonFullInfo>> => {
    const res = await request<LessonFullInfoDto>(
        `${API_URL}/GetDetails?date=${getApiDate(date)}&selection=${group}&timeSlot=${slot}`,
        {
            method: 'GET',
        },
    );

    return decorateResponse(res, prepareLessonFullInfo);
};
