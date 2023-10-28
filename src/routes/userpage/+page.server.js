import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, 'Unauthorized');
    }
    return {
        user: locals.user
    }
}