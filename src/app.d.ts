import PocketBase, { BaseAuthStore, type AuthModel } from 'pocketbase';

interface User {
	avatar: string,
	id: string,
	username: string
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase
			user: User | undefined
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
