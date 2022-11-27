
import axios from "axios";

const axiosSingleton = axios.create({
    baseURL: '/api'
});


export default function useApi(url: string) {

    const getById = (id: number) => axiosSingleton.get(`${url}/${id}`);


    const deleteById = (id: number) => axiosSingleton.delete(`${url}/${id}`);


    const post = (data: unknown) => axiosSingleton.post(url, data);


    const put = (data: unknown) => axiosSingleton.put(url, data);

    return {
        getById,
        deleteById,
        post,
        put,
    }
}
