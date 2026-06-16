---
sidebar_position: 2
hide_title: true
title: Principaux domaines de mise en œuvre dans une EPR numérique
---









##  Principaux domaines de mise en œuvre dans une EPR numérique

La plupart des domaines clés de mise en œuvre de l'EPR seront similaires à ceux du recensement. Toutefois, afin de préserver l'indépendance de l'EPR, ses opérations de collecte et de traitement des données doivent être totalement séparées de celles du recensement. Les notes ci-dessous ne reflètent que les implications de la numérisation du recensement. Des orientations plus générales sur la conduite d'une EPR sont disponibles dans les [Lignes directrices opérationnelles du Secrétariat des Nations Unies relatives aux enquêtes post-recensement](https://unstats.un.org/unsd/demographic/standmeth/handbooks/Manual_PESen.pdf).

### Fixer des objectifs et concevoir le plan d'analyse

Soyez conscient de l'impact potentiel du recensement numérique sur la sous-couverture et la surcouverture, ainsi que sur l'exactitude des réponses. Décidez de quelle manière vous utiliserez l'analyse de l'EPR afin de détecter et de résoudre les problèmes de qualité.

### Conception de l'échantillon 

Les ZD sélectionnées dans le cadre de l'enquête post-recensement ne doivent pas être communiquées aux agents recenseurs ou à l'équipe de gestion du recensement afin que toutes les ZD soient traitées de la même manière pendant le recensement. Soyez conscient des problèmes de stratification. Par exemple, si les personnes répondent via leur propre mécanisme (CAWI), il peut être nécessaire de tenir compte des niveaux d'exclusion numérique et d'adoption du numérique dans différentes zones. Les données administratives peuvent être utilisées afin de faciliter la stratification si vous pouvez identifier les zones susceptibles d'être plus difficiles à recenser, par exemple en raison d'un manque d'accès à Internet.

### Conception du questionnaire et élaboration du CAPI

Veillez à ce que le CAPI de l'EPR recueille toutes les données nécessaires à l'appariement et à l'analyse de l'EPR et qu'il soit harmonisé avec le CAPI du recensement, le cas échéant. Recueillez des informations indiquant si les répondants à l'EPR étaient présents et recensés dans la même zone d'enquête lors du recensement et, dans le cas contraire, où ils ont été recensés lors du recensement.

### Recrutement et formation des enquêteurs 

Une formation adéquate des agents recenseurs du recensement et de l'EPR est essentielle afin de s'assurer qu'ils comprennent bien la manière dont les données sont utilisées dans le cadre de l'appariement et l'importance de saisir avec précision les noms et les dates de naissance. Lorsque les agents recenseurs comprennent l'importance de la cohérence de l'approche et l'impact des erreurs sur le recensement, ils sont plus susceptibles de collecter des données de bonne qualité. Vous pouvez choisir d'utiliser certains des agents recenseurs (de préférence les meilleurs) afin qu'ils travaillent comme agents recenseurs de l'EPR. Dans ce cas, veillez à ce que les agents recenseurs ne travaillent pas dans la même zone d'enquête lors du recensement et de l'EPR, car cela rompt le principe d'indépendance.

### **Dénombrement** 

Les agents recenseurs de l'EPR ne doivent recevoir aucune information recueillie lors du recensement. Le recensement des ménages dans le cadre de l'EPR doit être effectué indépendamment du recensement des ménages dans le cadre du recensement. Si cela est possible, une méthode de recensement différente de celle utilisée lors du recensement doit être utilisée dans le cadre de l'EPR. Toutefois, si le recensement CAPI est utilisé dans les deux cas, l'indépendance peut être maintenue en veillant à ce que les agents recenseurs ne travaillent pas dans les mêmes ZD lors du recensement et de l'EPR. Comme dans le cadre du recensement numérique, des tableaux de bord peuvent être utilisés pendant le recensement de l'EPR. Si l'échantillon de l'EPR comprend des zones d'enquête qui se sont avérées ne contenir aucun ménage lors du recensement, vous pouvez les retirer de l'échantillon et les remplacer par des zones d'enquête de remplacement présentant des caractéristiques similaires (géographie, milieu urbain/rural, difficulté de recensement). Si possible, collectez les variables de latitude et de longitude lors du recensement de chaque ménage.

### Traitement et gestion des données

Les données doivent être transférées du terrain vers un serveur sécurisé. Les versions de données issues de différents processus doivent être conservées à des fins d'audit. Il convient d'effectuer un traitement « Retrait des personnes multiples » (RPM) et « Retrait des réponses multiples » (RRM) afin de signaler les enregistrements erronés et les doublons. Si l'âge ou le sexe sont manquants dans certains enregistrements du recensement ou de l'EPR, il convient de résoudre ce problème à l'aide de règles d'édition ou d'imputation (heuristique ou fondée sur le donateur). Il convient toutefois de noter qu'aux fins de l'appariement, les données doivent être fournies avant toute imputation.

### Projet pilote de l'EPR

Choisissez un échantillon de ZD qui ont également été sélectionnées dans le cadre du projet pilote de recensement afin de tester la méthodologie et la technologie de l'EPR. Veillez à tester la formation des agents recenseurs, l'application CAPI de l'EPR, les tableaux de bord, les mécanismes de transfert de données, le traitement des données et la méthodologie d'appariement.

### Appariement automatique

Grâce aux données électroniques issues du recensement et de l'EPR, des techniques d'appariement automatique peuvent être utilisées afin d'effectuer la plupart des appariements. Une approche déterministe ou fondée sur des règles s'est avérée efficace en matière d'appariement. Dans le cadre de cette approche, une série de clés d'appariement est élaborée, chaque clé d'appariement constituant un ensemble de conditions qu'une paire d'enregistrements doit remplir pour que cette paire soit déclarée comme correspondante. (voir l'[étude de cas](/docs/experiences-lessons-2020/Chapter-14/Selected%20country%20experiences) pour un exemple de clés d'appariement). Des techniques d'*appariement approximatif* automatique, telles que l'utilisation de la distance d'édition de Levenshtein, du score de Jaro-Winkler ou du codage phonétique Soundex, peuvent être utilisées afin de tenir compte des erreurs dans les données, en particulier en ce qui concerne les erreurs dans les noms. Une fonction de « tolérance d'âge » peut également être utilisée afin de tenir compte des petites différences dans l'année de naissance. Voir l'Office national des statistiques du Royaume-Uni (ONS), [<u>Un ensemble de fonctions pour le nettoyage et l'appariement des données du recensement</u>](https://github.com/ONSdigital/pes_match/tree/main) avec les données de l'enquête post-dénombrement pour un exemple de code d'appariement de l'EPR écrit en Python. Des algorithmes d'appariement probabiliste automatique peuvent également être utilisés. Por exemple, l'implémentation [<u>Splink</u>](https://www.gov.uk/government/publications/joined-up-data-in-government-the-future-of-data-linking-methods/splink-mojs-open-source-library-for-probabilistic-record-linkage-at-scale) du ministère britannique de la Justice de l'algorithme d'appariement probabiliste Fellegi-Sunter est disponible gratuitement. Les algorithmes d'appariement peuvent être exécutés sur toutes les données une fois le recensement de l'EPR terminé, ou sur le terrain au fur et à mesure de la collecte des données (voir [l'étude de cas : Togo](/docs/experiences-lessons-2020/Chapter-14/Selected%20country%20experiences)). Cette dernière approche signifie que le rapprochement est effectué immédiatement après le recensement de l'EPR, ce qui est plus efficace, mais il faut veiller à préserver l'indépendance de l'EPR, en ne communiquant aucune information du recensement aux agents recenseurs de l'EPR.

### Appariement administratif

Si la majorité des appariements (entre 70 % et 90 % selon la qualité des données) devraient être effectués automatiquement, il sera néanmoins nécessaire de procéder à un appariement administratif. Une équipe de personnes formées au rapprochement sera chargée d'examiner les appariements potentiels et de décider si les enregistrements correspondent réellement. Le système de recoupement administratif Clerical Resolution Online Widget ([<u>CROW) de l'ONS britannique</u>](https://github.com/ONSdigital/ons-crow) peut être utilisé en vue du recoupement administratif des données du recensement et de l'EPR et est disponible gratuitement. Des rapprochements d'écritures seront nécessaires pour les raisons suivantes :

- Réglage des algorithmes automatiques : à mesure que les clés d'appariement sont élaborées, les paires d'appariements établis sont envoyées à l'équipe administrative en vue d'examen. Si une clé d'appariement s'avère générer de fausses correspondances, elle est alors rendue plus stricte, par exemple en incluant une nouvelle variable, et est réexaminée jusqu'à ce que le nombre de fausses correspondances soit acceptable.

- Résolution des appariements automatiques conflictuels – des conflits surviennent lorsque les algorithmes automatiques font correspondre un enregistrement de l'EPR à deux enregistrements de recensement différents ou vice versa. Cette situation peut se produire lorsqu'il y a des jumeaux de même sexe, un père et un fils portant le même nom, ou simplement parce que des personnes ont des noms et des âges très similaires. Les agents administratifs examinent les enregistrements conflictuels et décident lequel est le bon.

- Examen des correspondances possibles générées par des clés d'appariement non strictes qui produisent un grand nombre de correspondances correctes, mais aussi trop de correspondances erronées pour qu'elles puissent toutes être acceptées automatiquement.

- Examen des personnes non appariées une fois toutes les étapes d'appariement automatique terminées.

- Assurance qualité de l'appariement automatique : des échantillons d'enregistrements correspondants sont examinés afin d'estimer le taux de fausses correspondances, et pour un échantillon d'enregistrements de l'EPR non correspondants, la base de données du recensement est consultée afin de trouver une correspondance et d'estimer le taux de correspondances manquées.

### Rapprochement 

Une fois l'appariement terminé, la plupart des pays effectuent des visites de rapprochement auprès des ZD de l'EPR afin de vérifier le statut des personnes non appariées, par exemple en vue de vérifier si un résident non apparié lors du recensement était un résident habituel de la ZD de l'EPR au moment du recensement et, si tel était le cas, pourquoi il n'a pas été recensé lors de l'EPR. Les résultats du rapprochement n'ont généralement pas d'incidence significative sur les résultats des estimations. Toutefois, les résultats des visites de rapprochement peuvent être utilisés afin de contribuer à comprendre les erreurs éventuelles dans les processus de collecte de données (tant lors du recensement que lors de l'EPR) et donc d'apporter des améliorations aux enquêtes futures. Le rapprochement n'aura de valeur que si vous le réalisez rapidement, dès que des problèmes sont identifiés dans une zone d'enquête. Soyez clair sur ce que vous essayez d'accomplir si vous retournez sur le terrain en vue du rapprochement et sur la manière dont vous allez recueillir les informations et résoudre les cas où les données du recensement, de l'EPR et du rapprochement diffèrent. Si vous disposez de données administratives indiquant la couverture d'une zone d'enquête, vous pouvez les utiliser afin d'assurer la qualité de votre recensement et de votre EPR plutôt que de procéder à un rapprochement.

