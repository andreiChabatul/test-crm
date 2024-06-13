import { ApiService } from './api.service';
import { ResponseBackend } from 'src/types/respBack';
export declare class ApiController {
    private readonly apiService;
    constructor(apiService: ApiService);
    getLeads(query: {
        query: string;
    }): Promise<ResponseBackend[]>;
}
