import { AmocrmService } from 'src/services/amocrm.service';
import { ResponseBackend } from 'src/types/respBack';
export declare class ApiService {
    private AmocrmService;
    constructor(AmocrmService: AmocrmService);
    getLeadsInfo(query?: string): Promise<ResponseBackend[]>;
}
