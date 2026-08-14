import twtLogo from '../assets/TWT_LOGO_CYANBIG.png';
import fraunhoferLogo from '../assets/fraunhofer.png';
import kassbohrerLogo from '../assets/kassbohrer.jpeg';
import marquardtLogo from '../assets/Marquardt.jpg';
import siemensLogo from '../assets/sie-logo-petrol-rgb.png';
import universityLogo from '../assets/university.webp';
import youseLogo from '../assets/youse.jpg';


import { Partner } from '../types/partner';

export const partners: Partner[] = [
    {
        id: "twt",
        name: "TWT GmbH Science & Innovation",
        logo: twtLogo,
        business:
            "Information Technologies, Systems Engineering and Mathematics",
        employees: "[einfügen]",
        competencies: [
            "Model Based Systems Engineering, digitale Produktentwicklung",
            "KI-Plattformen und generative KI-Methoden (u. a. FORMALIS)",
        ],
        role: [
            "Projektkoordination",
            "TP1: Entwicklung eines prototypischen KI-Assistenten für die modellbasierte Produktentwicklung, transfer der Ergebnisse in KMU über einen KMU-Anwenderkreis",
        ],
        goals: [
            "Prototyp eines KI-Assistenten für die Modellierung und Nachweis seiner Wirksamkeit",
            "Transfer der Ergebnisse in KMU über einen KMU-Anwenderkreis",
        ],
        contact: "Contact person",
    },

    {
        id: "fraunhofer",
        name: "Fraunhofer IAO",
        logo: fraunhoferLogo,
        business:
            "Angewandte Forschung – Arbeitswirtschaft und Organisation",
        employees: "[einfügen]",
        competencies: [
            "Arbeitswissenschaft, Organisationsgestaltung,Resilienzforschung ",
            "Vorarbeiten u. a. Wertstromengineering und Flexibler Personaleinsatz",
        ],
        role: [
            "TP2: Erforschung von Ansätzen zur Messung und Steigerung der Resilienz in Strukturen und Abläufen der modellbasierten Produktentstehung",
        ],
        goals: [
            "Resilienz-Rahmenkonzept für Analyse und Transformation auf Team- und Organisationsebene",
            "Indikatoren für die kontinuierliche Analyse und Optimierung der Resilienz in den ITO-Ebenen",
        ],
        contact: "Contact person",
    },

    {
        id: "tuberlin",
        name:
            "Technische Universität Berlin – Fachgebiet Industrielle Informationstechnik (IIT)",
        logo: universityLogo,
        business:
            "Forschung und Lehre",
        employees: "[einfügen]",
        competencies: [
            "Modellbasierte Produktentwicklung, industrielle Informationstechnik",
            "Systemmodellierung mit SysML v1/v2, KI in der Produktentstehung",
        ],
        role: [
            "TP 3: Erforschung von KI-unterstützten und modellbasierten Produktentwicklungsmethoden zur Steigerung der Resilienz aus technologischer und arbeitswissenschaftlicher Perspektive",
        ],
        goals: [
            "Generierung von Architekturmodellen mit Large Language Models (SysML v1 → SysML v2)",
            "Kombination generativer KI mit formalen Methoden und Knowledge Graphs",
        ],
        contact: "Contact person",
    },

    {
        id: "youse",
        name: "YOUSE GmbH",
        logo: youseLogo,
        business:
            " User-Centered Design & Innovationsforschung",
        employees: "[einfügen]",
        competencies: [
            "Partizipative Methoden, Design Futuring, nutzerzentrierte Entwicklung",
        ],
        role: [
            "TP 4: Erforschung des Einsatzes partizipativer Methoden (Szenario-Workshops & Planspiel) zur Steigerung der Resilienz in der Produktentwicklung",
        ],
        goals: [
            "Training antizipatorischer Kompetenzen auf Mitarbeiter- und Teamebene",
            "Einheitliche Leitbilder (Zukunftsszenarien) für die KI-gestützte Organisation und Arbeit",
        ],
        contact: "Contact person",
    },

    {
        id: "marquardt",
        name: "Marquardt GmbH",
        logo: marquardtLogo,
        business:
            "Automobilzulieferer (Tier 1) – Zutrittssysteme, Ladesysteme für E-Mobilität",
        employees: "[einfügen]",
        competencies: [
            "Mechatronische Systeme und Software im SDV-Ökosystem",
        ],
        role: [
            "TP 5: Erprobung modellbasierter Produktentwicklung zur Resilienz-Steigerung im Kontext Software-defined Vehicle",
        ],
        goals: [
            "Durchgängigkeit von der Kundenfunktion bis in die einzelne Fachdomäne über transdisziplinäre Architekturmodelle",
            "Stärkung der persönlichen Resilienz der Modellierungsverantwortlichen und der Zusammenarbeit der Entwicklungsteams",
        ],
        contact: "Contact person",
    },

    {
        id: "siemens",
        name: "Siemens Healthineers",
        logo: siemensLogo,
        business:
            "Technologiekonzern – Fokus im Projekt: komplexe medizinische Geräte",
        employees: "[einfügen]",
        competencies: [
            "Entwicklung komplexer Systeme, u. a. Computertomographen",
        ],
        role: [
            "TP 6: Erprobung modellbasierter Zusammenarbeit zur Resilienz-Steigerung im Kontext der Entwicklung von komplexen medizinischen Geräten",
            "Einbindung des assoziierten Partners Siemens Healthineers für Feedback zu den Projektergebnissen"
        ],
        goals: [
            "Resilienz in der disziplinübergreifenden Zusammenarbeit trotz heterogener Modellierungssprachen",
            "Gesteigerte Reaktions- und Handlungsfähigkeit auf Mitarbeiter- und Organisationsebene",
        ],
        contact: "Contact person",
    },

    {
        id: "kaessbohrer",
        name: "Kässbohrer Trailer ULM GmbH",
        logo: kassbohrerLogo,
        business:
            "Nutzfahrzeugbau – Sattelauflieger in vielfältigen Varianten",
        employees: "[einfügen]",
        competencies: [
            "Kundenindividuelle Konfiguration und Fertigung von Silofahrzeugen",
        ],
        role: [
            "TP7: Erprobung von modellbasierter Zusammenarbeit zur Resilienzsteigerung im Kontext der Konfiguration von Silofahrzeugen",
        ],
        goals: [
            "Disziplinübergreifende, modellbasierte Zusammenarbeit zwischen Vertrieb, Produktentwicklung, Produktion und Service",
            "Handlungsfähigkeit gegenüber langfristigen Störereignissen wie dem Wandel zur E-Mobilität",
        ],
        contact: "Contact person",
    },
];