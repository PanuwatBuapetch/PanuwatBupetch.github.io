export default function Hero() {
  return (
    <section id="about" className="py-20 flex flex-col items-center text-center">
      <div className="w-32 h-32 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full mb-8 p-1">
        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-4xl font-bold">
          PB
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
        Panuwat Buapetch
      </h1>
      <p className="text-xl md:text-2xl text-sky-400 font-medium mb-6">
        Software Engineer | .NET Specialist
      </p>
      <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
        มุ่งเน้นการสร้างสถาปัตยกรรมซอฟต์แวร์ที่แข็งแกร่งด้วย .NET และระบบฐานข้อมูลขั้นสูง 
        เชี่ยวชาญการออกแบบระบบ Enterprise ที่ต้องการความแม่นยำและประสิทธิภาพสูง
      </p>
    </section>
  );
}