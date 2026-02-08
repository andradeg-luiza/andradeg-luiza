# Architecture Flowchart

```mermaid
flowchart TD

    %% ROOT
    A[Project Root] --> B[src/]
    A --> C[public/]
    A --> D[tests/]
    A --> E[docs/]
    A --> F[CHANGELOG.md]
    A --> G[CONTRIBUTING.md]
    A --> H[README.md]

    %% SRC
    B --> B1[components/]
    B --> B2[layouts/]
    B --> B3[pages/]
    B --> B4[styles/]
    B --> B5[lib/]
    B --> B6[server/]

    %% COMPONENTS
    B1 --> C1[UI Components\nCard, SectionTitle,\nResponsiveGrid, Avatar, Button]
    B1 --> C2[Structural Components\nHeader, Footer]

    %% LAYOUTS
    B2 --> L1[BaseLayout.astro]

    %% PAGES
    B3 --> P1[Home]
    B3 --> P2[About]
    B3 --> P3[Technologies]
    B3 --> P4[Projects]
    B3 --> P5[Timeline]
    B3 --> P6[Services]
    B3 --> P7[Contact]

    %% STYLES
    B4 --> S1[global.css]
    B4 --> S2[Tailwind Config]

    %% LIB
    B5 --> L2[Utilities & Helpers]

    %% SERVER (future)
    B6 --> Srv1[API Routes\n(Future 2.x)]

    %% PUBLIC
    C --> Cpub1[Static Assets\nImages, Icons, Scripts]

    %% TESTS
    D --> T1[e2e/]
    T1 --> T2[Page Objects]
    T1 --> T3[Support Utilities]

    %% DOCS
    E --> Doc1[architecture.md]
    E --> Doc2[components.md]
    E --> Doc3[testing.md]
    E --> Doc4[design-system.md]

    %% RENDERING FLOW
    P1 --> L1
    P2 --> L1
    P3 --> L1
    P4 --> L1
    P5 --> L1
    P6 --> L1
    P7 --> L1

    L1 --> C1
    L1 --> C2
    L1 --> S1

    %% THEME SYSTEM
    Cpub1 --> Theme[theme.js\nDark/Light Mode]

```
