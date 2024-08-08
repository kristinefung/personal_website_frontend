
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

  return {
    getAllEnquiries,
    getEnquiryById,
  };
};

export default EnquiryApi;