import EducationApi from 'adapters/apis/EducationApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const EducationService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const educationApi = EducationApi(baseUrl);
    const tokenStorage = TokenStorage();

    const getAllEducations = async () => {
        const educationsResp = await educationApi.getAllEducations();
        if (educationsResp.status !== 0) {
            throw new Error(educationsResp.message);
        }
        const educations = educationsResp.data;
        return educations;
    };

    const getEducationById = async (id) => {
        const educationResp = await educationApi.getEducationById(id);
        if (educationResp.status !== 0) {
            throw new Error(educationResp.message);
        }
        const education = educationResp.data;
        return education;
    };

    const updateEducationById = async (id, education) => {
        const authToken = await tokenStorage.getAuthToken();
        const educationResp = await educationApi.updateEducationById(authToken, id, education);
        if (educationResp.status !== 0) {
            throw new Error(educationResp.message);
        }
        const educationRespJson = educationResp.data;
        return educationRespJson;
    };

    const createEducation = async (education) => {
        const authToken = await tokenStorage.getAuthToken();
        const educationResp = await educationApi.createEducation(authToken, education);
        if (educationResp.status !== 0) {
            throw new Error(educationResp.message);
        }
        const educationRespJson = educationResp.data;
        return educationRespJson;
    };

    const deleteEducationById = async (id, education) => {
        const authToken = await tokenStorage.getAuthToken();
        const educationResp = await educationApi.deleteEducationById(authToken, id, education);
        if (educationResp.status !== 0) {
            throw new Error(educationResp.message);
        }
        const educationRespJson = educationResp.data;
        return educationRespJson;
    };

    return {
        getAllEducations,
        getEducationById,
        updateEducationById,
        createEducation,
        deleteEducationById
    };
};

export default EducationService;