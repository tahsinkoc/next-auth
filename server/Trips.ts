export interface Tour {
    id: number;
    agency_id: number;
    user_id: number;
    name: string;
    description: string;
    location: string;
    start_date: string; // ISO formatta string tutulabilir
    end_date: string;
}

export const tours: Tour[] = [
    {
        id: 1,
        agency_id: 1,
        user_id: 1,
        name: "Istanbul Highlights",
        description: "Explore Istanbul city center",
        location: "Istanbul",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 2,
        agency_id: 1,
        user_id: 2,
        name: "Cappadocia Hot Air Balloon",
        description: "Experience hot air balloon rides",
        location: "Cappadocia",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 3,
        agency_id: 2,
        user_id: 3,
        name: "Antalya Beach Relax",
        description: "Relaxing beach holiday",
        location: "Antalya",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 4,
        agency_id: 2,
        user_id: 4,
        name: "Mediterranean Cruise",
        description: "Luxury cruise tour",
        location: "Mediterranean",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 5,
        agency_id: 3,
        user_id: 5,
        name: "Mountain Hiking",
        description: "Guided hiking tours",
        location: "Kaçkar Mountains",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 6,
        agency_id: 3,
        user_id: 1,
        name: "River Rafting",
        description: "Exciting rafting experience",
        location: "Coruh River",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 7,
        agency_id: 4,
        user_id: 2,
        name: "Historic Ankara",
        description: "Explore Ankara's history",
        location: "Ankara",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 8,
        agency_id: 4,
        user_id: 3,
        name: "Museum Tours",
        description: "Visit famous museums",
        location: "Istanbul",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 9,
        agency_id: 5,
        user_id: 4,
        name: "National Parks",
        description: "Nature exploration",
        location: "Yedigöller",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
    {
        id: 10,
        agency_id: 5,
        user_id: 5,
        name: "Forest Camping",
        description: "Camping in forest",
        location: "Kazdağı",
        start_date: "2025-06-16T10:07:08.867592",
        end_date: "2025-06-23T10:07:08.867592"
    },
];
