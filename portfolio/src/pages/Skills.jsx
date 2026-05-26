export default function Skills() {
  const skills = [".NET 8", "React", "PostgreSQL", "Neo4j", "Blazor", "Node.js"];
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map(s => (
          <div key={s} className="p-6 bg-slate-800 rounded-xl text-center border border-slate-700 hover:border-sky-500 transition-all">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}