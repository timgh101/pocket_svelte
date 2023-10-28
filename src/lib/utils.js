export const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj);
};



export const validateRegisterData = (/** @type {Iterable<readonly [PropertyKey, any]>} */ formData) => {

    const body = Object.fromEntries(formData);

    if (!Object.hasOwn(body, 'uName')) return 1
    // if (!Object.hasOwn(body, 'email')) return 1
    if (!Object.hasOwn(body, 'password')) return 1
    if (!Object.hasOwn(body, 'passwordConfirm')) return 1

    try {
        if (body.uName.length < 1) return 1
        // if (body.email.length < 1) return 1
        if (body.password.length < 1) return 1
        if (body.passwordConfirm.length < 1) return 1
        if (body.password != body.passwordConfirm) return 1
    } catch {
        return 1
    }

    return body
}

export const validateLoginData = (/** @type {Iterable<readonly [PropertyKey, any]>} */ formData) => {

    const body = Object.fromEntries(formData);

    if (!Object.hasOwn(body, 'uName')) return 1
    if (!Object.hasOwn(body, 'password')) return 1

    try {
        if (body.uName.length < 1) return 1
        if (body.password.length < 1) return 1
    } catch {
        return 1
    }

    return body
}