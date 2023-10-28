// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import { validateLoginData } from "$lib/utils.js"

export const actions = {
    login: async ({ locals, request }) => {
        const fd = await request.formData()
        const formData = validateLoginData(fd)
        if (formData === 1) {
            // error validating form
            console.log('error validating form');
            throw error(500, 'Something went wrong');
        }


        try {
            try {
                await locals.pb
                    .collection("users")
                    .authWithPassword(formData.uName, formData.password);
            } catch (error) {
                return { loginError: true };
            }

        } catch (err) {
            console.log("Error: ", err);
            throw error(err.status, err.message);
        }

        // everything went well
        throw redirect(303, '/userpage');
    }
};



