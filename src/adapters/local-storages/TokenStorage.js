const TokenStorage = () => {

    const getAuthToken = async () => {
        const authToken = localStorage.getItem("token");
        return authToken;
    };

    const removeAuthToken = () => {
        localStorage.removeItem("token");
    };

    return {
        getAuthToken,
        removeAuthToken
    };
};

export default TokenStorage;