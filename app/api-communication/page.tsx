import { ButtonLink } from "@/components/ButtonLink";

export default async function FetchApiView() {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  // Fetch data from the API.
  const response = await fetch(URL);
  const data = await response.json();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-700 mb-5">Posts List</h1>
      <div className="flex flex-wrap justify-center items-center">
        {data.slice(0, 6).map((post: (typeof data)[0], index: number) => (
          <div key={post.id} className="w-72 shadow-lg m-6 p-4">
            <h2 className="font-bold text-xl mb-4">{post.title.toUpperCase()}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <ButtonLink href="/" />
    </div>
  );
}
