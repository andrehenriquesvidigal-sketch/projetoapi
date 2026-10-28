type Post = { id: number; title: string; body: string; userId: number};
type PostComments = {
  id: number;
  body: string;
}
import Link from "next/link"
import { notFound } from "next/navigation";
import LikeButton from "./like-button";
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const[res, resComments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
  ]);

  if(!res.ok){
    notFound();
  }

  const post: Post = await res.json();  
  const comments: PostComments[] = await resComments.json();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-xl mb-4 text-center">{post.body}</p>
      <LikeButton></LikeButton>
      <h2 className="text-2xl mb-2 font-bold">Comentários</h2>
      <ul className="text-xl mb-1 font-semibold space-y-4">
        {comments.map((comment) => (
          <li key ={comment.id} className="border border-gray-400 rounded p-4">
            <p>{comment.body}</p>
          </li>
          ))}
      </ul>
      <Link className="text-3xl bg-red-600 text-center cursor-pointer mb-4 rounded" href={"/posts"}>
        Voltar
      </Link>
    </main>
  );
}