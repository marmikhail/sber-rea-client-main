import type {DayInfo} from '@/domain/schedule/types';

export type GetWeekScheduleDto = {lessons: DayInfo[]; date: string};
