import {useEffect} from 'react';
import {useRouter} from '../hooks/useRouter';

export type RedirectProps = {
    /** Путь, на который будет перенаправлен пользователь */
    to: string;
    /** Заменять ли текущую запись в истории на to */
    replace?: boolean;
};

const Redirect = ({to, replace}: RedirectProps) => {
    const router = useRouter();

    useEffect(() => {
        if (replace) {
            router.replace(to);
        } else {
            router.push(to);
        }
    }, [router, replace, to]);

    return null;
};

export default Redirect;
