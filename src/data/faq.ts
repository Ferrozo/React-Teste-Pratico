import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `O ${siteDetails.siteName} é seguro?`,
    answer: 'Com certeza. Utilizamos criptografia avançada para proteger seus dados, e nenhuma informação sensível é compartilhada ou armazenada sem sua permissão. Você também pode ativar autenticação biométrica para maior segurança.',
  },
  {
    question: `Posso usar o ${siteDetails.siteName} em vários dispositivos?`,
    answer: 'Sim! Sua agenda de contatos será sincronizada automaticamente entre celular, tablet e computador, garantindo acesso rápido e seguro em qualquer lugar.',
  },
  {
    question: 'Posso importar contatos de outros lugares?',
    answer: `Claro! O ${siteDetails.siteName} permite importar contatos de outros aplicativos, como WhatsApp, Google Contatos e arquivos CSV.`,
  },
  {
    question: 'Preciso estar online para acessar meus contatos?',
    answer: 'Não. Seus contatos ficam disponíveis mesmo offline. Assim, você pode visualizar e editar informações a qualquer momento, com ou sem internet.',
  },
  {
    question: 'E se eu precisar de ajuda com o app?',
    answer: 'Nossa equipe de suporte está disponível por chat e e-mail. Também oferecemos tutoriais passo a passo dentro do app para tirar dúvidas rapidamente.',
  }
];
