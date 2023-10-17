function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}




function parseDjangoErrorDetailToObject(djangoErrorDetailString) {
    const result = {};
    try {
        result = JSON.parse(
            replaceAll(
                replaceAll(
                    replaceAll(
                        replaceAll(
                            replaceAll(
                                replaceAll(
                                    replaceAll(
                                        djangoErrorDetailString,
                                        "[ErrorDetail(",
                                        "{",
                                    ),
                                    `'`,
                                    `"`
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
    } catch (error) {

    } finally {
        return result;
    }
}

export { parseDjangoErrorDetailToObject };

