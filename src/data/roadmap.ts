
export const status = {
    Done: 'success',
    'In progress': 'warning',
} as any;

export const roadmap = [
    {
        "title": "Core",
        "plugins": [
            {
                status: 'Done',
                "title": " Variables support cross data sources",
                "description": "Manage data sources, including the built-in Main database, external databases, APIs, etc."
            },
            {
                status: 'Done',
                "title": "Link action, supports variables and expressions",
                "description": "An ER diagram-like tool. Currently only the Main database is supported."
            },
            {
                status: 'In progress',
                title: 'Iframe address supports variables.',
                "description": "Manage data sources, including the built-in Main database, external databases, APIs, etc."
            }
        ]
    },
    {
        "title": "Data sources",
        "plugins": [
            {
                "title": "Data source: HTTP API",
                "description": "Use HTTP API as data sources.",
                "isCommercial": true
            }
        ]
    },
    {
        "title": "Collections",
        "plugins": []
    },
    {
        "title": "Collection fields",
        "plugins": []
    },
    {
        "title": "Blocks",
        "plugins": []
    },
    {
        "title": "Actions",
        "plugins": []
    },
    {
        "title": "Users & permissions",
        "plugins": []
    },
    {
        "title": "Authentication",
        "plugins": []
    },
    {
        "title": "Workflow",
        "plugins": []
    },
    {
        "title": "System management",
        "plugins": []
    },
    {
        "title": "Logging and monitoring",
        "plugins": []
    },
    {
        "title": "Integration",
        "plugins": []
    },
    {
        "title": "Others",
        "plugins": []
    }
]