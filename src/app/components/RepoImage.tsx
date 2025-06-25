"use client";

interface RepoImageProps {
  repoName: string;
}

export default function RepoImage({ repoName }: RepoImageProps) {
  const fallback = `https://opengraph.githubassets.com/1/xscriptorcode/${repoName}`;

  return (
    <img
      src={`https://raw.githubusercontent.com/xscriptorcode/${repoName}/main/screenshots/preview.png`}
      alt={`Preview de ${repoName}`}
      className="w-full h-40 object-cover rounded-xl mb-4"
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallback;
      }}
    />
  );
}
