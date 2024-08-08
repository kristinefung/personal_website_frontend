const TokenStorage = () => {

    const getAuthToken = async () => {
        const authToken = localStorage.getItem("token");
        return authToken;
    };

    return {
        getAuthToken
    };
};

export default TokenStorage;