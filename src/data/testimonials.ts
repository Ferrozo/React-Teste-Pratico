import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: 'Ivandro Martinho',
    role: 'Designer Gráfico',
    message: `${siteDetails.siteName} facilitou muito a organização dos meus contatos profissionais. Agora encontro qualquer cliente ou parceiro com apenas alguns toques.`,
    avatar: '/images/testimonial-1.webp',
  },
  {
    name: 'Manuela Jorge',
    role: 'Responsável pelo Economato',
    message: `Graças ao ${siteDetails.siteName}, conseguimos centralizar todos os contatos dos nossos fornecedores e fazer gestão mais eficiente no dia a dia.`,
    avatar: '/images/testimonial-2.webp',
  },
  {
    name: 'Eduarda Matias',
    role: 'Gestor de RH',
    message: `${siteDetails.siteName} tem sido essencial para manter o banco de contatos da nossa equipa atualizado e acessível a todos os departamentos. Simples, rápido e seguro.`,
    avatar: '/images/testimonial-3.webp',
  },
];
