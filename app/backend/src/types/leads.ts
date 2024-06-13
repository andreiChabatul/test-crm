export interface ResponseLead {
    _page:     number;
    _links:    Links;
    _embedded: Embedded;
}

export interface Embedded {
    leads: Lead[];
}

export interface Lead {
    id:                   number;
    name:                 string;
    price:                number;
    responsible_user_id:  number;
    group_id:             number;
    status_id:            number;
    pipeline_id:          number;
    loss_reason_id:       null;
    source_id:            null;
    created_by:           number;
    updated_by:           number;
    created_at:           number;
    updated_at:           number;
    closed_at:            number;
    closest_task_at:      null;
    is_deleted:           boolean;
    custom_fields_values: null;
    score:                null;
    account_id:           number;
    _links:               LeadLinks;
    _embedded:            LeadEmbedded;
}

export interface LeadEmbedded {
    tags:      any[];
    companies: any[];
}

export interface LeadLinks {
    self: First;
}

export interface First {
    href: string;
}

export interface Links {
    self:  First;
    next:  First;
    first: First;
    prev:  First;
}