import Burbujas from "../components/burbujas";
import { Roboto_font } from "@/app/components/fonts";
import CustomRippleCursor from "../components/CustomCursor";
import { PagesStyles } from "../components/pagesstyles";
import RepoImage from "../components/RepoImage";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

async function getRepos(): Promise<GitHubRepo[]> {
  const res = await fetch("https://api.github.com/users/xscriptorcode/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Error al obtener repos");

  return res.json();
}

export default async function ReposPage() {
  const repos = await getRepos();

  return (
    <main className="min-h-screen px-4 py-10 text-white">
      <Burbujas />
      <CustomRippleCursor />
      <h1 className={`${Roboto_font.className} typing ${PagesStyles.titles}`}>
        Projects...
      </h1>

      <div className="fadeInUp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {repos.map((repo: GitHubRepo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${Roboto_font.className} rounded-2xl p-8 border border-white/10 bg-white/10 backdrop-blur-lg backdrop-saturate-150 shadow-md transition-all duration-300 hover:shadow-yellow-400/40 hover:border-yellow-300/30 hover:text-yellow-300`}
          >
            <RepoImage repoName={repo.name} />

            <h2 className="relative text-base font-semibold mb-2 transition-colors duration-300 hover:text-yellow-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-300 after:transition-all after:duration-300">
              {repo.name}
            </h2>

            <p className="text-xs text-gray-200">
              {repo.description || "There's no description"}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
