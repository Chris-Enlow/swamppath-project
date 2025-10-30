export const computerScienceCourses = {
    'COP3502': {
        name: 'Programming Fundamentals 1',
        credits: 3,
        professor: 'Prof. Amanpreet Kapoor',
        rating: 4.5,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] },
            { id: 2, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'COP3503': {
        name: 'Programming Fundamentals 2',
        credits: 3,
        professor: 'Prof. Jerzy Szczesny',
        rating: 4.3,
        prerequisites: ['COP3502'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] },
            { id: 2, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    
    'COP3530': {
        name: 'Data Structures and Algorithms',
        credits: 3,
        professor: 'Prof. Alin Dobra',
        rating: 4.1,
        prerequisites: ['COP3503'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }, { day: 'F', start: 4, end: 5 }] },
            { id: 2, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'COT3100': {
        name: 'Applications of Discrete Structures',
        credits: 3,
        professor: 'Prof. Tia Newhall',
        rating: 3.8,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }, { day: 'F', start: 5, end: 6 }] },
            { id: 2, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'CDA3101': {
        name: 'Introduction to Computer Organization',
        credits: 3,
        professor: 'Prof. Mark Schmalz',
        rating: 3.9,
        prerequisites: ['COP3502'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] },
            { id: 2, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'MAC2313': {
        name: 'Calculus 3',
        credits: 4,
        professor: 'Prof. Robert Milnikel',
        rating: 4.0,
        prerequisites: ['MAC2312'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }, { day: 'F', start: 3, end: 4 }] }
        ]
    },
    'PHY2049': {
        name: 'Physics with Calculus 2',
        credits: 3,
        professor: 'Prof. Pradeep Kumar',
        rating: 3.8,
        prerequisites: ['PHY2048', 'MAC2312'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    
    'CEN3031': {
        name: 'Introduction to Software Engineering',
        credits: 3,
        professor: 'Prof. Christina Gardner-McCune',
        rating: 4.4,
        prerequisites: ['COP3530'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] },
            { id: 2, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    },
    'COP4600': {
        name: 'Operating Systems',
        credits: 3,
        professor: 'Prof. Renato Figueiredo',
        rating: 4.2,
        prerequisites: ['COP3530', 'CDA3101'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'COP4020': {
        name: 'Programming Language Concepts',
        credits: 3,
        professor: 'Prof. Manuel Hermenegildo',
        rating: 4.3,
        prerequisites: ['COP3530', 'COT3100'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'COP4533': {
        name: 'Algorithm Abstraction and Design',
        credits: 3,
        professor: 'Prof. Sartaj Sahni',
        rating: 4.1,
        prerequisites: ['COP3530', 'COT3100', 'MAC2313'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'CNT4007': {
        name: 'Computer Network Fundamentals',
        credits: 3,
        professor: 'Prof. Shigang Chen',
        rating: 4.0,
        prerequisites: ['COP3530'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'CIS4301': {
        name: 'Information and Database Systems',
        credits: 3,
        professor: 'Prof. Daisy Wang',
        rating: 4.2,
        prerequisites: ['COP3530'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'COT4501': {
        name: 'Numerical Analysis',
        credits: 3,
        professor: 'Prof. Peter Doyle',
        rating: 3.9,
        prerequisites: ['MAC2313', 'COP3530'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    
    'MAC2311': {
        name: 'Calculus 1',
        credits: 4,
        professor: 'Prof. Darryl Jacobs',
        rating: 4.2,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }, { day: 'F', start: 1, end: 2 }] }
        ]
    },
    'MAC2312': {
        name: 'Calculus 2',
        credits: 4,
        professor: 'Prof. Scott McCullough',
        rating: 3.9,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'PHY2048': {
        name: 'Physics with Calculus 1',
        credits: 3,
        professor: 'Prof. Selman Hershfield',
        rating: 3.9,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    
    'ENC1101': {
        name: 'Expository and Argumentative Writing',
        credits: 3,
        professor: 'Prof. Amy Jung',
        rating: 4.8,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'T', start: 6, end: 7 }, { day: 'R', start: 6, end: 7 }] }
        ]
    }
};

export const marineScienceCourses = {
    'OCE1001': {
        name: 'Introduction to Oceanography',
        credits: 3,
        professor: 'Prof. Peter Sheng',
        rating: 4.5,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] }
        ]
    },
    'BSC2010': {
        name: 'Integrated Principles of Biology 1',
        credits: 3,
        professor: 'Prof. Pamela Ginn',
        rating: 4.0,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'BSC2011': {
        name: 'Integrated Principles of Biology 2',
        credits: 3,
        professor: 'Prof. Susan Cameron',
        rating: 4.1,
        prerequisites: ['BSC2010'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] }
        ]
    },
    'CHM2045': {
        name: 'General Chemistry 1',
        credits: 3,
        professor: 'Prof. Melanie Veige',
        rating: 4.1,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'T', start: 1, end: 2 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'CHM2046': {
        name: 'General Chemistry 2',
        credits: 3,
        professor: 'Prof. Nicole Sampson',
        rating: 3.9,
        prerequisites: ['CHM2045'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 1, end: 2 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'MAC2311': {
        name: 'Calculus 1',
        credits: 4,
        professor: 'Prof. Darryl Jacobs',
        rating: 4.2,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }, { day: 'F', start: 2, end: 3 }] }
        ]
    },
    'PHY2048': {
        name: 'Physics with Calculus 1',
        credits: 3,
        professor: 'Prof. Selman Hershfield',
        rating: 3.9,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 4, end: 5 }, { day: 'R', start: 4, end: 5 }] }
        ]
    },
    'PHY2049': {
        name: 'Physics with Calculus 2',
        credits: 3,
        professor: 'Prof. Pradeep Kumar',
        rating: 3.8,
        prerequisites: ['PHY2048'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'STA2023': {
        name: 'Introduction to Statistics',
        credits: 3,
        professor: 'Prof. George Casella',
        rating: 4.2,
        prerequisites: [],
        sections: [
            { id: 1, times: [{ day: 'T', start: 3, end: 4 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'MAC2312': {
        name: 'Calculus 2',
        credits: 4,
        professor: 'Prof. Scott McCullough',
        rating: 3.9,
        prerequisites: ['MAC2311'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    
    'OCE4008': {
        name: 'Biological Oceanography',
        credits: 3,
        professor: 'Prof. Edward Phlips',
        rating: 4.3,
        prerequisites: ['OCE1001', 'BSC2011'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 3, end: 4 }, { day: 'W', start: 3, end: 4 }] },
            { id: 2, times: [{ day: 'T', start: 2, end: 3 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'GLY4400': {
        name: 'Physical Oceanography',
        credits: 3,
        professor: 'Prof. Mark Luther',
        rating: 4.1,
        prerequisites: ['OCE1001', 'PHY2049', 'MAC2312'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 5, end: 6 }, { day: 'W', start: 5, end: 6 }] }
        ]
    },
    'GLY3083': {
        name: 'Chemical Oceanography',
        credits: 4,
        professor: 'Prof. Thomas Bianchi',
        rating: 4.2,
        prerequisites: ['OCE1001', 'CHM2046'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 3, end: 5 }, { day: 'R', start: 3, end: 4 }] }
        ]
    },
    'FAS4202': {
        name: 'Ichthyology',
        credits: 4,
        professor: 'Prof. Thomas Frazer',
        rating: 4.6,
        prerequisites: ['BSC2011'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 1, end: 3 }, { day: 'W', start: 1, end: 2 }] }
        ]
    },
    'ZOO4205': {
        name: 'Invertebrate Zoology',
        credits: 4,
        professor: 'Prof. Gustav Paulay',
        rating: 4.4,
        prerequisites: ['BSC2011'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 1, end: 3 }, { day: 'R', start: 1, end: 2 }] }
        ]
    },
    'FNR4660': {
        name: 'Fisheries Science',
        credits: 3,
        professor: 'Prof. Michael Allen',
        rating: 4.3,
        prerequisites: ['STA2023', 'BSC2011'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 6, end: 7 }, { day: 'W', start: 6, end: 7 }] }
        ]
    },
    
    'OCE4930': {
        name: 'Marine Conservation Biology',
        credits: 3,
        professor: 'Prof. Michelle Gaither',
        rating: 4.5,
        prerequisites: ['OCE4008', 'FAS4202'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 2, end: 3 }, { day: 'W', start: 2, end: 3 }] }
        ]
    },
    'OCB4680': {
        name: 'Marine Ecology',
        credits: 4,
        professor: 'Prof. Craig Layman',
        rating: 4.7,
        prerequisites: ['OCE4008', 'ZOO4205', 'STA2023'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 2, end: 4 }, { day: 'R', start: 2, end: 3 }] }
        ]
    },
    'GLY4822': {
        name: 'Marine Geology',
        credits: 3,
        professor: 'Prof. David Foster',
        rating: 4.0,
        prerequisites: ['GLY4400', 'GLY3083'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 4, end: 5 }, { day: 'W', start: 4, end: 5 }] }
        ]
    },
    'OCE4934': {
        name: 'Coral Reef Ecosystems',
        credits: 3,
        professor: 'Prof. John Valiela',
        rating: 4.8,
        prerequisites: ['OCE4008', 'ZOO4205'],
        sections: [
            { id: 1, times: [{ day: 'T', start: 5, end: 6 }, { day: 'R', start: 5, end: 6 }] }
        ]
    },
    'BOT4354': {
        name: 'Marine Botany',
        credits: 4,
        professor: 'Prof. Laura Reynolds',
        rating: 4.4,
        prerequisites: ['OCE4008'],
        sections: [
            { id: 1, times: [{ day: 'M', start: 3, end: 5 }] }
        ]
    }
};

