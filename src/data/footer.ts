import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Simplificando o seu dia a dia com soluções tecnologicas",
    quickLinks: [
        {
            text: "Funcionalidades",
            url: "#features"
        },
        {
            text: "Planos",
            url: "#pricing"
        },
        {
            text: "Testemunho",
            url: "#testimonials"
        }
    ],
    email: 'ferrozo.c@gmail.com',
    telephone: '+244 943 786 355',
    socials: {
        github: 'https://github.com/ferrozo',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}