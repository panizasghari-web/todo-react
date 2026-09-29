import { Link } from "react-router";

function Home() {
  return (
    <section className="w-full md:w-1/2 px-5 md:pl-16 pt-16">
      <h1 className="mb-8 text-3xl text-indigo-600 font-bold">
        ToDo App (SPA)
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi
        dolore ab quasi cum ratione explicabo eos molestias consequuntur
        laboriosam ex voluptate corporis voluptates nisi, deserunt enim porro
        quos placeat. Rerum harum amet quo ipsa? Quaerat natus asperiores,
        maxime quasi vero, debitis maiores minus labore consequatur iste
        molestiae dolorum quidem quos laboriosam dolore architecto tempora hic
        soluta. Consectetur, ab deleniti.
      </p>
      <Link to="/lists" className="w-20 h-10 flex justify-center items-center rounded-[5px] text-[20px] text-white bg-indigo-600 hover:border-2 hover:border-indigo-600 hover:bg-white hover:text-indigo-600 transition-all duration-150 ease-linear mt-8">Lists</Link>
    </section>
  );
}

export default Home;
