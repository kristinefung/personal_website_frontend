
const EducationApi = (baseUrl) => {

  const getAllEducations = async () => {
    try {
      const response = await fetch(`${baseUrl}/educations`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const educations = await response.json();
      return educations;
    } catch (error) {
      throw error;
    }
  };

  const getEducationById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/educations/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const education = await response.json();
      return education;
    } catch (error) {
      throw error;
    }
  };

  const createEducation = async (authToken, education) => {
    try {
      const response = await fetch(`${baseUrl}/educations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(education),
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

  const updateEducationById = async (authToken, id, education) => {
    try {
      const response = await fetch(`${baseUrl}/educations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(education),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const educationRes = await response.json();
      return educationRes;
    } catch (error) {
      throw error;
    }
  };

  const deleteEducationById = async (authToken, id, education) => {
    try {
      const response = await fetch(`${baseUrl}/educations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(education),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const educationRes = await response.json();
      return educationRes;
    } catch (error) {
      throw error;
    }
  };

  return {
    getAllEducations,
    getEducationById,
    createEducation,
    updateEducationById,
    deleteEducationById,
  };
};

export default EducationApi;