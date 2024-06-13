export interface ResponseBackend {
    name: string;
    price: number;
    responsible_user: ResponseUsersBack;
    status: ResponseStatusBack;
    created_at: number;
}
export interface ResponseStatusBack {
    name: string;
    color: string;
}
export interface ResponseUsersBack {
    name: string;
    email: string;
}
