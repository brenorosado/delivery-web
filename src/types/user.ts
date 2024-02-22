import { UserRoles } from "./user-roles.enum";

export type User = {
    id: string;
    name: string;
    username: string;
    role: keyof typeof UserRoles;
    deleted: boolean;
    updatedAt: Date;
    updatedBy: string;
    createdAt: Date;
    createdBy: string;
}