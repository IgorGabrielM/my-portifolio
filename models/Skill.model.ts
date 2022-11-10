export type SkillModel = {
    id: number;
    title: string;
    description: string;
    color: string;
    image: string;
    lastProject: {
        name: string;
        description: string;
        image: string;
        link: string;
    }
}