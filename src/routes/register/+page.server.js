import { error, redirect } from '@sveltejs/kit';
import { validateRegisterData } from "$lib/utils.js"

export const actions = {
    register: async ({ locals, request }) => {
        const fd = await request.formData()
        const formData = validateRegisterData(fd)
        if (formData === 1) {
            // error validating form
            console.log('error validating form');
            throw error(500, 'Something went wrong');
        }

        // remove spaces
        const username = formData.uName.split(' ').join('')


        const data = {
            "username": username,
            "password": formData.password,
            "passwordConfirm": formData.passwordConfirm
        };

        try {

            try {
                await locals.pb.collection('users').create(data);
                // user created, now login
                await locals.pb
                    .collection("users")
                    .authWithPassword(data.username, data.password);
            } catch (error) {
                console.log(JSON.stringify(error, null, 4))
                return { loginError: true };
            }


        } catch (err) {
            console.log('Error: ', console.log(JSON.stringify(err, null, 4)));
            throw error(500, 'Something went wrong');
        }

        throw redirect(303, '/userpage');
    }
};
