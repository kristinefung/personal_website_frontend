import UserApi from 'adapters/apis/UserApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const UserService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const userApi = UserApi(baseUrl);
    const tokenStorage = TokenStorage();

    const verifyUserSessionToken = async () => {
        const authToken = await tokenStorage.getAuthToken();

        const res = await userApi.verifyUserSessionToken(authToken);
        const success = res.status === 0;
        return success;
    };

    const login = async (email, password) => {
        const resJson = await userApi.login(email, password);

        return resJson;
    };

    return {
        verifyUserSessionToken,
        login,
    };
};

export default UserService;