import { QueryResult, QueryResultRow, VercelClient, createClient } from '@vercel/postgres';
import { repoArrayToObject } from '../util';

const newClient = (): VercelClient => {
	return createClient({
		connectionString: process.env.PSQL_CONNECTION_STRING
	});
}
// TODO: setup api layer to fetch github info on server
export const fetchRepoData = async () => {
	const client = newClient();
	await client.connect();
	const repositories: QueryResult<QueryResultRow> = await client.sql`select * from githubRepositories;`;
	await client.end();
	const repoObjects = repoArrayToObject(repositories.rows);
	return repoObjects;
}


// TODO auth

