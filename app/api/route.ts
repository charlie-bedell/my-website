import { fetchRepoData } from '@/app/lib/services/vercelPostgres';

export async function GET() {
	const data = await fetchRepoData();
	return Response.json(data);
}
