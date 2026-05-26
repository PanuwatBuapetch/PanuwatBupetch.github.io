export default function Projects() {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold mb-2">HRMS System</h3>
          <p className="text-slate-400">ระบบบริหารจัดการบุคคล พัฒนาด้วย .NET และ Blazor</p>
        </div>
        <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold mb-2">Document System (TDX)</h3>
          <p className="text-slate-400">ระบบเอกสารอิเล็กทรอนิกส์พร้อม Workflow อัตโนมัติ</p>
        </div>
      </div>
    </div>
  );
}