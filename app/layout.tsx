import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Euller Peixoto - Software Developer',
  description:
    "Hello! I'm Euller, and welcome to my website! I'm an enthusiast in the world of software development, constantly seeking challenges and opportunities to enhance my skills. Currently, I'm pursuing a degree in Software Engineering while leading a project with seven team members",
  keywords:
    'euller, euller peixoto, peixoto euller, euller site, euller peixoto site, euller peixoto website, pagina de euller, pagina de euller peixoto, euller portfolio, euller peixoto portfolio, eule, euler, eule peixoto, euler peixoto, eule peixoto, epeixoto, epeixoto.com, epeixot.com, peixoto.com, epeixoto.com.br, peixoto.com.br,  euler peixoto.com, euller peixoto.com, criar site, programador, freelancer, portfolio pessoal, desenvolvedor web, projetos de programação, web design, criação de sites, desenvolvimento web, consultoria em tecnologia, especialista em web, freelancer de programação, desenvolvimento de aplicativos, back-end, front-end, e-commerce, desenvolvimento de software, soluções tecnológicas, programação customizada, consultor em TI, sistemas web, programação eficiente, soluções digitais, otimização de código, experiência em tecnologia, inovação digital, soluções empresariais, experiência em nuvem, arquitetura de software, desenvolvimento ágil, tecnologias emergentes, Desenvolvimento de sistemas, engenharia de software, programação avançada, UX/UI, design responsivo, segurança da web, análise de dados, integração de sistemas, tecnologia da informação, soluções de software, manutenção de código, automação de processos, desenvolvimento de aplicativos móveis, consultoria em desenvolvimento, estratégias de inovação, tecnologias de ponta, infraestrutura de TI, tecnologias de nuvem, estratégias de mercado digital, análise de mercado, estratégias de negócios online, escalabilidade de sistemas, soluções de armazenamento em nuvem, Criação de sites em Recife, web design em Jaboatão dos Guararapes, desenvolvimento web em Pernambuco, agência digital em Recife, criação de páginas web em Jaboatão, sites responsivos em Pernambuco, agência de marketing digital em Recife, programação web em Jaboatão dos Guararapes, desenvolvimento de sites institucionais em Pernambuco, serviços de design web em Recife, soluções digitais em Jaboatão, desenvolvedores de sites em Pernambuco, otimização de sites em Recife, construção de páginas online em Jaboatão dos Guararapes, agência web em Pernambuco, criação de e-commerce em Recife, desenvolvimento de plataformas web em Jaboatão, consultoria em presença online em Pernambuco',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script src="https://kit.fontawesome.com/4fdf297e79.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
