import "../styles/Experience.css";

const experiences = [
  {
    company: "Accenture — Brasil",
    role: "Desenvolvedor Backend — Oracle BRM",
    period: "08/2025 — presente",
    highlights: [
      "Desenvolvimento de soluções backend focadas em regras de negócio e objetivos estratégicos dos clientes.",
      "Especialização no sistema de faturamento Oracle BRM.",
      "Colaboração em times para levantamento de requisitos, modelagem de dados e resolução de problemas complexos.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-container">
      <div className="section-content">
        <h2 className="experience-title">experiência</h2>
        <div className="scrollbar">
          <div className="scroll-indicator-2 active"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <article key={exp.company} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
