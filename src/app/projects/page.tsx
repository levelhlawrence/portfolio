import Projects from "../../components/Projects";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-8 px-6">
      <div className="m max-w-3xl min-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 md:text-left text-center">
          Portfolio
        </h1>
        <div className="flex items-center justify-center md:justify-start">
          <Projects />
        </div>
      </div>
    </section>
  );
}
