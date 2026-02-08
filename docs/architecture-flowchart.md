# Architecture Flowchart
flowchart TD
    A[Root] --> B[src]
    A --> C[public]
    A --> D[tests]
    A --> E[docs]

    B --> B1[components]
    B --> B2[layouts]
    B --> B3[pages]
    B --> B4[styles]
    B --> B5[lib]
    B --> B6[server]

    B1 --> C1[ui]
    B1 --> C2[structure]

    B2 --> L1[layout]

    B3 --> P1[home]
    B3 --> P2[about]
    B3 --> P3[tech]
    B3 --> P4[projects]
    B3 --> P5[timeline]
    B3 --> P6[services]
    B3 --> P7[contact]

    D --> T1[e2e]
    T1 --> T2[pages]
    T1 --> T3[support]

    E --> Doc1[arch]
    E --> Doc2[comp]
    E --> Doc3[test]
    E --> Doc4[design]
