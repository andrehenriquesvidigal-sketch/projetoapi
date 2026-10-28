import Link from "next/link";
import type { Post } from "./types";
const API = 'https://jsonplaceholder.typicode.com'
type posts = {id: number; title: string; body: string; userId: number }
export default async function PostsPage() {
  "use cache"
  const res = await fetch(`${API}/posts`);
  const posts: Post[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <ul className="list-disc pl-6">
        {posts.map((post) => (
             <li key={post.id} className="border border-gray-400 rounded p-4">
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
             </li>
        ))}
      </ul>
    </main>
  );
}