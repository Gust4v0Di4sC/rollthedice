# 🎲 Roll the dice

Aplicação web para rolagem de dados de RPG com interface intuitiva e histórico de rolagens.

## 📋 Sobre o Projeto

Sistema completo de rolagem de dados para jogos de RPG, permitindo selecionar diferentes tipos de dados (D4, D6, D8, D10, D12, D20, D100), configurar quantidade e modificadores, além de manter um histórico visual de todas as rolagens realizadas.

## ✨ Funcionalidades

- 🎯 **7 tipos de dados** - D4, D6, D8, D10, D12, D20 e D100
- 🔢 **Quantidade configurável** - Role múltiplos dados simultaneamente
- ➕ **Modificadores** - Adicione ou subtraia valores do resultado
- 📊 **Histórico completo** - Visualize todas as rolagens com detalhes
- 🎨 **Interface moderna** - Design responsivo com tema escuro
- ⚡ **Animações** - Feedback visual durante as rolagens

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para UI
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **JavaScript** - Lógica de negócio

## 📁 Estrutura do Projeto

```
dice-roller/
├── src/
│   ├── constants/
│   │   └── diceTypes.js          # Configurações dos dados
│   ├── services/
│   │   └── DiceService.js        # Lógica de rolagem
│   ├── hooks/
│   │   └── useRollHistory.js     # Gerenciamento de histórico
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.jsx        # Cabeçalho
│   │   │   ├── DiceTypeSelector.jsx  # Seletor de dados
│   │   │   └── RollButton.jsx    # Botão de rolagem
│   │   ├── roll/
│   │   │   ├── RollControls.jsx  # Controles de quantidade/modificador
│   │   │   └── RollerPanel.jsx   # Painel principal de rolagem
│   │   └── history/
│   │       ├── HistoryItem.jsx   # Item do histórico
│   │       └── HistoryList.jsx   # Lista de histórico
│   └── App.jsx                    # Componente principal
├── public/
│   └── images/
│       └── dice/                  # Imagens dos dados (SVG)
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dice-roller.git

# Entre na pasta
cd dice-roller

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## 📦 Dependências

```bash
npm install react react-dom
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```



## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

- **Camada de Lógica** - `DiceService` para cálculos e rolagens
- **Camada de Estado** - Hooks customizados para gerenciar dados
- **Camada de UI** - Componentes React reutilizáveis e isolados

## 📝 Licença

MIT License - Sinta-se livre para usar este projeto!

## 👨‍💻 Autor

Desenvolvido com ❤️ para a comunidade de RPG

---

⭐ Se gostou do projeto, deixe uma estrela no GitHub!