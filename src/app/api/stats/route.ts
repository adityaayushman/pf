// Live GitHub + LeetCode stats, fetched server-side and cached for 1 hour.
// Server-side avoids browser CORS (LeetCode) and keeps us well under API rate
// limits. Every branch fails gracefully to null so the UI can fall back.

const GH_USER = "adityaayushman";
const LC_USER = "AdityaAyushmanSahoo";

// Cache this route's response for an hour (ISR).
export const revalidate = 3600;

async function getGitHub(): Promise<{ repos: number } | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}`, {
      headers: {
        "User-Agent": "portfolio-stats",
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { public_repos?: number };
    if (typeof data.public_repos !== "number") return null;
    return { repos: data.public_repos };
  } catch {
    return null;
  }
}

type AcNum = { difficulty: string; count: number };

async function getLeetCode(): Promise<{ solved: number; hard: number } | null> {
  try {
    const query =
      "query($u:String!){ matchedUser(username:$u){ submitStatsGlobal{ acSubmissionNum{ difficulty count } } } }";
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Referer: `https://leetcode.com/u/${LC_USER}/`,
      },
      body: JSON.stringify({ query, variables: { u: LC_USER } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      data?: {
        matchedUser?: { submitStatsGlobal?: { acSubmissionNum?: AcNum[] } };
      };
    };
    const arr = json.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    if (!arr) return null;
    const all = arr.find((x) => x.difficulty === "All");
    const hard = arr.find((x) => x.difficulty === "Hard");
    if (!all) return null;
    return { solved: all.count, hard: hard?.count ?? 0 };
  } catch {
    return null;
  }
}

export async function GET() {
  const [github, leetcode] = await Promise.all([getGitHub(), getLeetCode()]);
  return Response.json({ github, leetcode });
}
