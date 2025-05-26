
# Thaynan Barber - Barbearia Premium

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Bem-vindo ao repositório do **Thaynan Barber**, um site moderno e elegante para uma barbearia premium. Este projeto foi construído com Next.js, TypeScript, Tailwind CSS e ShadCN UI, e inclui uma funcionalidade de sugestão de estilo com Inteligência Artificial (IA) usando Genkit.

<!-- (Opcional: Adicione um screenshot ou GIF do projeto aqui) -->
<!-- Ex: ![Thaynan Barber Screenshot](link_para_seu_screenshot.png) -->

**[Link para a Demo ao Vivo](https://barbershop-site-one.vercel.app/)**

## Sumário
- [Funcionalidades](#funcionalidades)
- [Stack de Tecnologias](#stack-de-tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração](#configuração)
  - [Rodando o Servidor de Desenvolvimento](#rodando-o-servidor-de-desenvolvimento)
- [Build para Produção](#build-para-produção)
- [Deployment](#deployment)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

## Funcionalidades

*   Interface moderna e responsiva, adaptável a todos os dispositivos.
*   Páginas principais: Home, Sobre Nós, Serviços, Galeria, Sugestão de Estilo com IA, e Contato.
*   Conteúdo dinâmico (serviços, membros da equipe, depoimentos) gerenciado através de constantes para fácil atualização.
*   Integração com Calendly para agendamentos online.
*   Funcionalidade "Clique para Conversar" do WhatsApp.
*   Mapa interativo do Google Maps para fácil localização.
*   Sistema de sugestão de estilo com IA, utilizando fotos enviadas pelo usuário e Genkit (Gemini).
*   Galeria de imagens com funcionalidade de lightbox.

## Stack de Tecnologias

*   **Framework**: [Next.js](https://nextjs.org/) (utilizando o App Router)
*   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI**: [ShadCN UI](https://ui.shadcn.com/)
*   **Ícones**: [Lucide React](https://lucide.dev/)
*   **Funcionalidades de IA**: [Genkit](https://firebase.google.com/docs/genkit) (com Google AI - Gemini)
*   **Linting/Formatting**: ESLint e Prettier (configuração padrão para projetos Next.js)

## Estrutura do Projeto

*   `src/app/`: Contém todas as páginas e layouts (Next.js App Router).
*   `src/components/`: Componentes UI reutilizáveis, organizados em subpastas (`ui`, `common`, `layout`, `sections`, `forms`).
*   `src/lib/`: Funções utilitárias (`utils.ts`), definições de tipos (`types.ts`), e constantes do site (`constants.ts`).
*   `src/ai/`: Fluxos Genkit e configurações para as funcionalidades de IA.
*   `public/`: Assets estáticos como imagens e fontes.
*   `.env`: Arquivo para variáveis de ambiente (NÃO versionado).
*   `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`: Arquivos de configuração principais.

## Começando

Siga estas instruções para obter uma cópia do projeto rodando na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (v18.x ou superior recomendado)
*   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), ou [pnpm](https://pnpm.io/) (gerenciador de pacotes)
*   Acesso ao [Google Cloud Console](https://console.cloud.google.com/) para configurar a API Key para as funcionalidades de IA.

### Configuração

1.  **Clone o repositório:**
    No GitHub, você pode clonar o repositório usando a URL fornecida na página principal do repositório.
    ```bash
    git clone https://github.com/SEU_USUARIO/NOME_DO_SEU_REPOSITORIO.git 
    cd NOME_DO_SEU_REPOSITORIO
    ```
    (Substitua `SEU_USUARIO/NOME_DO_SEU_REPOSITORIO` pelo caminho correto do seu repositório)

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    # yarn install
    # ou
    # pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do seu projeto. Este arquivo é ignorado pelo Git (graças ao `.gitignore`) e é usado para armazenar chaves de API e outras variáveis sensíveis.
    Copie o conteúdo de `.env.example` (se existir, caso contrário, crie o arquivo `.env` com o seguinte conteúdo):

    ```env
    # .env

    # Necessário para a funcionalidade de Sugestão de Estilo com IA
    # Obtenha sua chave de API no Google Cloud Console.
    # Certifique-se de que a API "Vertex AI" ou "Generative Language" esteja ativa no seu projeto Google Cloud.
    GOOGLE_API_KEY=SUA_CHAVE_DE_API_DO_GOOGLE_AQUI
    ```
    **Importante:** Nunca comite seu arquivo `.env` para o repositório. O arquivo `.gitignore` já está configurado para ignorá-lo.

### Rodando o Servidor de Desenvolvimento

Para rodar o projeto localmente, você precisará de dois terminais abertos.

1.  **Terminal 1: Inicie o servidor de desenvolvimento do Genkit (para funcionalidades de IA):**
    ```bash
    npm run genkit:dev
    ```
    Ou, para recarregamento automático ao modificar arquivos na pasta `src/ai/`:
    ```bash
    npm run genkit:watch
    ```
    Isso geralmente inicia o servidor Genkit na porta `3400` (API) e `4000` (Inspector).

2.  **Terminal 2: Inicie o servidor de desenvolvimento do Next.js:**
    ```bash
    npm run dev
    ```
    Isso iniciará a aplicação Next.js, geralmente em `http://localhost:9002` (conforme definido em `package.json`).

Abra [http://localhost:9002](http://localhost:9002) (ou a porta configurada) no seu navegador para ver a aplicação.

## Build para Produção

Para criar uma versão otimizada do site para produção, execute:
```bash
npm run build
```
Os arquivos de build estarão na pasta `.next`.

## Deployment

Esta aplicação Next.js é ideal para deploy em plataformas como:

*   **Vercel**: (Recomendado) Plataforma dos criadores do Next.js, oferece deploys contínuos, CDN global e funções serverless otimizadas.
*   **Netlify**: Outra excelente opção para aplicações Jamstack.
*   Outras plataformas que suportam aplicações Node.js e Next.js.

Geralmente, você conectará seu repositório GitHub à plataforma de sua escolha, e ela cuidará do processo de build e deploy. Certifique-se de configurar as variáveis de ambiente (como `GOOGLE_API_KEY`) na sua plataforma de deploy.

## Como Contribuir

Contribuições são bem-vindas! Se você tem sugestões de melhorias ou encontrou algum bug:
1.  Faça um Fork do projeto.
2.  Crie uma nova Branch (`git checkout -b feature/sua-feature-incrivel`).
3.  Faça commit das suas alterações (`git commit -m 'Adiciona alguma feature incrível'`).
4.  Faça Push para a Branch (`git push origin feature/sua-feature-incrivel`).
5.  Abra um Pull Request.

(Adicione diretrizes mais específicas de contribuição se necessário, como padrões de codificação, etc.)

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE.md` para mais detalhes (se você adicionar um arquivo LICENSE.md).
Caso não exista um arquivo `LICENSE.md`, considera-se o uso da licença MIT como padrão para este projeto.

---
Obrigado por usar o Firebase Studio!
