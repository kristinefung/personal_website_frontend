import EducationApi from 'adapters/apis/EducationApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const EducationService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const educationApi = EducationApi(baseUrl);
    const tokenStorage = TokenStorage();

    const getAllEducations = async () => {
        const authToken = await tokenStorage.getAuthToken();

        const educationsResp = await educationApi.getAllEducations();
        const educations = educationsResp.data;
        return educations;
    };

    const getEducationById = async (id) => {
        const authToken = await tokenStorage.getAuthToken();

        const educationResp = await educationApi.getEducationById(id);
        const education = educationResp.data;
        return education;
    };

    return {
        getAllEducations,
        getEducationById
    };
};

export default EducationService;