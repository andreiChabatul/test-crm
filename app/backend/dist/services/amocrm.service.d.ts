import { Lead } from 'src/types/leads';
import { ResponseStatusBack, ResponseUsersBack } from 'src/types/respBack';
export declare class AmocrmService {
    private basic_path;
    private client;
    getAllLeads(query?: string): Promise<Lead[]>;
    getStatus(status_id: number, pipeline_id: number): Promise<ResponseStatusBack>;
    getUser(id: number): Promise<ResponseUsersBack>;
    getContacts(): Promise<void>;
}
