export interface user {
    uid: string;
    email: string;
    name: string;
    lastLogin?: number;
    photoUrl?: string;
    trusted?: boolean;
    displayName?: string;
}
