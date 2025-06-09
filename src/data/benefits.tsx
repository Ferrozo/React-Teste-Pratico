import { FiBarChart2, FiBriefcase, FiCloud, FiDollarSign, FiLock, FiPhoneCall, FiPieChart, FiSearch, FiSend, FiShield, FiStar, FiTarget, FiTrendingUp, FiUser, FiUsers } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
  {
    title: "Organização Inteligente",
    description: "Mantenha todos os seus contatos organizados de forma simples e eficiente. Nosso sistema inteligente agrupa, filtra e facilita o acesso a qualquer pessoa que você precise.",
    bullets: [
      {
        title: "Agrupamento Automático",
        description: "Classifique contatos por categorias como trabalho, família ou favoritos sem esforço.",
        icon: <FiBarChart2 size={26} />
      },
      {
        title: "Busca Instantânea",
        description: "Encontre qualquer contato rapidamente com nossa pesquisa inteligente.",
        icon: <FiSearch size={26} />
      },
      {
        title: "Favoritos e Tags",
        description: "Marque os contatos mais importantes para acesso rápido e organizado.",
        icon: <FiStar size={26} />
      }
    ],
    imageSrc: "/images/mockup-1.png"
  },
  {
    title: "Conecte-se Facilmente",
    description: "A comunicação nunca foi tão rápida. Ligue, envie mensagens ou compartilhe informações com apenas um toque.",
    bullets: [
      {
        title: "Chamadas Diretas",
        description: "Inicie ligações diretamente do app, sem complicações.",
        icon: <FiPhoneCall size={26} />
      },
      {
        title: "Compartilhamento de Contatos",
        description: "Envie informações de contatos de forma rápida e segura.",
        icon: <FiSend size={26} />
      },
      {
        title: "Integração com Redes Sociais",
        description: "Conecte seus contatos com perfis sociais e mantenha tudo centralizado.",
        icon: <FiUsers size={26} />
      }
    ],
    imageSrc: "/images/mockup-2.png"
  },
  {
    title: "Segurança de Dados",
    description: "Protegemos sua agenda como se fosse nossa. Seus contatos estão seguros com nossa infraestrutura moderna.",
    bullets: [
      {
        title: "Criptografia de Ponta a Ponta",
        description: "Todos os dados armazenados são protegidos com a mais alta segurança.",
        icon: <FiLock size={26} />
      },
      {
        title: "Autenticação Biométrica",
        description: "Acesso seguro com impressão digital ou reconhecimento facial.",
        icon: <FiUser size={26} />
      },
      {
        title: "Backup na Nuvem",
        description: "Nunca perca um contato. Sincronização segura com a nuvem.",
        icon: <FiCloud size={26} />
      }
    ],
    imageSrc: "/images/mockup-3.png"
  }
]
