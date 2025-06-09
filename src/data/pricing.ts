import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: 'Pessoal',
    price: 0,
    features: [
      'Até 100 contatos salvos',
      'Backup na nuvem limitado',
      'Importação de contatos do telefone',
      'Acesso offline',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Profissional',
    price: 4900, // valor em Kz ou outra moeda se quiseres
    features: [
      'Até 5.000 contatos',
      'Sincronização entre dispositivos',
      'Etiquetas e favoritos personalizados',
      'Busca avançada por filtros',
      'Backup automático na nuvem',
      'Suporte prioritário por e-mail e WhatsApp',
    ],
  },
  {
    name: 'Empresarial',
    price: 'Sob consulta',
    features: [
      'Contatos ilimitados',
      'Gestão de múltiplos usuários',
      'Sincronização com CRMs externos',
      'Integrações personalizadas',
      'Treinamento e onboarding da equipe',
      'Suporte 24/7 dedicado',
      'Relatórios e exportação de dados',
    ],
  },
];
