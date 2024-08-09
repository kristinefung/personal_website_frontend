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

    const updateEducationById = async (id, education) => {
        const authToken = await tokenStorage.getAuthToken();
        const educationResp = await educationApi.updateEducationById(authToken, id, education);
        const educationRespJson = educationResp.data;
        return educationRespJson;
    };

    const createEducation = async (education) => {
        const authToken = await tokenStorage.getAuthToken();
        const educationResp = await educationApi.createEducation(authToken, education);
        const educationRespJson = educationResp.data;
        return educationRespJson;
    };

    return {
        getAllEducations,
        getEducationById,
        updateEducationById,
        createEducation
    };
};

export default EducationService;