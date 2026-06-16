---
sidebar_position: 2
hide_title: true
---

## Key implementation areas in a digital PES

Many of the key implementation areas in the PES will be similar to the key implementation areas in the census. However, to preserve the independence of the PES, its data collection and processing operations must be completely separate from the census data collection and processing. Notes below are only reflecting on the implications of digitalisation of the census. More general guidance on conducting a PES can be found in the [UN Secretatiat, Post-Enumeration Surveys Operational Guidelines](https://unstats.un.org/unsd/demographic/standmeth/handbooks/Manual_PESen.pdf). 

**Setting objectives and designing the analysis plan**

Be aware of the potential impact of digital census enumeration on under-coverage and over-coverage and accuracy of responses. Decide how you will use the PES analysis to uncover and respond to any quality issues. 


**Sample design**

The EAs selected for the PES should not be shared with the census enumerators or the census management team so that during census enumeration all EAs are treated the same. Be aware of stratification issues, for example if people respond via their own mechanism (CAWI) then levels of digital exclusion/digital uptake in different areas might need to be considered. Administrative data may be used to help with stratification if you can identify areas that are likely to be harder to count e.g., lack of internet.


**Questionnaire design and CAPI development**

Ensure that the PES CAPI is capturing all the data required for PES matching and analysis and is harmonised with the census CAPI where appropriate. Capture information about whether PES respondents were present, and enumerated, in the same EA for census, and if not where they were enumerated for census. 

**Enumerator recruitment and training**

Good training of both census and PES enumerators is essential to ensure that they understand well how the data is used for matching and the importance of capturing names and dates of birth accurately. When enumerators understand the importance of consistency of approach, and the impact of mistakes on enumeration they are more likely to collect good quality data. You may choose to use some (preferably the best) of the census enumerators to work as PES enumerators. In this case, ensure that enumerators do not work in the same EA for both census and PES enumeration as this breaks the independence assumption.  

**Enumeration**

PES enumerators should not be given any information collected during census enumeration. PES household listing should be carried out independently from census household listing. If viable, a different enumeration method should be used for PES than was used for census. However, if CAPI enumeration is used for both, independence can be maintained by ensuring enumerators do not work the same EAs for both census and PES. As for digital census, dashboards can be used during PES enumeration. If there are any EAs included in the PES sample, but which were found not to contain households during the census enumeration, you may drop them from the sample and include a back-up EA instead with similar characteristics (geography, urban/rural, hard-to-count). If possible, collect latitude and longitude variables when enumerating each household.

**Data processing and management**

There should be a flow of data from the field to a secure server. Cuts of data after different processes should be maintained for auditing purposes. Remove Multiple Persons (RFP) and Remove Multiple Responses (RMR) processing to flag false and duplicates records should be carried out. If age or sex are missing for any census or PES records these need to be resolved either using edit rules or imputation (heuristic or donor based). Note however, that for the purposes of matching, the data should be provided prior to any imputation taking place.


**PES pilot**

Choose a sample of EAs that have also been selected for the census pilot to test the PES methodology and technology. Ensure that you test the enumerator training, PES CAPI application, dashboards, data transfer mechanisms, data processing and matching methodology. 


**Automatic Matching**

With electronic census and PES data, automatic matching techniques can be used to carry out most of the matching. A deterministic or rule-based approach to matching has been found to work well. With this approach, a series of matchkeys is developed where each matchkey is a set of conditions that a record pair must satisfy in order for that pair to be declared a match. (see case study: [Rwanda](/docs/experiences-lessons-2020/Chapter-14/Selected%20country%20experiences) for an example of matchkeys). Automatic fuzzy matching techniques such as using Levenshtein Edit Distance, Jarrow-Winkler score or Soundex phonetic coding, can be used to account for errors in the data, in particular with regards to errors in names. An ’age-tolerance’ function can also be used to account for small differences in year of birth. See the UK Office for National Statistics (ONS), [A set of functions for cleaning and matching census data with post-enumeration survey data](https://github.com/ONSdigital/pes_match/tree/main) for an example of PES matching code written in python. Automatic probabilistic matching algorithms can also be used for example the UK Ministry of Justice [Splink](https://www.gov.uk/government/publications/joined-up-data-in-government-the-future-of-data-linking-methods/splink-mojs-open-source-library-for-probabilistic-record-linkage-at-scale) implementation of the Fellegi-Sunter probabilistic matching algorithm is freely available. The matching algorithms may be run on all data once PES enumeration is completed, or in the field as data is collected (see case study: [Togo](/docs/experiences-lessons-2020/Chapter-14/Selected%20country%20experiences)). This latter approach means that reconciliation is carried out immediately after PES enumeration, which is more efficient, but care must be taken to maintain the independence of the PES, with no census information being given to PES enumerators.

**Clerical Matching**

Whilst the majority of matches (between 70% and 90% is to be expected depending on the quality of the data) should be made automatically, there will still be the need to perform clerical matching. A team of people trained in matching will be required to look at potential matches and decide whether or not the records are truly a match. The UK ONS’ Clerical Resolution Online Widget [(CROW) clerical matching system](https://github.com/ONSdigital/ons-crow) can be used for clerical matching of census and PES data and is available free of charge. Clerical matching will be required for the following purposes:

- Tuning of the automatic algorithms – as the matchkeys are developed, pairs of matches made are sent to the clerical team for review. If a matchkey is found to be making false matches then the matchkey is made stricter e.g., by including a new variable, and is reviewed again until the number of false matches made is acceptable.

- Resolution of conflicting automatic matches – conflicts occur when the automatic algorithms match one PES record to two different census records or vice versa. This can happen when there are same sex twins, father and son with same names, or just because people have very similar names and ages. The clerical matches review the conflicting records and decide which is the correct match.

- Review of possible matches generated by non-strict matchkeys which make lots of correct matches but also too many false matches to allow them to all be accepted automatically.

- Review of the unmatched persons once all automatic matching stages have been completed.

- Quality assurance of the automatic matching – samples of matched records are reviewed to estimate the false match rate, and for a sample of unmatched PES records, the census database is searched for a match to estimate the missed match rate.


**Reconciliation**

After matching has been completed, most countries conduct reconciliation visits to the PES EAs to verify the status of unmatched persons e.g., to verify whether an unmatched census resident was a usual resident at the PES EA at the time of the census, and if so, why they were not enumerated during the PES. The results of reconciliation tend not to change the results of the estimates by any significant amount. However, the results of the reconciliation visits can be used to help understand any errors in the data collection processes (for both census and PES) and therefore to make improvements for future surveys. Reconciliation will only have value if you do it quickly as soon as problems in an EA are identified. Be clear on what you are trying to achieve if you go back to the field for reconciliation and how your will capture information and resolve cases where census, PES and reconciliation data is different. If you have administrative data that indicates coverage in an EA, you may use this to quality assure your census and PES rather than carrying out reconciliation.

**Analysis**

Once every person in the PES and census (in PES EAs) data has been classified as matched, incorrectly enumerated, or unmatched, this information – the matchlist – is passed to the estimation team. The matchlist should also include the sex, age and EA of each person, and whether the location is urban or rural. Estimates are usually calculated by sex and age groups. In dual system estimation, non-response in PES areas is used to estimate non-response in other similar areas. A weight is calculated by dividing the number of persons counted in the PES by the number of persons counted in both the census and the PES. The number of persons matched between census and PES is used as a proxy for counted in both the census and the PES. Different weights are applied for different demographic groups such as age, sex, type of locality (urban or rural) and for different geographies. See Peter Benton, [Trout, Catfish and Roach: The Beginner's Guide to Census Population Estimates](https://docslib.org/doc/2577669/trout-catfish-and-roach-the-beginner-s-guide-to-census-population-estimates) for a simple explanation of dual system estimation.

Analysis can also be carried out to assess the accuracy of answers given on the census by comparing responses given by the same (matched) person in census and PES data.

The analysis can be carried out using Python or R code or more traditional SPSS or STATA methods, or for smaller countries. Excel is sufficient for basic analysis. However, it is more stable and faster to use a software package or coding language.  This also allows bootstrapping to be used to calculate variance estimates around your population estimates.

Comparison of age/sex ratio graphs and population estimate graphs against previous census data and, where available, administrative data or population projections should be used to sense check your estimates and identify areas which need further investigation.


**Quality Assurance**

Identify key stakeholders who will use the census data and may challenge the numbers. Involve these stakeholders in the quality assurance – do they agree with the estimates? If not, do they have data that contradicts your estimates? If so, can you use this in your estimation process?

**Dissemination**

A description of the PES methodology and the results of the PES analysis should be published so that users of the census data understand the limitations in the census results and can adjust accordingly. See for example, the thematic report written by National Statistics Institute of Rwanda: [Thematic Report: Post Enumeration Survey](https://www.statistics.gov.rw/data-sources/censuses/Population-and-Housing-Census/fifth-population-and-housing-census-2022/rphc5-thematic-reports/rphc5-thematic-report-post-enumeration-survey).
