import { VercelClient, createClient } from '@vercel/postgres';
import { retrieveRepos } from '../lib/services/githubApi';
// TODO auth

async function seedGitHubRepositories(client: VercelClient) {
	try {
		const createTable = await client.sql`
CREATE TABLE IF NOT EXISTS
githubRepositories(
id SERIAL PRIMARY KEY,
repo_id INT,
name VARCHAR(255),
description TEXT,
readme TEXT
);
`;

		console.log("Created githubRepositories table");
		// GET REPO CONTENTS
		console.log('retrieving repositories...');
		const repositories = await retrieveRepos();
		console.log('repositories retrieved!');

		console.log('writing repos to DB...');
		const insertedRepositories = await Promise.all(
			Array.from(Object.values(repositories)).map(async (repo) => {
				return client.sql`
INSERT INTO githubRepositories (repo_id, name, description, readme)
VALUES (${repo.id}, ${repo.name}, ${repo.description}, ${repo.readme})
`;
			})
		);
		console.log(`seeded ${insertedRepositories.length} repositories`);

		return {
			createTable,
			repos: insertedRepositories,
		};
	} catch (err) {
		console.error("error creating githubRepositories table: ", err);
	}
	
	
}

async function createOverviewTable(client: VercelClient) {
	try {
		client.sql`
CREATE TABLE IF NOT EXISTS repoOverviews (
id SERIAL PRIMARY KEY,
content TEXT NOT NULL,
repo_id INT NOT NULL,
FOREIGN KEY (repo_id) REFERENCES githubRepositories(repo_id)
);
`;
	} catch (err) {
		console.error("error creating repoOverviews table: ", err);
	}
}

async function createBlogTable(client: VercelClient) {
	try {
		client.sql`
CREATE TABLE IF NOT EXISTS blogArticles (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255),
content TEXT NOT NULL
);
`;
	} catch (err) {
		console.error("unable to create Blog table: ", err);
	}
}

async function main() {
	const client = createClient({
		connectionString: process.env.PSQL_CONNECTION_STRING
	});
	await client.connect();
	await seedGitHubRepositories(client);
	await createOverviewTable(client);
	await createBlogTable(client);
	console.log("closing connection.");
	await client.end();
}

main().catch((err) => {
	console.error('An error occurred while attempting to seed the database: ', err);
});
