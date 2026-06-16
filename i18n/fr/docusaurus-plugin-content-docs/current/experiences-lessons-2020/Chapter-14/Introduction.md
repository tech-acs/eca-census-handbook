---
sidebar_position: 1
hide_title: true
---









## Introduction

Une enquête post-recensement (EPR) est une enquête menée dans un échantillon de zones de dénombrement (ZD) peu après la fin du recensement. L'objectif principal d'une EPR est d'évaluer la couverture du recensement, c'est-à-dire d'estimer le nombre de résidents habituels qui ont été omis ou comptés deux fois dans le recensement. L'enquête post-recensement peut également être utilisée afin de vérifier l'exactitude des réponses à certaines questions clés du recensement. Les chiffres du recensement peuvent être ajustés ou non en fonction des résultats de l'analyse de l'enquête post-recensement, mais dans tous les cas, les estimations de la population réelle doivent être prises en compte dans les projections démographiques ultérieures, afin de les rendre plus précises. Enfin, les enseignements tirés de l'EPR peuvent contribuer à améliorer la conception des futurs recensements et enquêtes.

Toutefois, si une EPR bien menée fournit des informations précieuses sur la qualité de la couverture et de l'exactitude du recensement, lorsqu'elle n'est pas correctement planifiée, financée et dotée en personnel, en tant que partie intégrante des opérations de recensement, l'EPR risque de devenir un gaspillage de ressources. Si les résultats ne sont pas utilisés, par exemple parce que les hypothèses nécessaires concernant l'indépendance et la qualité de l'appariement ne sont pas remplies ou parce que les estimations sont trop incertaines, le temps et les ressources financières consacrés à l'EPR auraient peut-être été mieux utilisés ailleurs, par exemple en vue d'améliorer la qualité du recensement. Si une EPR doit être menée, ses objectifs doivent être clairs dès le départ en ce qui concerne sa finalité et la manière dont elle s'intègre dans la conception statistique globale et le plan d'analyse du recensement (voir [P&R ONU, Rev 4, paragraphe 4.119 à 4.126)](https://unstats.un.org/unsd/publication/SeriesM/Series_M67Rev4en.pdf#page=299)

### EPR à l'ère non numérique par rapport à l'ère numérique

Dans un recensement non numérique, les données sont collectées sur des formulaires papier et l'étape essentielle consistant à faire correspondre les enregistrements du recensement avec ceux de l'EPR est effectuée manuellement, ce qui prend beaucoup de temps, généralement plusieurs mois. Toutefois, dans un recensement numérique, les données seront collectées par voie électronique, probablement à l'aide d'un dispositif d'entretien individuel assisté par ordinateur (CAPI) similaire à celui utilisé lors du dénombrement du recensement. Diverses techniques d'appariement automatique peuvent être appliquées afin de faire correspondre les données, ce qui permet de gagner un temps considérable et d'accélérer la publication des résultats du recensement. La taille de l'équipe administrative chargée de l'appariement peut également être réduite, ce qui permet de réaliser des économies.

Dans le cadre d'un recensement numérique, plusieurs options peuvent être proposées en vue de remplir le questionnaire, par exemple le CAPI ou l'entretien assisté par ordinateur sur Internet (CAWI). Cette démarche peut entraîner davantage de cas de surdéclaration que dans un recensement non numérique si les personnes répondent en utilisant plusieurs méthodes. Les données de l'EPR peuvent être utilisées afin de détecter et d'analyser les réponses en double dans les ZD de l'EPR et ainsi estimer l'ampleur du surdénombrement dans le recensement.

L'analyse de l'EPR peut être effectuée à l'aide d'Excel, de Stata ou d'autres logiciels propriétaires, ou à l'aide de Python ou d'autres solutions libres. Les techniques de rééchantillonnage aléatoire (bootstrap) peuvent être utilisées afin de fournir des estimations de variance autour des estimations de population.

La décision la plus importante concernant l'EPR lors d'un recensement numérique consiste à déterminer si une EPR est nécessaire et rentable. D'autres méthodes d'assurance qualité, telles que l'utilisation de registres administratifs comme élément de comparaison aux chiffres du recensement, peuvent être envisagées. Voir les [P&R de l'ONU, Rév. 4, par](https://unstats.un.org/unsd/publication/SeriesM/Series_M67Rev4en.pdf#page=267).Paragraphes [3.57 à 3.574](https://unstats.un.org/unsd/publication/SeriesM/Series_M67Rev4en.pdf#page=267) pour plus de détails sur les autres méthodes d'évaluation de la qualité du recensement. Le reste du présent chapitre part du principe qu'il a été décidé de mettre en œuvre l'EPR.

### Considérations relatives à une EPR numérique

- L'EPR doit être menée indépendamment du recensement, car on part du principe qu'une personne n'est ni plus ni moins susceptible de répondre à l'EPR selon qu'elle a répondu ou non au recensement. Cette hypothèse sera toujours violée dans une certaine mesure, car une personne qui ne souhaite pas être recensée est peu susceptible de répondre au recensement ou à l'EPR. Toutefois, il convient d'envisager les mesures qui peuvent être prises en vue de garantir que l'indépendance soit maintenue autant que possible et, lorsque l'hypothèse d'indépendance est violée, la manière dont cela peut être pris en compte dans l'analyse ultérieure. Dans le contexte d'un recensement numérique où des méthodes de recensement en ligne CAWI à remplir soi-même sont utilisées, ces méthodes ne devraient pas être utilisées dans l'EPR du recensement. Toutefois, s'il convient de préserver l'indépendance, il importe également de reconnaître qu'il est parfois préférable que les équipes de l'EPR et du recensement travaillent ensemble. Déterminez quand votre équipe EPR et votre équipe de recensement doivent être intégrées et quand elles doivent être séparées afin de préserver l'indépendance de l'EPR. Envisagez, par exemple, de travailler ensemble sur la conception du CAPI afin d'harmoniser les questions et de faciliter l'appariement des données.

- Réfléchissez à la gestion des données et à la manière dont vous allez contrôler les versions des données après les étapes de traitement telles que la suppression des personnes fictives et la résolution des doublons.

- Il est essentiel de faire correspondre les données de l'EPR et les données du recensement avec une très grande précision. Malgré l'utilisation de techniques d'appariement automatique, cela demeure un défi qui nécessite du temps et des ressources. L'appariement des données peut être effectué soit au siège, une fois toutes les données de l'EPR collectées, soit sur le terrain, une fois le recensement terminé dans chaque unité d'enquête de l'EPR. Dans le second cas, il importe de veiller à ce que l'indépendance entre le recensement et l'EPR soit maintenue. Les agents recenseurs de l'EPR ne doivent pas recevoir d'informations issues du recensement concernant les zones dans lesquelles ils travaillent ([P&R ONU, Rev 4, par. 4.123).](https://unstats.un.org/unsd/publication/SeriesM/Series_M67Rev4en.pdf#page=300) Réfléchissez à la meilleure approche à adopter dans votre pays. Consultez les études de cas du [Rwanda](/docs/case-studies/Post-Enumeration%20Survey) et du [Togo](/docs/case-studies/Post-Enumeration%20Survey) en vue d'obtenir des exemples de ces deux approches différentes.

- Réfléchissez aux mesures que vous pouvez prendre afin de faciliter l'appariement des ménages. L'utilisation d'autocollants constitue une bonne solution peu coûteuse (voir l'étude de cas du Rwanda). Une autre solution consiste à collecter les géolocalisations à la porte d'entrée de chaque ménage lors du recensement et du dénombrement de l'EPR (bien que cela puisse s'avérer moins efficace dans les immeubles de grande hauteur ou les complexes où la « porte d'entrée » n'est pas clairement définie).

- Déterminez la taille de la zone géographique dans laquelle vous souhaitez estimer la couverture avant de créer votre échantillon de l'EPR, car cela déterminera la taille de l'échantillon requis. Par exemple, si vous souhaitez établir un rapport sur la couverture à l'échelle nationale, la taille de l'échantillon requise sera plus petite que si vous souhaitez établir un rapport sur la couverture par région. En règle générale, plus la zone sur laquelle vous souhaitez établir votre rapport est petite, plus la taille globale de l'échantillon sera importante.

- Déterminez si des visites de conciliation feront partie de votre plan de l'EPR du recensement et, le cas échéant, la manière de les mener, les informations que vous espérez obtenir et la manière dont ces informations seront utilisées. Les visites de conciliation doivent-elles être effectuées dans toutes les zones de l'EPR ou uniquement dans celles où l'appariement donne des résultats inattendus ?


