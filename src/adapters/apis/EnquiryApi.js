
const EnquiryApi = (baseUrl) => {

  const getAllEnquiries = async (authToken) => {
    try {
      const response = await fetch(`${baseUrl}/enquiries`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const enquiries = await response.json();
      return enquiries;
    } catch (error) {
      throw error;
    }
  };

  const getEnquiryById = async (authToken, id) => {
    try {
      const response = await fetch(`${baseUrl}/enquiries/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const enquiry = await response.json();
      return enquiry;
    } catch (error) {
      throw error;
    }
  };

  const createEnquiry = async (enquiry) => {
    try {
      const response = await fetch(`${baseUrl}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(enquiry),
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

  const deleteEnquiryById = async (authToken, id, enquiry) => {
    try {
      const response = await fetch(`${baseUrl}/enquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const enquiryRes = await response.json();
      return enquiryRes;
    } catch (error) {
      throw error;
    }
  };

  const updateEnquiryById = async (authToken, id, enquiry) => {
    try {
      const response = await fetch(`${baseUrl}/enquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(enquiry),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const enquiryRes = await response.json();
      return enquiryRes;
    } catch (error) {
      throw error;
    }
  };

  return {
    getAllEnquiries,
    getEnquiryById,
    createEnquiry,
    deleteEnquiryById,
    updateEnquiryById
  };
};

export default EnquiryApi;