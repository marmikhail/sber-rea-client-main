export type StoredUser = {
    userId: string;
    group: string;
};

export type StoredUsers = Record<string, StoredUser>;
