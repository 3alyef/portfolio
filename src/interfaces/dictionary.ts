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
        };
    }
}