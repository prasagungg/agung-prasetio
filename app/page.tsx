import Card from "./components/Card";
import projects from "./data/projects";

export default function Home() {
  return (
    <div className="container px-3 mx-auto max-w-2xl">
      <div className="my-4">
        <p>
          Hi. I am Agung prasetio, full-stack web developer who had 2+ years of
          experience
        </p>
        <p>
          I have a deep passion for coding and crafting digital solutions that
          not only meet but exceed expectations.
        </p>
        <p>
          My journey in the world of programming has been a thrilling adventure,
          where I have honed my skills and learned to love every aspect of it.
        </p>
        <p>I believe in the power of code to transform ideas into reality.</p>
      </div>

      <div className="my-4 py-4">
        <h2 className="text-2xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-5">
          {projects.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              img={item.img}
              description={item.description}
              stacks={item.stacks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
