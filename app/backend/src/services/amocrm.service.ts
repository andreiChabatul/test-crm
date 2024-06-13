import { Client } from 'amocrm-js'
import { Lead, ResponseLead } from 'src/types/leads';
import { IAPIResponse } from 'amocrm-js/dist/interfaces/common';
import { ResponseStatus } from 'src/types/status';
import { ResponseStatusBack, ResponseUsersBack } from 'src/types/respBack';
import { ResponseUsers } from 'src/types/users';

export class AmocrmService {

  private basic_path = '/api/v4/'
  private client = new Client({
    domain: process.env.DOMAIN,
    auth: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      bearer: process.env.TOKEN,
    },
  });

  async getAllLeads(query?: string): Promise<Lead[]> {
    const response: IAPIResponse<ResponseLead> = await this.client.request.get(
      `${this.basic_path}leads`,
      {
        query
      });
    return response.data._embedded ? response.data._embedded.leads : [];
  }

  async getStatus(status_id: number, pipeline_id: number): Promise<ResponseStatusBack> {
    const response: IAPIResponse<ResponseStatus> = await this.client.request.get(`${this.basic_path}leads/pipelines/${pipeline_id}/statuses/${status_id}`);
    const data = response.data;
    return { name: data.name, color: data.color };
  }

  async getUser(id: number): Promise<ResponseUsersBack> {
    const response: IAPIResponse<ResponseUsers> = await this.client.request.get(`${this.basic_path}users/${id}`);
    const data = response.data;
    
    return { name: data.name, email: data.email };
  }

  async getContacts(): Promise<void> {
    const response = await this.client.request.get(`${this.basic_path}contacts`);
   
    console.log(response.data['_embedded'])


  }




}
