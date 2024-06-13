export interface ResponseUsers {
  id: number
  name: string
  email: string
  lang: string
  rights: Rights
  _links: Links
}

export interface Rights {
  leads: Leads
  contacts: Contacts
  companies: Companies
  tasks: Tasks
  mail_access: boolean
  catalog_access: boolean
  status_rights: StatusRight[]
  is_admin: boolean
  is_free: boolean
  is_active: boolean
  group_id: any
  role_id: any
}

export interface Leads {
  view: string
  edit: string
  add: string
  delete: string
  export: string
}

export interface Contacts {
  view: string
  edit: string
  add: string
  delete: string
  export: string
}

export interface Companies {
  view: string
  edit: string
  add: string
  delete: string
  export: string
}

export interface Tasks {
  edit: string
  delete: string
}

export interface StatusRight {
  entity_type: string
  pipeline_id: number
  status_id: number
  rights: Rights2
}

export interface Rights2 {
  view: string
  edit: string
  delete: string
  export?: string
}

export interface Links {
  self: Self
}

export interface Self {
  href: string
}
