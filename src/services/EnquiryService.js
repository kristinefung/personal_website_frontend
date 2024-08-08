import EnquiryApi from 'adapters/apis/EnquiryApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const EnquiryService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const enquiryApi = EnquiryApi(baseUrl);
    const tokenStorage = TokenStorage();

    const getAllEnquiries = async () => {
        const authToken = await tokenStorage.getAuthToken();

        const enquiriesResp = await enquiryApi.getAllEnquiries(authToken);
        const enquiries = enquiriesResp.data;
        return enquiries;
    };

    const getEnquiryById = async (id) => {
        const authToken = await tokenStorage.getAuthToken();

        const enquiryResp = await enquiryApi.getEnquiryById(authToken, id);
        const enquiry = enquiryResp.data;
        return enquiry;
    };

    return {
        getAllEnquiries,
        getEnquiryById
    };
};

export default EnquiryService;