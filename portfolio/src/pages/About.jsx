export default function About() {
  return (
    <main className="container">
      <section className="profile-header">
        <h1>Panuwat Buapetch</h1>
        <p className="subtitle">Software Engineer</p>
      </section>

      <div className="content-wrapper">
        <p className="intro-text">
          Software Engineer ผู้เชี่ยวชาญในระบบ .NET Ecosystem มีประสบการณ์พัฒนา RESTful APIs 
          และสร้าง UI ที่ตอบสนองฉับไวด้วย Blazor
        </p>

        <section className="work-experience">
          <h3>Work Experience</h3>
          <div className="card">
            <h4>Digital Innovation and Intelligent Systems Office</h4>
            <p className="university">Prince of Songkla University</p>
            <ul>
              <li>Software Developer (2024-2025)</li>
              <li>Software Developer Trainee (Nov 2023 - Mar 2024)</li>
            </ul>
          </div>
        </section>

        <section className="specialties">
          <p>
            มีความเชี่ยวชาญด้านการออกแบบ System Architecture และโครงสร้างฐานข้อมูลทั้ง 
            PostgreSQL และ Neo4j สำหรับจัดการ Workflow ระบบเอกสารราชการ
          </p>
          <p>
            ผ่านประสบการณ์การพัฒนาระบบจริง เช่น HR Management System และระบบแลกเปลี่ยนเอกสาร (TDX) 
            พร้อมมุ่งมั่นในการเรียนรู้เทคโนโลยีใหม่ๆ เพื่อสร้างโซลูชันที่ตอบโจทย์ผู้ใช้งาน
          </p>
        </section>
      </div>
    </main>
  );
}