import { useSelector } from 'react-redux';

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/auth/selectors';

import { selectLoading } from 'redux/contacts/selectors';

export const useAuth = () => {
    const isLoading = useSelector(selectLoading)
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
        isLoading
    };
};
