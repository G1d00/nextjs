import SearchForm from "../components/SearchForm";


export default function Home() {
  return (
    <>
      <section className="w-full bg-primary1 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">Pitch your Startup, <br/> Connect with entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white max-w-3xl text-center break-words">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. </p>
        <SearchForm/>
      </section> 
    </>
  );
}
