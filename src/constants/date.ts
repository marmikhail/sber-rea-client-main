export const WEEK_DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

/**  Дата начала учебного года */
export const EDU_YEAR_START_DATE = (function () {
    const date = new Date();

    date.setMonth(8);
    date.setDate(1);

    return date;
})();

export const WEEK_DAY = {
    MON: 0,
    TUE: 1,
    WED: 2,
    THU: 3,
    FRI: 4,
    SAT: 5,
    SUN: 6,
} as const;

export const TIME_SLOTS = [
    '08:15 - 09:45',
    '09:55 - 11:25',
    '11:50 - 13:20',
    '13:45 - 15:15',
    '15:25 - 16:55',
    '17:05 - 18:35',
    '18:45 - 20:15',
    '20:25 - 21:55',
] as const;
