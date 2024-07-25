

export type TypeDictionary = {
    dictionary: {
        Metadata: {
            title: string;
        };
        Header: {
            links: string[];
        };
        Main: {
            Home: {
                name: string;
                profession: string;
            };
            About: {
                about_me: string;
                paragraph_1: string;
                paragraph_2: string;
            };
            Experience: {
                experience: string;
                freelancer: string;
                text: string;
                paragraph_1: string;
                paragraph_2: string;
                paragraph_3: string;
                paragraph_4: string
            };
            Projects: {
                projects: string;
                projectsAbout: {
                    al_postel: {
                        name: string;
                        about: string;
                    }
                }
            }
        };
    }
}