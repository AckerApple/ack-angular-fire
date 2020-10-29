export interface user {
    uid: string;
    email: string;
    name?: string;
    displayName: string;
    lastLogin?: number;
    photoUrl?: string;
    trusted?: boolean;
    roles?: string[];
}
