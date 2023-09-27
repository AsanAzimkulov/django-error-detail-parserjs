interface IParsedDjangoDetailError {
    string: {
        string: string
    }
}

export declare function parseDjangoErrorDetailToObject(djangoErrorDetailString: string): IParsedDjangoDetailError;