export interface ResponseStatus {
    id:           number;
    name:         string;
    sort:         number;
    is_editable:  boolean;
    pipeline_id:  number;
    color:        string;
    type:         number;
    account_id:   number;
    _links:       Links;
    descriptions: Description[];
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Description {
    account_id:  number;
    created_at:  Date;
    created_by:  number;
    description: string;
    id:          number;
    level:       string;
    pipeline_id: number;
    status_id:   number;
    updated_at:  Date;
    updated_by:  number | null;
}