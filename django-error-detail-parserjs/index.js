function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}




function parseDjangoErrorDetailToObject(djangoErrorDetailString) {
    return JSON.parse(
        replaceAll(
            replaceAll(
                replaceAll(
                    replaceAll(
                        replaceAll(
                            replaceAll(
                                djangoErrorDetailString,
                                "{",
                                "[ErrorDetail("
                            ),
                            "]",
                            ""
                        ),
                        "=",
                        ":"
                    ),
                    ")",
                    "}"
                ),
                "string",
                `"string"`,
            ),
            "code",
            `"code"`
        )
    );
}

export { parseDjangoErrorDetailToObject };

