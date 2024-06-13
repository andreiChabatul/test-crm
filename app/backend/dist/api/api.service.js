"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const amocrm_service_1 = require("../services/amocrm.service");
let ApiService = class ApiService {
    constructor(AmocrmService) {
        this.AmocrmService = AmocrmService;
    }
    async getLeadsInfo(query) {
        const leads = await this.AmocrmService.getAllLeads(query);
        const resultLeads = leads.map(async (lead) => {
            return {
                name: lead.name,
                price: lead.price,
                responsible_user: await this.AmocrmService.getUser(lead.responsible_user_id),
                status: await this.AmocrmService.getStatus(lead.status_id, lead.pipeline_id),
                created_at: lead.created_at
            };
        });
        return await Promise.all(resultLeads);
    }
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [amocrm_service_1.AmocrmService])
], ApiService);
//# sourceMappingURL=api.service.js.map