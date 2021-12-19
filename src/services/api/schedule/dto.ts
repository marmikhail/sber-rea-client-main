import type {DayInfo} from '@/domain/schedule/types';

export type LessonFullInfoDto = {
    name: string;
    building: string;
    type: string;
    date: string;
    room: string;
    teacher: string;
    chair: string;
};

export type GetWeekScheduleDto = DayInfo[];
