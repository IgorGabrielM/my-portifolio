export type ProjectsModel = {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    language: {
        title: string;
        image: string;
    };
}