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