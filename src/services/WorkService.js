import WorkApi from 'adapters/apis/WorkApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const WorkService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const workApi = WorkApi(baseUrl);
    const tokenStorage = TokenStorage();

    const getAllWorks = async () => {
        const authToken = await tokenStorage.getAuthToken();

        const worksResp = await workApi.getAllWorks();
        const works = worksResp.data;
        return works;
    };

    const getWorkById = async (id) => {
        const authToken = await tokenStorage.getAuthToken();

        const workResp = await workApi.getWorkById(id);
        const work = workResp.data;
        return work;
    };

    const updateWorkById = async (id, work) => {
        const authToken = await tokenStorage.getAuthToken();
        const workResp = await workApi.updateWorkById(authToken, id, work);
        const workRespJson = workResp.data;
        return workRespJson;
    };

    const createWork = async (work) => {
        const authToken = await tokenStorage.getAuthToken();
        const workResp = await workApi.createWork(authToken, work);
        const workRespJson = workResp.data;
        return workRespJson;
    };

    return {
        getAllWorks,
        getWorkById,
        updateWorkById,
        createWork
    };
};

export default WorkService;