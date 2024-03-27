import axios from "axios";

const path = "/faq";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-type": "application/json"
    }
});

export const getAll = async () => {
    return http.get(path);
};

export const create = async (data: any) => {
    console.log(data);
    return http.post(
        path,
        data
    );
};

export const remove = async (id: string) => {
    return http.delete(`${path}/${id}`);
}

export const update = async (id: string, data: any) => {
    return http.put(`${path}/${id}`, data);
};