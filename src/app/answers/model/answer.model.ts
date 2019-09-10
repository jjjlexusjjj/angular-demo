export interface Answer {
    id: number;
    title: string;
    image?: string;
    description?: string;
    code?: string;
    tags?: string[];
    links?: string[];
    createdDate?: Date;
    modifiedDate?: Date;
}
