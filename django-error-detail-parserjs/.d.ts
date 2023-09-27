export interface IParsedDjangoDetailError {
    [string]: {
        [string]: [string]
    }
}

export function parseDjangoErrorDetailToObject(djangoErrorDetailString: string): IParsedDjangoDetailError;