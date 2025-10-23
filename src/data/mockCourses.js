export const mockCourses = {
    'COP3502': {
        name: 'Programming Fundamentals 1',
        credits: 3,
        professor: 'Prof. Amanpreet Kapoor',
        rating: 4.5,
        sections: [
            {
                id: 3501,
                times: [
                    { day: 'M', start: 3, end: 4 },
                    { day: 'W', start: 3, end: 4 },
                    { day: 'F', start: 3, end: 4 }
                ]
            },
            {
                id: 1,
                times: [
                    { day: 'T', start: 5, end: 6 },
                    { day: 'R', start: 5, end: 6 }
                ]
            },
            {
                id: 2,
                times: [
                    { day: 'T', start: 2, end: 3 },
                    { day: 'R', start: 2, end: 3 }
                ]
            },
        ]
    },
    'MAC2311': {
        name: 'Calculus 1',
        credits: 4,
        professor: 'Prof. Darryl Jacobs',
        rating: 4.2,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'T', start: 2, end: 3 },
                    { day: 'R', start: 2, end: 3 }
                ]
            },
            {
                id: 1,
                times: [
                    { day: 'M', start: 1, end: 2 },
                    { day: 'W', start: 1, end: 2 },
                    { day: 'F', start: 1, end: 2 }
                ]
            },
        ]
    },
    'ENC1101': {
        name: 'Expository and Argumentative Writing',
        credits: 3,
        professor: 'Prof. Amy Jung',
        rating: 4.8,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'M', start: 5, end: 6 },
                    { day: 'W', start: 5, end: 6 }
                ]
            },
            {
                id: 1,
                times: [
                    { day: 'T', start: 6, end: 7 },
                    { day: 'R', start: 6, end: 7 }
                ]
            },
        ]
    },
    'PHY2048': {
        name: 'Physics with Calculus 1',
        credits: 3,
        professor: 'Prof. Selman Hershfield',
        rating: 3.9,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'T', start: 4, end: 5 },
                    { day: 'R', start: 4, end: 5 }
                ]
            },
        ]
    },
    'CHM2045': {
        name: 'General Chemistry 1',
        credits: 3,
        professor: 'Prof. Melanie Veige',
        rating: 4.1,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'M', start: 7, end: 8 },
                    { day: 'W', start: 7, end: 8 }
                ]
            },
        ]
    },
    'ECO2013': {
        name: 'Principles of Macroeconomics',
        credits: 3,
        professor: 'Prof. Mark Rush',
        rating: 4.6,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'F', start: 5, end: 6 }
                ]
            },
        ]
    },
    'COP3504': {
        name: 'Same time course',
        credits: 3,
        professor: 'loserman',
        rating: 4.5,
        sections: [
            {
                id: 0,
                times: [
                    { day: 'M', start: 3, end: 4 },
                    { day: 'W', start: 3, end: 4 },
                    { day: 'F', start: 3, end: 4 }
                ]
            },
        ]
    },
};

export const catalogData = Object.entries(mockCourses).map(([id, data]) => ({ id, ...data }));