### Analyse

Une fois que chaque personne figurant dans les données de l'EPR et du recensement (dans les zones d'évaluation de l'EPR) a été classée comme correspondante, incorrectement recensée ou non correspondante, ces informations (la liste d'appariement) sont transmises à l'équipe d'estimation. La liste d'appariement doit également inclure le sexe, l'âge et la zone de dénombrement (ZD) de chaque personne, et indiquer si le lieu est urbain ou rural. Les estimations sont généralement calculées par sexe et par groupe d'âge. Dans le système d'estimation double, les non-réponses dans les zones de l'EPR sont utilisées afin d'estimer les non-réponses dans d'autres zones similaires. Un poids est calculé en divisant le nombre de personnes comptées dans l'EPR par le nombre de personnes comptées à la fois dans le recensement et dans l'EPR. Le nombre de personnes appariées entre le recensement et l'EPR est utilisé comme indicateur relatif aux personnes comptées à la fois dans le recensement et dans l'EPR. Différentes pondérations sont appliquées selon différents groupes démographiques tels que l'âge, le sexe, le type de localité (urbaine ou rurale) et selon différentes zones géographiques. Voir Peter Benton,, [Trout, Catfish and Roach : The Beginner's Guide to Census Population Estimates](https://docslib.org/doc/2577669/trout-catfish-and-roach-the-beginner-s-guide-to-census-population-estimates) pour une explication simple de l'estimation par double système.

Une analyse peut également être effectuée afin d'évaluer l'exactitude des réponses données lors du recensement en comparant les réponses données par la même personne (correspondante) dans les données du recensement et de l'EPR.

L'analyse peut être effectuée à l'aide du code Python ou R ou de méthodes SPSS ou STATA plus traditionnelles. Dans le cas des petits pays, Excel suffit en vue d'une analyse de base. Toutefois, il est plus stable et plus rapide d'utiliser un logiciel ou un langage de programmation. Cette démarche permet également d'utiliser le rééchantillonnage aléatoire (bootstrap) afin de calculer les estimations de variance autour de vos estimations démographiques.

La comparaison des graphiques représentant le rapport âge-sexe et les estimations démographiques avec les données du recensement précédent et, le cas échéant, les données administratives ou les projections démographiques, doit être utilisée afin de vérifier vos estimations et d'identifier les domaines qui nécessitent une enquête plus approfondie.

### Assurance qualité

Identifiez les principales parties prenantes qui utiliseront les données du recensement et pourraient contester les chiffres. Associez ces parties prenantes à l'assurance qualité : sont-elles d'accord avec les estimations ? Si ce n'est pas le cas, disposent-elles de données qui contredisent vos estimations ? Si tel est le cas, pouvez-vous les utiliser dans votre processus d'estimation ?

### Diffusion

Une description de la méthodologie de l'EPR et des résultats de l'analyse de l'EPR doit être publiée afin que les utilisateurs des données du recensement comprennent les limites des résultats du recensement et puissent s'adapter en conséquence. Voir, par exemple, le rapport thématique rédigé par l'Institut national de la statistique du Rwanda : [<u>Rapport thématique :Enquête post-recensement</u>](https://www.statistics.gov.rw/data-sources/censuses/Population-and-Housing-Census/fifth-population-and-housing-census-2022/rphc5-thematic-reports/rphc5-thematic-report-post-enumeration-survey).



