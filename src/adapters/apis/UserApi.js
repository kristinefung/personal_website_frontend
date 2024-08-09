
const UserApi = (baseUrl) => {

  const verifyUserSessionToken = async (authToken) => {
    try {
      const response = await fetch(`${baseUrl}/verify-user-session-token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const res = await response.json();
      return res;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })

      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const resJson = await response.json();
      return resJson;
    } catch (error) {
      throw error;
    }
  };


  return {
    verifyUserSessionToken,
    login,
  };
};

export default UserApi;