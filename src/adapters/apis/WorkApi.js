
const WorkApi = (baseUrl) => {

  const getAllWorks = async () => {
    try {
      const response = await fetch(`${baseUrl}/works`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const works = await response.json();
      return works;
    } catch (error) {
      throw error;
    }
  };

  const getWorkById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/works/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const work = await response.json();
      return work;
    } catch (error) {
      throw error;
    }
  };

  const createWork = async (authToken, work) => {
    try {
      const response = await fetch(`${baseUrl}/works`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(work),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const workRes = await response.json();
      return workRes;
    } catch (error) {
      throw error;
    }
  };

  const updateWorkById = async (authToken, id, work) => {
    try {
      const response = await fetch(`${baseUrl}/works/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(work),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const workRes = await response.json();
      return workRes;
    } catch (error) {
      throw error;
    }
  };

  const deleteWorkById = async (authToken, id, work) => {
    try {
      const response = await fetch(`${baseUrl}/works/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(work),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const workRes = await response.json();
      return workRes;
    } catch (error) {
      throw error;
    }
  };

  return {
    getAllWorks,
    getWorkById,
    createWork,
    updateWorkById,
    deleteWorkById,
  };
};

export default WorkApi;