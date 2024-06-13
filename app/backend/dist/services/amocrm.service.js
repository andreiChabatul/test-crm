"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmocrmService = void 0;
const amocrm_js_1 = require("amocrm-js");
class AmocrmService {
    constructor() {
        this.basic_path = '/api/v4/';
        this.client = new amocrm_js_1.Client({
            domain: process.env.DOMAIN,
            auth: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                redirect_uri: process.env.REDIRECT_URI,
                bearer: process.env.TOKEN,
            },
        });
    }
    async getAllLeads(query) {
        const response = await this.client.request.get(`${this.basic_path}leads`, {
            query
        });
        return response.data._embedded ? response.data._embedded.leads : [];
    }
    async getStatus(status_id, pipeline_id) {
        const response = await this.client.request.get(`${this.basic_path}leads/pipelines/${pipeline_id}/statuses/${status_id}`);
        const data = response.data;
        return { name: data.name, color: data.color };
    }
    async getUser(id) {
        const response = await this.client.request.get(`${this.basic_path}users/${id}`);
        const data = response.data;
        return { name: data.name, email: data.email };
    }
    async getContacts() {
        const response = await this.client.request.get(`${this.basic_path}contacts`);
        console.log(response.data['_embedded']);
    }
}
exports.AmocrmService = AmocrmService;
//# sourceMappingURL=amocrm.service.js.map