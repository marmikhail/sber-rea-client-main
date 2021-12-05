export const WEEK_DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

/**  Дата начала учебного года */
export const EDU_YEAR_START_DATE = (function () {
    const date = new Date();

    date.setMonth(8);
    date.setDate(1);

    return date;
})();
