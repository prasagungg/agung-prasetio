import Card from "../components/Card";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="container px-3 mx-auto max-w-2xl">
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
  );
}
