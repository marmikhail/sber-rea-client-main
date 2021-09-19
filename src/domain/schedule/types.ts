export type LessonInfo = {
    name: string;
    place: string;
};

export type DayInfo = {
    date: string;
    lessons: LessonInfo[];
};
