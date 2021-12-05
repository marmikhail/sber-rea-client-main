import {EDU_YEAR_START_DATE} from '@/constants/date';
import addWeeks from 'date-fns/addWeeks';
import {calculateWeekIndex} from '../calculateWeekIndex';

describe('calculateWeekIndex', () => {
    it('Корректно считает индекс другого дня', () => {
        const date = addWeeks(EDU_YEAR_START_DATE, 2);

        expect(calculateWeekIndex(date)).toBe(3);
    });
});
