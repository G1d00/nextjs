import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [{ 
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: "John Doe" },
    _id: 1,
    description: "this is a description",
    image: 'https://placehold.co/600x400',
    category: "Robots",
    title: "weRobots",
   },]

  return (
    <>
      <section className="w-full bg-primary1 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">Pitch your Startup, <br/> Connect with entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white max-w-3xl text-center break-words">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. </p>
        <SearchForm query={query}/>
      </section> 
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key= {post?._id} post= {post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
