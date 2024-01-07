export type ProjectsModel = {
    id: number;
    name: string;
    description: string;
    images: string[];
    link: string;
    language: {
        title: string;
        image: string;
    };
}