import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { ResponseBackend } from 'src/types/respBack';


@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService) { }

  @Get('/leads')
  async getLeads(@Query() query: {query:string}): Promise<ResponseBackend[]> {
    return await this.apiService.getLeadsInfo(query.query);
  }
}
