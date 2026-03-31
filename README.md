# Practical lesson pz-SOLID  
# Практична реалізація SOLID принципів  

> У цьому занятті отримано практичні навички застосування SOLID принципів під час рефакторингу існуючого коду з метою створити гнучку, масштабовану та чисту архітектуру шляхом застосування SRP, OCP, LSP, ISP та DIP.

---

## What need to do:
* Проведено аналіз вихідного «анти-SOLID» коду  
* Визначено порушення кожного SOLID принципу  
* Виконано рефакторинг згідно з:
  * SRP — Single Responsibility Principle  
  * OCP — Open/Closed Principle  
  * LSP — Liskov Substitution Principle  
  * ISP — Interface Segregation Principle  
  * DIP — Dependency Inversion Principle  
* Створено відповідні інтерфейси й абстракції  
* Усунуті зайві або циклічні залежності  

---

## Acceptance criteria
* Реалізовано на мові Typescript  
* Увесь вихідний код проаналізовано   
* Після рефакторингу:
  * Кожен клас має одну відповідальність (SRP)  
  * Код розширюється через нові класи, а не редагування існуючих (OCP)  
  * Класи-нащадки повністю заміщають базові (LSP)  
  * Інтерфейси невеликі й специфічні (ISP)  
  * Залежності реалізовані через абстракції (DIP)  
* Код структурований, логічний та зрозумілий  
* Звіт оформлений у Markdown (README.md)

## Directory Structure
```

src/
├── S-SRP/
│   ├── original/           Код з порушеннями SRP
│   ├── refactored/         Рефакторений код
│   └── interfaces/         Інтерфейси та абстракції
│
├── O-OCP/
│   ├── original/           Код з порушеннями OCP
│   ├── refactored/         Рефакторений код
│   └── interfaces/         Інтерфейси та абстракції
│
├── L-LSP/
│   ├── original/           Код з порушеннями LSP
│   ├── refactored/         Рефакторений код
│   └── interfaces/         Інтерфейси та абстракції
│
├── I-ISP/
│   ├── original/           Код з порушеннями ISP
│   ├── refactored/         Рефакторений код
│   └── interfaces/         Інтерфейси та абстракції
│
├── D-DIP/
│   ├── original/           Код з порушеннями DIP
│   ├── refactored/         Рефакторений код
│   └── interfaces/         Інтерфейси та абстракції
│
└── examples/
    ├── srpExample.ts       Приклад SRP
    ├── ocpExample.ts       Приклад OCP
    ├── lspExample.ts       Приклад LSP
    ├── ispExample.ts       Приклад ISP
    ├── dipExample.ts       Приклад DIP
    └── index.ts            Запуск всіх прикладів

```

## Порядок запуску

### Встановлення і налаштування

1. **Встановіть залежності:**
   ```bash
   npm install
   ```

2. **Перевірте, що TypeScript встановлений:**
   ```bash
   npx tsc --version
   ```

### Запуск прикладів

**Для запуску всіх прикладів SOLID принципів:**
```bash
npx ts-node src/examples/index.ts
```

**Для запуску конкретного принципу:**
- SRP: `npx ts-node src/examples/srpExample.ts`
- OCP: `npx ts-node src/examples/ocpExample.ts`
- LSP: `npx ts-node src/examples/lspExample.ts`
- ISP: `npx ts-node src/examples/ispExample.ts`
- DIP: `npx ts-node src/examples/dipExample.ts`

---

## Useful links

[SOLID Principles Explained](https://www.baeldung.com/solid-principles)

[SOLID: The First 5 Principles of Object-Oriented Design](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)

[JavaScript SOLID: Реалізація принципів](https://khalilstemmler.com/articles/solid-principles/)

[Clean Code Concepts Adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

[Dependency Injection in JavaScript](https://javascript.plainenglish.io/dependency-injection-in-javascript-1b82a8101c1a)