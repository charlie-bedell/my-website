import { retrieveRepos } from "@/app/lib/services/githubApi"
import { repoData } from "@/app/lib/definitions";

export async function GET() {
  const data: repoData = await retrieveRepos();
  return Response.json({ data })
}
