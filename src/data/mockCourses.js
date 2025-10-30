export const mockCourses = {
    'ENC3246': {
        name: 'Professional Communication for Engineers',
        credits: 3,
        professor: 'Prof. Lena Morales',
        rating: 4.3,
        prerequisites: [['ENC1101', 'ENC1102']],
        sections: [
            { id: 12345, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 12346, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] },
            { id: 12347, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'ENC2256': {
        name: 'Writing in the Disciplines',
        credits: 3,
        professor: 'Prof. Arjun Patel',
        rating: 4.1,
        prerequisites: [['ENC1101', 'ENC1102']],
        sections: [
            { id: 23456, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 23457, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] },
            { id: 23458, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'MAC2311': {
        name: 'Analytic Geometry and Calculus 1',
        credits: 4,
        professor: 'Prof. Samuel Nguyen',
        rating: 4.4,
        prerequisites: [],
        sections: [
            { id: 34567, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 34568, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 34569, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'MAC2312': {
        name: 'Analytic Geometry and Calculus 2',
        credits: 4,
        professor: 'Prof. Priya Desai',
        rating: 4.2,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 45678, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 45679, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 45680, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] }
        ]
    },
    'MAC2313': {
        name: 'Analytic Geometry and Calculus 3',
        credits: 4,
        professor: 'Prof. Lionel Chen',
        rating: 4.0,
        prerequisites: ['MAC2312'],
        sections: [
            { id: 56789, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 56790, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] },
            { id: 56791, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'MAS3114': {
        name: 'Computational Linear Algebra',
        credits: 3,
        professor: 'Prof. Marina Popov',
        rating: 4.1,
        prerequisites: ['MAC2312'],
        sections: [
            { id: 67890, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 67891, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 67892, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'PHY2048': {
        name: 'Physics with Calculus 1',
        credits: 4,
        professor: 'Prof. Daniel Roth',
        rating: 3.9,
        prerequisites: ['MAC2311'],
        includesLab: true,
        sections: [
            { id: 78901, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 78902, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 78903, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'PHY2049': {
        name: 'Physics with Calculus 2',
        credits: 4,
        professor: 'Prof. Zahra Haddad',
        rating: 3.8,
        prerequisites: ['PHY2048', 'MAC2312'],
        includesLab: true,
        sections: [
            { id: 89012, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 89013, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] },
            { id: 89014, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'STA3032': {
        name: 'Engineering Statistics',
        credits: 3,
        professor: 'Prof. Julian Carter',
        rating: 4.2,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 90123, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 90124, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 90125, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] }
        ]
    },
    'COP3502C': {
        name: 'Programming Fundamentals 1',
        credits: 4,
        professor: 'Prof. Naomi Stein',
        rating: 4.6,
        prerequisites: [],
        sections: [
            { id: 11234, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 11235, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 11236, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] }
        ]
    },
    'COP3503C': {
        name: 'Programming Fundamentals 2',
        credits: 4,
        professor: 'Prof. Ethan Wallace',
        rating: 4.5,
        prerequisites: ['COP3502C', 'MAC2311'],
        sections: [
            { id: 22345, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] },
            { id: 22346, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] },
            { id: 22347, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'COP3530': {
        name: 'Data Structures and Algorithms',
        credits: 3,
        professor: 'Prof. Rina Sato',
        rating: 4.7,
        prerequisites: [
            ['COP3504C', 'COP3503C'],
            'COT3100',
            ['MAC2234', 'MAC2312', 'MAC2512', 'MAC3473']
        ],
        sections: [
            { id: 33456, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 33457, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 33458, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] }
        ]
    },
    'COT3100': {
        name: 'Applications of Discrete Structures',
        credits: 3,
        professor: 'Prof. Omar Castillo',
        rating: 4.3,
        prerequisites: [
            ['MAC2311', 'MAC3472'],
            'COP3502C'
        ],
        sections: [
            { id: 44567, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 44568, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] },
            { id: 44569, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'CDA3101': {
        name: 'Introduction to Computer Organization',
        credits: 3,
        professor: 'Prof. Silvia Ricci',
        rating: 4.1,
        prerequisites: [
            ['COP3504C', 'COP3503C'],
            ['MAC2233', 'MAC2311', 'MAC3472'],
            'COT3100'
        ],
        sections: [
            { id: 55678, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 55679, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 55680, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] }
        ]
    },
    'CEN3031': {
        name: 'Introduction to Software Engineering',
        credits: 3,
        professor: 'Prof. Greg Thornton',
        rating: 4.4,
        prerequisites: ['COP3530'],
        sections: [
            { id: 66789, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 66790, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 66791, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CIS4301': {
        name: 'Information and Database Systems 1',
        credits: 3,
        professor: 'Prof. Aisha Rahman',
        rating: 4.5,
        prerequisites: [
            'COP3530',
            ['COP3504C', 'COP3503C'],
            'COT3100'
        ],
        sections: [
            { id: 77890, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 77891, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] },
            { id: 77892, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'CIS4914': {
        name: 'Senior Project',
        credits: 3,
        professor: 'Prof. Victor Almeida',
        rating: 4.6,
        prerequisites: [],
        sections: [
            { id: 88901, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }, { day: 'F', start: 7, end: 8 }] },
            { id: 88902, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 88903, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'EGN4952': {
        name: 'Integrated Product and Process Design 2',
        credits: 3,
        professor: 'Prof. Hannah Ko',
        rating: 4.2,
        prerequisites: ['EGN4951'],
        sections: [
            { id: 99012, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] },
            { id: 99013, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 99014, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'CNT4007': {
        name: 'Computer Network Fundamentals',
        credits: 3,
        professor: 'Prof. Marco De Santis',
        rating: 4.1,
        prerequisites: ['COP3530'],
        sections: [
            { id: 10123, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 10124, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] },
            { id: 10125, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'COP4020': {
        name: 'Programming Language Concepts',
        credits: 3,
        professor: 'Prof. Fiona Gallagher',
        rating: 4.0,
        prerequisites: ['COP3530'],
        sections: [
            { id: 20234, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 20235, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 20236, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'COP4533': {
        name: 'Algorithm Abstraction and Design',
        credits: 3,
        professor: 'Prof. Rafael Ortiz',
        rating: 4.3,
        prerequisites: ['COP3530'],
        sections: [
            { id: 30345, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 30346, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 30347, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'COP4600': {
        name: 'Operating Systems',
        credits: 3,
        professor: 'Prof. Beatrice Liu',
        rating: 4.4,
        prerequisites: ['CDA3101', 'COP3530'],
        sections: [
            { id: 40456, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 40457, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 40458, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'EGS4034': {
        name: 'Engineering Ethics and Professionalism',
        credits: 1,
        professor: 'Prof. Ahmed Suleiman',
        rating: 4.2,
        prerequisites: [],
        sections: [
            { id: 50567, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 50568, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 50569, times: [{ day: 'M', start: 7, end: 8 }] }
        ]
    },
    'CGS3065': {
        name: 'Legal and Social Issues in Computing',
        credits: 1,
        professor: 'Prof. Teresa Valdez',
        rating: 4.1,
        prerequisites: ['COP3502C'],
        sections: [
            { id: 60678, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 60679, times: [{ day: 'M', start: 3, end: 4 }] },
            { id: 60680, times: [{ day: 'W', start: 5, end: 6 }] }
        ]
    },
    'CIS4905': {
        name: 'Individual Study in CISE',
        credits: 3,
        professor: 'Prof. Nikhil Sharma',
        rating: 4.5,
        prerequisites: ['COP3502C'],
        majorElective: true,
        sections: [
            { id: 70789, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 70790, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 70791, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CIS4930': {
        name: 'Special Topics in CISE',
        credits: 3,
        professor: 'Prof. Mei Tan',
        rating: 4.3,
        prerequisites: [['COP3503C', 'COP3504C']],
        majorElective: true,
        sections: [
            { id: 80890, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 80891, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 80892, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CIS4940': {
        name: 'Practical Work',
        credits: 1,
        professor: 'Prof. Omar Whitfield',
        rating: 4.0,
        prerequisites: ['COP3502C'],
        majorElective: true,
        sections: [
            { id: 91901, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 91902, times: [{ day: 'T', start: 1, end: 2 }] },
            { id: 91903, times: [{ day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CIS4949': {
        name: 'Co-Op Work in CISE',
        credits: 1,
        professor: 'Prof. Evelyn Brooks',
        rating: 4.2,
        prerequisites: ['COP3502C'],
        majorElective: true,
        sections: [
            { id: 12012, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 12013, times: [{ day: 'T', start: 4, end: 5 }] },
            { id: 12014, times: [{ day: 'R', start: 3, end: 4 }] }
        ]
    },
    'EGN4912': {
        name: 'Engineering Directed Independent Research',
        credits: 3,
        professor: 'Prof. Colin Watts',
        rating: 4.1,
        prerequisites: [],
        majorElective: true,
        permissionRequired: true,
        sections: [
            { id: 23123, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 23124, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] },
            { id: 23125, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'EGN4951': {
        name: 'Integrated Product and Process Design 1',
        credits: 3,
        professor: 'Prof. Adela Ruiz',
        rating: 4.3,
        prerequisites: ['CEN3031'],
        majorElective: true,
        sections: [
            { id: 34234, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 34235, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 34236, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'EIN3354': {
        name: 'Engineering Economy',
        credits: 3,
        professor: 'Prof. Barbara Kim',
        rating: 3.9,
        prerequisites: ['MAC2312'],
        majorElective: true,
        sections: [
            { id: 45345, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 45346, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 45347, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'EEL3701C': {
        name: 'Digital Logic and Computer Systems',
        credits: 4,
        professor: 'Prof. Peter Volkov',
        rating: 4.2,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 56456, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 56457, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 56458, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'EEL4744C': {
        name: 'Microprocessor Applications',
        credits: 4,
        professor: 'Prof. Chiara Rossi',
        rating: 4.0,
        prerequisites: [
            'EEL3701C',
            ['EEL3834', 'COP3503C', 'COP3504C', 'COP2274']
        ],
        majorElective: true,
        sections: [
            { id: 67567, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 67568, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 67569, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'CAI4104': {
        name: 'Machine Learning Engineering',
        credits: 3,
        professor: 'Prof. Daria Kuznetsova',
        rating: 4.6,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 78678, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 78679, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] },
            { id: 78680, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'CAP3020': {
        name: 'Theory and Practice of Multimedia Production',
        credits: 3,
        professor: 'Prof. Noah Friedman',
        rating: 4.1,
        prerequisites: ['CAP3027'],
        majorElective: true,
        sections: [
            { id: 89789, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 89790, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 89791, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'CAP3027': {
        name: 'Introduction to Computational Media',
        credits: 3,
        professor: 'Prof. Yuna Park',
        rating: 4.0,
        prerequisites: [['COP3504', 'COP3503']],
        majorElective: true,
        sections: [
            { id: 90890, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 90891, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 90892, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CAP3032': {
        name: 'Interactive Modeling and Animation 1',
        credits: 3,
        professor: 'Prof. Matteo Greco',
        rating: 4.2,
        prerequisites: ['MAC1147'],
        majorElective: true,
        sections: [
            { id: 11991, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 11992, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 11993, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'CAP3034': {
        name: 'Introduction to Computer-Aided Animation',
        credits: 3,
        professor: 'Prof. Isabelle Dubois',
        rating: 4.0,
        prerequisites: ['MAC1147'],
        majorElective: true,
        sections: [
            { id: 22092, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 22093, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }, { day: 'F', start: 7, end: 8 }] },
            { id: 22094, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'CAP3220': {
        name: 'Introduction to Computer-Aided Modeling',
        credits: 3,
        professor: 'Prof. Jonas Richter',
        rating: 3.9,
        prerequisites: ['MAC1147'],
        majorElective: true,
        sections: [
            { id: 33193, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }, { day: 'F', start: 7, end: 8 }] },
            { id: 33194, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 33195, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] }
        ]
    },
    'CAP4053': {
        name: 'Artificial Intelligence for Computer Games',
        credits: 3,
        professor: 'Prof. Amina Farouk',
        rating: 4.5,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 44294, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 44295, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 44296, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CAP4112': {
        name: 'Generating Expressiveness in Intelligent Agents and Avatars',
        credits: 3,
        professor: 'Prof. Victor Kuzmin',
        rating: 4.1,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 55395, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 55396, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] },
            { id: 55397, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'CAP4136': {
        name: 'Malware Reverse Engineering',
        credits: 3,
        professor: 'Prof. Mira Kwon',
        rating: 4.2,
        prerequisites: ['CDA3101'],
        majorElective: true,
        sections: [
            { id: 66496, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 66497, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 66498, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CAP4174': {
        name: '3D Audio for Interfaces',
        credits: 3,
        professor: 'Prof. Helena Costa',
        rating: 4.0,
        prerequisites: [['COP3503', 'COP3504']],
        majorElective: true,
        sections: [
            { id: 77597, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 77598, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 77599, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'CAP4410': {
        name: 'Computer Vision',
        credits: 3,
        professor: 'Prof. Tomasz Nowak',
        rating: 4.4,
        prerequisites: [
            'COT3100',
            ['COT4501', 'MAD4401']
        ],
        majorElective: true,
        sections: [
            { id: 88698, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 88699, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 88700, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CAP4613': {
        name: 'Deep Learning for Computer Graphics',
        credits: 3,
        professor: 'Prof. Gabriel Romero',
        rating: 4.6,
        prerequisites: [['COP3530', 'MAS3114', 'MAS4105']],
        majorElective: true,
        sections: [
            { id: 99801, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] },
            { id: 99802, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 99803, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'CAP4621': {
        name: 'Artificial Intelligence and Heuristics',
        credits: 3,
        professor: 'Prof. Dae Kim',
        rating: 4.3,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 10902, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 10903, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 10904, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CAP4641': {
        name: 'Natural Language Processing',
        credits: 3,
        professor: 'Prof. Sofia Almeida',
        rating: 4.5,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 21013, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 21014, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 21015, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CAP4730': {
        name: 'Computational Structures in Computer Graphics',
        credits: 3,
        professor: 'Prof. Luca Benedetti',
        rating: 4.2,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 32124, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 32125, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 32126, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'CAP4770': {
        name: 'Introduction to Data Science',
        credits: 3,
        professor: 'Prof. Maria Gonzales',
        rating: 4.6,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 43235, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 43236, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 43237, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'CAP4773': {
        name: 'Projects Data Science',
        credits: 3,
        professor: 'Prof. Oliver King',
        rating: 4.4,
        prerequisites: ['CAP4770'],
        majorElective: true,
        sections: [
            { id: 54346, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 54347, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] },
            { id: 54348, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'CDA4102': {
        name: 'Computer Architecture',
        credits: 3,
        professor: 'Prof. Wei Zhang',
        rating: 4.3,
        prerequisites: ['CDA3101', 'COP3530'],
        majorElective: true,
        sections: [
            { id: 65457, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 65458, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 65459, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'CDA4324C': {
        name: 'Cyber-physical System Security',
        credits: 3,
        professor: 'Prof. Zahid Raza',
        rating: 4.1,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 76568, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 76569, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 76570, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CDA4630': {
        name: 'Embedded Systems',
        credits: 3,
        professor: 'Prof. Laura Jensen',
        rating: 4.0,
        prerequisites: ['CDA3101'],
        majorElective: true,
        sections: [
            { id: 87679, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 87680, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 87681, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'CEN3913': {
        name: 'Computer and Information Science and Engineering Design 1',
        credits: 3,
        professor: 'Prof. Patrick Yoon',
        rating: 4.2,
        prerequisites: ['CEN3031'],
        majorElective: true,
        sections: [
            { id: 98790, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 98791, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 98792, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CEN4072': {
        name: 'Software Testing and Verification',
        credits: 3,
        professor: 'Prof. Helena Marin',
        rating: 4.3,
        prerequisites: ['CEN3031'],
        majorElective: true,
        sections: [
            { id: 19801, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 19802, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 19803, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CEN4721': {
        name: 'Human-Computer Interaction',
        credits: 3,
        professor: 'Prof. Jason Park',
        rating: 4.5,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 20912, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 20913, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] },
            { id: 20914, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'CEN4722': {
        name: 'User Experience Design',
        credits: 3,
        professor: 'Prof. Karina Silva',
        rating: 4.4,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 31023, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 31024, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 31025, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CEN4725': {
        name: 'Natural User Interaction',
        credits: 3,
        professor: 'Prof. Ahmed Khan',
        rating: 4.0,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 42134, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] },
            { id: 42135, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 42136, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'CEN4730': {
        name: 'Human-Centered Input Recognition Algorithms',
        credits: 3,
        professor: 'Prof. Natalie Brooks',
        rating: 4.1,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 53245, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }, { day: 'F', start: 7, end: 8 }] },
            { id: 53246, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 53247, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'CEN4907C': {
        name: 'Computer Engineering Design 1',
        credits: 3,
        professor: 'Prof. Elliot Reed',
        rating: 4.2,
        prerequisites: ['CEN3031', 'EEL3744C'],
        majorElective: true,
        sections: [
            { id: 64356, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 64357, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 64358, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CEN4908C': {
        name: 'Computer Engineering Design 2',
        credits: 3,
        professor: 'Prof. Amelia Hughes',
        rating: 4.3,
        prerequisites: ['CEN4907C'],
        majorElective: true,
        sections: [
            { id: 75467, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] },
            { id: 75468, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] },
            { id: 75469, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'CEN4914': {
        name: 'Computer and Information Science and Engineering Design 2',
        credits: 3,
        professor: 'Prof. Omar Aziz',
        rating: 4.2,
        prerequisites: ['CEN3913'],
        majorElective: true,
        sections: [
            { id: 86578, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 86579, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 86580, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CGS2032': {
        name: 'Math Art and Computing',
        credits: 3,
        professor: 'Prof. Serena Lin',
        rating: 4.0,
        prerequisites: ['MAC1147'],
        sections: [
            { id: 97689, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 97690, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 97691, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'CGS3063': {
        name: 'Computers and Modern Society',
        credits: 3,
        professor: 'Prof. Victor Ramos',
        rating: 3.9,
        prerequisites: ['COP3502C'],
        sections: [
            { id: 18790, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 18791, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 18792, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CGS4144': {
        name: 'Introduction to Bioinformatic Algorithms',
        credits: 3,
        professor: 'Prof. Keiko Tanaka',
        rating: 4.2,
        prerequisites: [
            'COT3100',
            ['COP3503C', 'COP3504C']
        ],
        majorElective: true,
        sections: [
            { id: 29801, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 29802, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 29803, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CGS4853C': {
        name: 'Introduction to Web Development and Design',
        credits: 3,
        professor: 'Prof. Alan Pierce',
        rating: 4.3,
        prerequisites: ['COP3502', 'COP3503'],
        majorElective: true,
        sections: [
            { id: 30912, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 30913, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 30914, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CIS4204': {
        name: 'Penetration Testing: Ethical Hacking',
        credits: 3,
        professor: 'Prof. Rhea Kapoor',
        rating: 4.4,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 41023, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 41024, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] },
            { id: 41025, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'CIS4213': {
        name: 'Enterprise Security',
        credits: 3,
        professor: 'Prof. Diego Alvarez',
        rating: 4.2,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 52134, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 52135, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 52136, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CIS4360': {
        name: 'Computer and Information Security',
        credits: 3,
        professor: 'Prof. Nadia Karim',
        rating: 4.1,
        prerequisites: ['CDA3101'],
        majorElective: true,
        sections: [
            { id: 63245, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 63246, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 63247, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'CIS4362': {
        name: 'Introduction to Cryptology',
        credits: 3,
        professor: 'Prof. Igor Petrov',
        rating: 4.0,
        prerequisites: ['COT3100'],
        majorElective: true,
        sections: [
            { id: 74356, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 74357, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 74358, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'CIS4715': {
        name: 'CS Teaching & Learning',
        credits: 1,
        professor: 'Prof. Emily Hart',
        rating: 4.2,
        prerequisites: [['COP3502', 'COP3504C']],
        majorElective: true,
        sections: [
            { id: 85467, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 85468, times: [{ day: 'T', start: 3, end: 4 }] },
            { id: 85469, times: [{ day: 'R', start: 5, end: 6 }] }
        ]
    },
    'CIS4912C': {
        name: 'Integrated Product and Process Design 1',
        credits: 3,
        professor: 'Prof. Martin Weiss',
        rating: 4.3,
        prerequisites: ['CDA3101', 'COP3530', 'COT3100'],
        majorElective: true,
        permissionRequired: true,
        sections: [
            { id: 96578, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 96579, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] },
            { id: 96580, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'CIS4913C': {
        name: 'Integrated Product and Process Design 2',
        credits: 3,
        professor: 'Prof. Amina Noor',
        rating: 4.4,
        prerequisites: ['CIS4912C'],
        majorElective: true,
        sections: [
            { id: 17689, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 17690, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 17691, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'CNT4520': {
        name: 'Introduction to Mobile Networking',
        credits: 3,
        professor: 'Prof. Joshua Green',
        rating: 4.1,
        prerequisites: [['COP3502C', 'COP3503C']],
        majorElective: true,
        sections: [
            { id: 28790, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 28791, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] },
            { id: 28792, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CNT4731': {
        name: 'Multimedia Networking Principles',
        credits: 3,
        professor: 'Prof. Dana Schultz',
        rating: 4.0,
        prerequisites: ['CNT4007'],
        majorElective: true,
        sections: [
            { id: 39801, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 39802, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 39803, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'COP2271': {
        name: 'Computer Programming for Engineers',
        credits: 3,
        professor: 'Prof. Trevor Miles',
        rating: 3.8,
        prerequisites: ['MAC2312'],
        sections: [
            { id: 40912, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 40913, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 40914, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'COP3013': {
        name: 'Programming Language Survey',
        credits: 3,
        professor: 'Prof. Henry Collins',
        rating: 3.7,
        prerequisites: ['MAC1147'],
        cannotTakeAfter: ['COP3502C'],
        sections: [
            { id: 51023, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 51024, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 51025, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'COP3275': {
        name: 'Computer Programming Using C',
        credits: 3,
        professor: 'Prof. Chi Nguyen',
        rating: 4.0,
        prerequisites: ['MAC1147'],
        sections: [
            { id: 62134, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 62135, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 62136, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'COP3504C': {
        name: 'Advanced Programming Fundamentals for CIS Majors',
        credits: 4,
        professor: 'Prof. Ivana Petrova',
        rating: 4.5,
        prerequisites: [
            ['MAC2311', 'MAC3472']
        ],
        sections: [
            { id: 73245, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 73246, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 73247, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'COP4331': {
        name: 'Object-oriented Programming',
        credits: 3,
        professor: 'Prof. Paula Ortega',
        rating: 4.4,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 84356, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 84357, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 84358, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'COP4554': {
        name: 'Programming Language Inquiry',
        credits: 3,
        professor: 'Prof. Jae Min',
        rating: 4.0,
        prerequisites: ['COP3503C'],
        majorElective: true,
        sections: [
            { id: 95467, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 95468, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] },
            { id: 95469, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'COP4620': {
        name: 'Translators and Translator Writing Systems',
        credits: 3,
        professor: 'Prof. Alessia Romano',
        rating: 4.1,
        prerequisites: ['COP3530'],
        majorElective: true,
        sections: [
            { id: 16578, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 16579, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 16580, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'COP4720': {
        name: 'Information and Database Systems 2',
        credits: 3,
        professor: 'Prof. Mira Petrescu',
        rating: 4.2,
        prerequisites: ['CIS4301', 'COP3530'],
        majorElective: true,
        sections: [
            { id: 27689, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 27690, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 27691, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'COT4501': {
        name: 'Numerical Analysis: a Computational Approach',
        credits: 3,
        professor: 'Prof. Stefan Ionescu',
        rating: 4.1,
        prerequisites: [
            ['COP3504', 'COP3503'],
            'MAS3114'
        ],
        majorElective: true,
        sections: [
            { id: 38790, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 38791, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 38792, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'IDC4710': {
        name: 'Virtual Reality for the Social Good',
        credits: 3,
        professor: 'Prof. Natalia Zvereva',
        rating: 4.3,
        prerequisites: [],
        level: 'Junior+',
        majorElective: true,
        sections: [
            { id: 49801, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 49802, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 49803, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'BSC2010': {
        name: 'Integrated Principles of Biology 1',
        credits: 4,
        professor: 'Prof. Maria Santos',
        rating: 4.0,
        prerequisites: [],
        includesLab: true,
        sections: [
            { id: 101001, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 101002, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 101003, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'BSC2011': {
        name: 'Integrated Principles of Biology 2',
        credits: 4,
        professor: 'Prof. James Chen',
        rating: 4.1,
        prerequisites: ['BSC2010'],
        includesLab: true,
        sections: [
            { id: 102001, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 102002, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 102003, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'CHM2045': {
        name: 'General Chemistry 1',
        credits: 4,
        professor: 'Prof. Rachel Kim',
        rating: 3.8,
        prerequisites: ['CHM1025'],
        includesLab: true,
        sections: [
            { id: 103001, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 103002, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 103003, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'CHM2046': {
        name: 'General Chemistry 2',
        credits: 4,
        professor: 'Prof. David Lee',
        rating: 3.9,
        prerequisites: [['CHM2045', 'CHM2095', 'CHM2050']],
        includesLab: true,
        sections: [
            { id: 104001, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 104002, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 104003, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'FAS4202C': {
        name: 'Biology of Fishes',
        credits: 4,
        professor: 'Prof. Thomas Rivera',
        rating: 4.5,
        prerequisites: ['BSC2011'],
        sections: [
            { id: 105001, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 105002, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 105003, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'OCE1001': {
        name: 'Introduction to Oceanography',
        credits: 3,
        professor: 'Prof. Sarah Mitchell',
        rating: 4.3,
        prerequisites: [],
        sections: [
            { id: 106001, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 106002, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 106003, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'STA2023': {
        name: 'Introduction to Statistics 1',
        credits: 3,
        professor: 'Prof. Anna Kowalski',
        rating: 4.0,
        prerequisites: [],
        sections: [
            { id: 107001, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 107002, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 107003, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'FAS4270': {
        name: 'Marine Ecological Processes',
        credits: 3,
        professor: 'Prof. Elena Rodriguez',
        rating: 4.4,
        prerequisites: ['BSC2010', 'BSC2011'],
        sections: [
            { id: 108001, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 108002, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 108003, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'ZOO4926': {
        name: 'Special Topics in Zoology (Marine Ecology)',
        credits: 3,
        professor: 'Prof. Michael Anderson',
        rating: 4.2,
        prerequisites: ['BSC2011'],
        sections: [
            { id: 109001, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 109002, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 109003, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }] }
        ]
    },
    'FAS4932': {
        name: 'Topics in Fisheries and Aquatic Sciences (Biology and Ecology of Algae)',
        credits: 3,
        professor: 'Prof. Jennifer Wu',
        rating: 4.1,
        prerequisites: [],
        sections: [
            { id: 110001, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 110002, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 110003, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'FNR3410C': {
        name: 'Natural Resource Sampling',
        credits: 3,
        professor: 'Prof. Robert Taylor',
        rating: 4.0,
        prerequisites: ['STA2023'],
        sections: [
            { id: 111001, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 111002, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] },
            { id: 111003, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'STA3024': {
        name: 'Introduction to Statistics 2',
        credits: 3,
        professor: 'Prof. Linda Garcia',
        rating: 3.9,
        prerequisites: ['STA2023'],
        sections: [
            { id: 112001, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 112002, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 112003, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'STA4210': {
        name: 'Regression Analysis',
        credits: 3,
        professor: 'Prof. Kevin Brown',
        rating: 4.2,
        prerequisites: [
            'STA3100',
            [['STA3024', 'STA3032', 'STA4321'], ['MAS3114', 'MAS4105']]
        ],
        sections: [
            { id: 113001, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }, { day: 'F', start: 6, end: 7 }] },
            { id: 113002, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 113003, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] }
        ]
    },
    'STA4222': {
        name: 'Sample Survey Design',
        credits: 3,
        professor: 'Prof. Patricia Martinez',
        rating: 4.1,
        prerequisites: [
            [['STA4321', 'STA2023'], 'STA3032', 'STA4322']
        ],
        sections: [
            { id: 114001, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 114002, times: [{ day: 'M', start: 7, end: 8 }, { day: 'W', start: 7, end: 8 }, { day: 'F', start: 7, end: 8 }] },
            { id: 114003, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'FNR4660': {
        name: 'Natural Resource Policy and Economics',
        credits: 3,
        professor: 'Prof. Christopher Davis',
        rating: 4.0,
        prerequisites: [],
        sections: [
            { id: 115001, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 115002, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 115003, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'GLY3083C': {
        name: 'Fundamentals of Marine Sciences',
        credits: 3,
        professor: 'Prof. Amanda White',
        rating: 4.3,
        prerequisites: ['OCE1001'],
        sections: [
            { id: 116001, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 116002, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 116003, times: [{ day: 'T', start: 7, end: 8 }, { day: 'R', start: 7, end: 8 }] }
        ]
    },
    'PHY2004': {
        name: 'Applied Physics 1',
        credits: 4,
        professor: 'Prof. George Thompson',
        rating: 3.7,
        prerequisites: [],
        includesLab: true,
        sections: [
            { id: 117001, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 117002, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] },
            { id: 117003, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    'ZOO4205C': {
        name: 'Invertebrate Biodiversity',
        credits: 4,
        professor: 'Prof. Susan Johnson',
        rating: 4.4,
        prerequisites: ['BSC2011'],
        sections: [
            { id: 118001, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 118002, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 118003, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'FAS2024': {
        name: 'Sustainable Fisheries',
        credits: 3,
        professor: 'Prof. Marine Smith',
        rating: 4.2,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 45821, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 45822, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'FAS4305C': {
        name: 'Introduction to Freshwater Fishery Science',
        credits: 4,
        professor: 'Prof. River Johnson',
        rating: 4.3,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 67234, times: [{ day: 'M', start: 1, end: 3 }, { day: 'W', start: 1, end: 3 }] },
            { id: 67235, times: [{ day: 'T', start: 4, end: 6 }, { day: 'R', start: 4, end: 6 }] }
        ]
    },
    'FAS4932-AIEP': {
        name: 'Topics in Fisheries and Aquatic Sciences (Aquatic Invertebrate Ecological Physiology)',
        credits: 3,
        professor: 'Prof. Coral Davis',
        rating: 4.1,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 53678, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 53679, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'FAS4932-FE': {
        name: 'Topics in Fisheries and Aquatic Sciences (Field Ecology of Aquatic Organisms)',
        credits: 4,
        professor: 'Prof. Lake Martinez',
        rating: 4.5,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 29841, times: [{ day: 'T', start: 1, end: 3 }, { day: 'R', start: 1, end: 3 }] },
            { id: 29842, times: [{ day: 'M', start: 3, end: 5 }, { day: 'W', start: 3, end: 5 }] }
        ]
    },
    'FAS4932-CRE': {
        name: 'Topics in Fisheries and Aquatic Sciences (Coral Reef Ecology)',
        credits: 3,
        professor: 'Prof. Reef Anderson',
        rating: 4.6,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 71523, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 71524, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 71525, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] }
        ]
    },
    'FAS4932-IE': {
        name: 'Topics in Fisheries and Aquatic Sciences (Invasion Ecology of Aquatic Animals)',
        credits: 3,
        professor: 'Prof. Tide Wilson',
        rating: 4.0,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 38564, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 38565, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] }
        ]
    },
    'PCB4043C': {
        name: 'General Ecology',
        credits: 4,
        professor: 'Prof. Eco Thompson',
        rating: 4.4,
        prerequisites: ['BSC2011', 'BSC2011L'],
        majorElective: true,
        sections: [
            { id: 82457, times: [{ day: 'M', start: 2, end: 4 }, { day: 'W', start: 2, end: 4 }] },
            { id: 82458, times: [{ day: 'T', start: 3, end: 5 }, { day: 'R', start: 3, end: 5 }] }
        ]
    },
    'PCB4674': {
        name: 'Evolution',
        credits: 4,
        professor: 'Prof. Darwin Garcia',
        rating: 4.3,
        prerequisites: ['BSC2011', 'BSC2011L'],
        majorElective: true,
        sections: [
            { id: 94362, times: [{ day: 'M', start: 1, end: 3 }, { day: 'F', start: 1, end: 3 }] },
            { id: 94363, times: [{ day: 'T', start: 4, end: 6 }, { day: 'R', start: 4, end: 6 }] }
        ]
    },
    'VME4012': {
        name: 'Aquatic Animal Conservation Issues',
        credits: 3,
        professor: 'Prof. Conservation Lee',
        rating: 4.2,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 61739, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 61740, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'VME4906': {
        name: 'Problems in Veterinary Science (Introduction to Marine Wildlife)',
        credits: 3,
        professor: 'Prof. Wildlife Brown',
        rating: 4.1,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 52981, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 52982, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] }
        ]
    },
    'WIS3553C': {
        name: 'Introduction to Conservation Genetics',
        credits: 4,
        professor: 'Prof. Genetics Taylor',
        rating: 4.3,
        prerequisites: ['STA2023'],
        majorElective: true,
        sections: [
            { id: 48726, times: [{ day: 'M', start: 3, end: 5 }, { day: 'W', start: 3, end: 5 }] },
            { id: 48727, times: [{ day: 'T', start: 1, end: 3 }, { day: 'R', start: 1, end: 3 }] }
        ]
    },
    'WIS4203C': {
        name: 'Landscape Ecology and Conservation',
        credits: 3,
        professor: 'Prof. Landscape White',
        rating: 4.0,
        prerequisites: ['STA2023'],
        majorElective: true,
        sections: [
            { id: 35147, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 35148, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] }
        ]
    },
    'ZOO4403C': {
        name: 'Marine Biology',
        credits: 4,
        professor: 'Prof. Ocean Martinez',
        rating: 4.7,
        prerequisites: ['BSC2011', 'BSC2011L'],
        majorElective: true,
        sections: [
            { id: 79415, times: [{ day: 'M', start: 1, end: 3 }, { day: 'W', start: 1, end: 3 }] },
            { id: 79416, times: [{ day: 'T', start: 3, end: 5 }, { day: 'R', start: 3, end: 5 }] }
        ]
    },
    'AEB3450': {
        name: 'Introduction to Natural Resource and Environmental Economics',
        credits: 3,
        professor: 'Prof. Economics Clark',
        rating: 3.9,
        prerequisites: ['AEB3103'],
        majorElective: true,
        sections: [
            { id: 26893, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 26894, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'FNR3602': {
        name: 'Society and Natural Resources',
        credits: 3,
        professor: 'Prof. Society Rodriguez',
        rating: 4.0,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 54728, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] },
            { id: 54729, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] }
        ]
    },
    'GEO4300': {
        name: 'Environmental Biogeography',
        credits: 3,
        professor: 'Prof. Geography Lewis',
        rating: 4.1,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 63582, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 63583, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'WIS4523': {
        name: 'Human Dimensions of Natural Resource Conservation',
        credits: 3,
        professor: 'Prof. Human Walker',
        rating: 3.8,
        prerequisites: ['WIS3401'],
        majorElective: true,
        sections: [
            { id: 41956, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 41957, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] }
        ]
    },
    'EGN4932-PO': {
        name: 'Special Topics (Physical Oceanography)',
        credits: 3,
        professor: 'Prof. Physics Hall',
        rating: 4.2,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 87231, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 87232, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'GLY3074': {
        name: 'Oceans and Global Climate Change',
        credits: 3,
        professor: 'Prof. Climate Young',
        rating: 4.5,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 19674, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 19675, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 19676, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'GLY4734': {
        name: 'Coastal Morphology and Processes',
        credits: 3,
        professor: 'Prof. Coastal Allen',
        rating: 4.3,
        prerequisites: ['GEO2200'],
        majorElective: true,
        sections: [
            { id: 72518, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 72519, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'GLY4930-GO': {
        name: 'Special Topics in Geology (Geochemical Oceanography)',
        credits: 3,
        professor: 'Prof. Geology King',
        rating: 4.0,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 58392, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 58393, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] }
        ]
    },
    'GIS3072C': {
        name: 'Geographic Information Systems',
        credits: 3,
        professor: 'Prof. GIS Wright',
        rating: 4.4,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 34659, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 34660, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'STA4211': {
        name: 'Design of Experiments',
        credits: 3,
        professor: 'Prof. Stats Lopez',
        rating: 3.9,
        prerequisites: ['STA4210'],
        majorElective: true,
        sections: [
            { id: 91247, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 91248, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'WIS4501': {
        name: 'Introduction to Wildlife Population Ecology',
        credits: 3,
        professor: 'Prof. Wildlife Hill',
        rating: 4.2,
        prerequisites: ['PCB3063', 'WIS3401'],
        majorElective: true,
        sections: [
            { id: 65813, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] },
            { id: 65814, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] }
        ]
    },
    'WIS4601C': {
        name: 'Quantitative Wildlife Ecology',
        credits: 3,
        professor: 'Prof. Quantitative Scott',
        rating: 4.1,
        prerequisites: ['STA2023', 'WIS3401'],
        majorElective: true,
        sections: [
            { id: 23785, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 23786, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'FAS6337C': {
        name: 'Fish Population Dynamics',
        credits: 4,
        professor: 'Prof. Fish Green',
        rating: 4.3,
        prerequisites: ['STA6166'],
        majorElective: true,
        sections: [
            { id: 56421, times: [{ day: 'M', start: 1, end: 3 }, { day: 'W', start: 1, end: 3 }] },
            { id: 56422, times: [{ day: 'T', start: 3, end: 5 }, { day: 'R', start: 3, end: 5 }] }
        ]
    },
    'GLY6075': {
        name: 'Global Climate Change: Past, Present, and Future',
        credits: 3,
        professor: 'Prof. Climate Adams',
        rating: 4.6,
        prerequisites: ['GLY4552C'],
        majorElective: true,
        sections: [
            { id: 47593, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] },
            { id: 47594, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] }
        ]
    },
    'OCP6295': {
        name: 'Estuarine and Shelf Hydrodynamics I',
        credits: 3,
        professor: 'Prof. Hydro Baker',
        rating: 4.2,
        prerequisites: ['OCP6050'],
        majorElective: true,
        sections: [
            { id: 81326, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 81327, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'ZOO6406': {
        name: 'Biology of Sea Turtles',
        credits: 3,
        professor: 'Prof. Turtle Nelson',
        rating: 4.8,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 39864, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] },
            { id: 39865, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 39866, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'ZOO6456C': {
        name: 'Ichthyology',
        credits: 4,
        professor: 'Prof. Fish Carter',
        rating: 4.5,
        prerequisites: [],
        majorElective: true,
        sections: [
            { id: 76542, times: [{ day: 'M', start: 2, end: 4 }, { day: 'W', start: 2, end: 4 }] },
            { id: 76543, times: [{ day: 'T', start: 1, end: 3 }, { day: 'R', start: 1, end: 3 }] }
        ]
    }
};

// Mark only current courses as Computer Science (future additions won't be tagged automatically)
const CURRENT_CS_COURSE_IDS = [
    'ENC3246', 'ENC2256', 'MAC2311', 'MAC2312', 'MAC2313', 'MAS3114', 'PHY2048', 'PHY2049', 'STA3032',
    'COP3502C', 'COP3503C', 'COP3530', 'COT3100', 'CDA3101', 'CEN3031', 'CIS4301', 'CIS4914', 'EGN4952',
    'CNT4007', 'COP4020', 'COP4533', 'COP4600', 'EGS4034', 'CGS3065', 'CIS4905', 'CIS4930', 'CIS4940',
    'CIS4949', 'EGN4912', 'EGN4951', 'EIN3354', 'EEL3701C', 'EEL4744C', 'CAI4104', 'CAP3020', 'CAP3027',
    'CAP3032', 'CAP3034', 'CAP3220', 'CAP4053', 'CAP4112', 'CAP4136', 'CAP4174', 'CAP4410', 'CAP4613',
    'CAP4621', 'CAP4641', 'CAP4730', 'CAP4770', 'CAP4773', 'CDA4102', 'CDA4324C', 'CDA4630', 'CEN3913',
    'CEN4072', 'CEN4721', 'CEN4722', 'CEN4725', 'CEN4730', 'CEN4907C', 'CEN4908C', 'CEN4914', 'CGS2032',
    'CGS3063', 'CGS4144', 'CGS4853C', 'CIS4204', 'CIS4213', 'CIS4360', 'CIS4362', 'CIS4715', 'CIS4912C',
    'CIS4913C', 'CNT4520', 'CNT4731', 'COP2271', 'COP3013', 'COP3275', 'COP3504C', 'COP4331', 'COP4554',
    'COP4620', 'COP4720', 'COT4501', 'IDC4710'
];
CURRENT_CS_COURSE_IDS.forEach(id => {
    if (mockCourses[id]) mockCourses[id].computerScienceCourse = true;
});

// Mark marine science courses
const MARINE_SCIENCE_COURSE_IDS = [
    'BSC2010', 'BSC2011', 'CHM2045', 'CHM2046', 'FAS4202C', 'OCE1001', 'STA2023',
    'FAS4270', 'ZOO4926', 'FAS4932', 'FNR3410C', 'STA3024', 'STA4210', 'STA4222',
    'FNR4660', 'GLY3083C', 'PHY2004', 'ZOO4205C', 'FAS2024', 'FAS4305C', 'FAS4932-AIEP',
    'FAS4932-FE', 'FAS4932-CRE', 'FAS4932-IE', 'PCB4043C', 'PCB4674', 'VME4012', 'VME4906',
    'WIS3553C', 'WIS4203C', 'ZOO4403C', 'AEB3450', 'FNR3602', 'GEO4300', 'WIS4523', 'EGN4932-PO',
    'GLY3074', 'GLY4734', 'GLY4930-GO', 'GIS3072C', 'STA4211', 'WIS4501', 'WIS4601C', 'FAS6337C',
    'GLY6075', 'OCP6295', 'ZOO6406', 'ZOO6456C'
];
MARINE_SCIENCE_COURSE_IDS.forEach(id => {
    if (mockCourses[id]) mockCourses[id].marineScienceCourse = true;
});

export const catalogData = Object.entries(mockCourses).map(([id, data]) => ({ id, ...data }));
