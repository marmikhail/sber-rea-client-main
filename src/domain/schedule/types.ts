export type LessonInfo = {
    name: string;
    building: string;
    room: string;
};

export type DayInfo = {
    date: string;
    lessons: LessonInfo[];
};
