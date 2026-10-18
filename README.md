# Florida Pool Co.

Site em React, TypeScript e Next.js (App Router), convertido de `example/index.html`, preservando o conteúdo, as imagens e os estilos da referência.

## Executar

```bash
npm install
npm run dev
```

Acesse [localhost:3000](http://localhost:3000).

```bash
npm run lint
npm test
npx tsc --noEmit
npm run build
npm start
```

## Rotas

| Página | Rota |
| --- | --- |
| Início | `/` |
| Serviços | `/services` |
| Limpeza semanal | `/weekly` |
| Recuperação de piscinas verdes | `/green` |
| Reparo de equipamentos | `/equipment` |
| Reforma de piscinas | `/remodeling` |
| Galeria de piscinas | `/gallery` |
| Áreas atendidas | `/areas` |
| Coral Springs | `/coral-springs` |
| Boca Raton | `/boca-raton` |
| Deerfield Beach | `/deerfield` |
| Lighthouse Point | `/lighthouse` |
| Parkland | `/parkland` |
| Fort Lauderdale | `/fort-lauderdale` |
| Sobre | `/about` |
| Avaliações | `/reviews` |
| Contato | `/contact` |

Cada página possui seu próprio `app/.../page.tsx`. O layout raiz compartilha o cabeçalho, o rodapé, a barra móvel de contato e os dados estruturados da empresa. Os componentes interativos estão em `components/`: menu móvel, acordeões e formulários. Os ícones são compartilhados em `components/icon.tsx`, e as imagens extraídas do HTML estão em `public/images/`.

## Formulários e Resend

Os três formulários enviam para `POST /api/contact`, que valida os dados e envia uma notificação à equipe pela [API do Resend](https://resend.com/docs/api-reference/emails/send-email). A resposta de sucesso só é retornada depois de o provedor aceitar o envio. O endereço informado pelo visitante é usado em `reply_to`, quando preenchido.

Configure no `.env` local e nas variáveis do ambiente de hospedagem:

```dotenv
RESEND_API_KEY=sua_chave_do_resend
RESEND_FROM="Florida Pool Co. <remetente@seu-dominio.com>"
# Opcional: por padrão, as solicitações vão para contact@floridapoolco.com.
RESEND_TO=contact@floridapoolco.com
```

`RESEND_FROM` deve usar um remetente autorizado no Resend. As credenciais ficam no servidor e os arquivos `.env` são ignorados pelo Git. Reinicie o servidor após alterar as variáveis.

O endpoint preserva `source`, `consent`, `website` (honeypot) e `requestId`. Os reenvios usam a mesma chave de idempotência para evitar notificações duplicadas. Há validação dos campos, limite de tamanho e timeout; erros do provedor não expõem credenciais ou dados dos clientes.

`npm test` cobre os três formulários, destinatário configurável, dados inválidos, spam, reenvios, configuração ausente e falhas do provedor. Os testes interceptam o envio e não fazem chamadas reais ao Resend.

As fontes originais são carregadas do Google Fonts no navegador; o build não depende de baixá-las.
# Florida-Pool-Website