export const profileCourseData = {
    alex: {
        major: 'Computer Science',
        courses: computerScienceCourses,
        completedCourses: [
            'MAC2311',
            'COP3502',
            'ENC1101',
            'MAC2312',
            'COP3503',
            'PHY2048',
        ],
        currentSemesterCredits: 45
    },
    jordan: {
        major: 'Marine Science',
        courses: marineScienceCourses,
        completedCourses: [
            'OCE1001',
            'BSC2010',
            'CHM2045',
            'MAC2311',
            'BSC2011',
            'CHM2046',
            'PHY2048',
            'STA2023',
            
            'PHY2049',
            'MAC2312',
        ],
        currentSemesterCredits: 72
    }
};

export function checkPrerequisites(courseId, completedCourses, allCourses) {
    const course = allCourses[courseId];
    if (!course || !course.prerequisites || course.prerequisites.length === 0) {
        return { met: true, missing: [] };
    }
    
    const missing = course.prerequisites.filter(prereq => !completedCourses.includes(prereq));
    return {
        met: missing.length === 0,
        missing: missing
    };
}

export function getAvailableCourses(profileKey) {
    const profileData = profileCourseData[profileKey];
    if (!profileData) return {};
    
    const { courses, completedCourses } = profileData;
    const availableCourses = {};
    
    Object.keys(courses).forEach(courseId => {
        if (completedCourses.includes(courseId)) {
            return;
        }
        
        const prereqCheck = checkPrerequisites(courseId, completedCourses, courses);
        if (prereqCheck.met) {
            availableCourses[courseId] = courses[courseId];
        }
    });
    
    return availableCourses;
}

export function getAllCoursesWithStatus(profileKey) {
    const profileData = profileCourseData[profileKey];
    if (!profileData) return { available: {}, locked: {}, completed: [] };
    
    const { courses, completedCourses } = profileData;
    const availableCourses = {};
    const lockedCourses = {};
    
    Object.keys(courses).forEach(courseId => {
        if (completedCourses.includes(courseId)) {
            return;
        }
        
        const prereqCheck = checkPrerequisites(courseId, completedCourses, courses);
        if (prereqCheck.met) {
            availableCourses[courseId] = courses[courseId];
        } else {
            lockedCourses[courseId] = {
                ...courses[courseId],
                missingPrerequisites: prereqCheck.missing
            };
        }
    });
    
    return {
        available: availableCourses,
        locked: lockedCourses,
        completed: completedCourses
    };
}

export function getCatalogData(profileKey) {
    const availableCourses = getAvailableCourses(profileKey);
    return Object.entries(availableCourses).map(([id, data]) => ({ id, ...data }));
}

export function getLockedCoursesData(profileKey) {
    const { locked } = getAllCoursesWithStatus(profileKey);
    return Object.entries(locked).map(([id, data]) => ({ id, ...data }));
}