import {formatUrlDate} from '@/utils/format';

export const getLessonPageUrl = (group: string, date: Date, lessonIndex: number): string =>
    `/lesson?group=${group}&date=${formatUrlDate(date)}&slot=${lessonIndex}`;
