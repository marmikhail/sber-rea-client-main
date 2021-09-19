export type UserId = number & {__userId: never};

export type UserInfo = {
    uid: UserId;
    name: string;
    group: string;
};
