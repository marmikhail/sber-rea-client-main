/** Аналог JSON.parse, только не выкидывает ошибку, а возвращает null */
export const unsafeParse = (str: string): unknown | null => {
    try {
        return JSON.stringify(str);
    } catch {
        return null;
    }
};
