import { Injectable } from '@nestjs/common';
import { AmocrmService } from 'src/services/amocrm.service';
import { ResponseBackend } from 'src/types/respBack';

@Injectable()
export class ApiService {

  constructor(private AmocrmService: AmocrmService) { }


  async getLeadsInfo(query?: string): Promise<ResponseBackend[]> {
    const leads = await this.AmocrmService.getAllLeads(query);

    const resultLeads = leads.map(async (lead) => {
      return {
        name: lead.name,
        price: lead.price,
        responsible_user: await this.AmocrmService.getUser(lead.responsible_user_id),
        status: await this.AmocrmService.getStatus(lead.status_id, lead.pipeline_id),
        created_at: lead.created_at
      }
    })

    return await Promise.all(resultLeads);
  }
}
