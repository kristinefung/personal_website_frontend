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

    return {
        getAllWorks,
        getWorkById
    };
};

export default WorkService;