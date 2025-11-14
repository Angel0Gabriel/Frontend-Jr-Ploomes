# Sistema de Formulários Dinâmicos

Sistema de formulários dinâmicos desenvolvido em React + TypeScript que renderiza formulários complexos baseados em configurações de dados.

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20 ou superior instalado
- npm (vem com Node.js)

### Passos

1. **Instalar dependências:**

```bash
npm install
```

2. **Executar em modo desenvolvimento:**

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:5173** (porta padrão do Vite)

## 📦 Executando com Docker

Para executar com Docker, consulte o arquivo [DOCKER.md](./DOCKER.md)

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── DynamicForm/    # Formulário dinâmico
│   ├── FormField/      # Campo de formulário
│   ├── FormSection/    # Seção de formulário
│   └── Modal/          # Modal
├── constants/          # Dados e constantes
│   └── formData.ts
├── types/              # Definições TypeScript
│   └── index.ts
├── styles/             # Estilos globais
│   ├── index.css
│   └── App.css
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🎯 Funcionalidades

- ✅ Formulários exibidos em modal
- ✅ Fechar modal clicando no botão X ou no fundo escurecido
- ✅ Tela inicial com botão para cada formulário
- ✅ Botão "Salvar" que faz `console.log`, limpa dados e fecha modal
- ✅ Suporte a seções recursivas (subseções)
- ✅ Proteção contra loops infinitos
- ✅ Sistema de grid responsivo (1, 2 ou 3 colunas)
- ✅ Diferentes tipos de campos (texto, número, checkbox, data, CEP, telefone)
