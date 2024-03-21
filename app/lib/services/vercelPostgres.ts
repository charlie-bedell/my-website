import { createClient } from '@vercel/postgres';

// TODO setup config for vercel postgress
const client = createClient({
	// config here
	// https://github.com/vercel/storage/tree/main/packages/postgres#readme
	connectionString: process.env.PSQL_CONNECTION_STRING
})


// TODO auth

