import { redirect } from '@sveltejs/kit';

// @ts-ignore
export const POST = ({ locals }) => {
    locals.user = undefined;
    locals.pb.authStore.clear();

    throw redirect(303, '/');
};
