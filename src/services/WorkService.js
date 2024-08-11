import WorkApi from 'adapters/apis/WorkApi';
import TokenStorage from 'adapters/local-storages/TokenStorage';

const WorkService = () => {
    const baseUrl = 'http://localhost:4000/api';
    const workApi = WorkApi(baseUrl);
    const tokenStorage = TokenStorage();

    const getAllWorks = async () => {
        const worksResp = await workApi.getAllWorks();
        if (worksResp.status !== 0) {
            throw new Error(worksResp.message);
        }
        const works = worksResp.data;
        return works;
    };

    const getWorkById = async (id) => {
        const workResp = await workApi.getWorkById(id);

        if (workResp.status !== 0) {
            throw new Error(workResp.message);
        }
        const work = workResp.data;
        return work;
    };

    const updateWorkById = async (id, work) => {
        const authToken = await tokenStorage.getAuthToken();
        const workResp = await workApi.updateWorkById(authToken, id, work);
        if (workResp.status !== 0) {
            throw new Error(workResp.message);
        }
        return workResp.data;
    };

    const createWork = async (work) => {
        const authToken = await tokenStorage.getAuthToken();
        const workResp = await workApi.createWork(authToken, work);
        if (workResp.status !== 0) {
            return { data: null, errMsg: workResp.message }
        }
        return { data: workResp.data, errMsg: null };
    };

    const deleteWorkById = async (id, work) => {
        const authToken = await tokenStorage.getAuthToken();
        const workResp = await workApi.deleteWorkById(authToken, id, work);
        if (workResp.status !== 0) {
            throw new Error(workResp.message);
        }
        const workRespJson = workResp.data;
        return workRespJson;
    };

    return {
        getAllWorks,
        getWorkById,
        updateWorkById,
        createWork,
        deleteWorkById
    };
};

export default WorkService;