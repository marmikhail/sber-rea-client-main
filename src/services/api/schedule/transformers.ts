import {LessonFullInfo} from '@/domain/schedule/types';
import {LessonFullInfoDto} from './dto';

const preparePlace = (building: string, room: string) => `${building}, аудитория ${room}`;

export const prepareLessonFullInfo = ({
    building,
    date,
    teacher,
    room,
    name,
    ...dto
}: LessonFullInfoDto): LessonFullInfo => ({
    name,
    date,
    teacher,
    lessonType: dto.type,
    place: preparePlace(building, room),
});
