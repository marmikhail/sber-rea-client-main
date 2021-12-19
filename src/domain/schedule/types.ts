export type LessonInfo = {
    name: string;
    building: string;
    room: string;
    number: string;
};

export type DayInfo = {
    date: string;
    isFree: boolean;
    lessons: LessonInfo[];
};

export type LessonFullInfo = {
    name: string;
    place: string;
    date: string;
    lessonType: string;
    teacher: string;
};
