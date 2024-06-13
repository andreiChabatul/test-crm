import { MainTable, ResponseBackend } from "@/types/respBack";
import axios from "axios";

export default new class ApiServices {

    URL_API = 'http://localhost:3000/api/leads';

    async getLeads(query?: string): Promise<MainTable[] | undefined> {
        try {
            const response = await axios.get<ResponseBackend[]>(this.URL_API, {
                params: {
                    query,
                }
            });
            return response.data.map((item, key) => { { return { ...item, key, description: 'Без контакта' } } })

        } catch (error) {
            console.log(error);
        }
    }

}