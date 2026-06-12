import { useEffect, useMemo, useState } from "react";
import { projects } from "./data/projects.js";

const copy = {
  zh: {
    languageName: "中文",
    switchLabel: "English",
    eyebrow: "项目导航",
    title: "Xuan_tmp",
    intro: "我的小项目合集，欢迎来看！！",
    featured: "置顶项目",
    allProjects: "全部项目",
    empty: "还没有项目。请在 src/data/projects.js 中添加第一条项目资料。",
    techLabel: "技术栈",
    demo: "访问",
    repo: "源码",
    unavailable: "待补充",
    status: {
      active: "维护中",
      completed: "已完成",
      planned: "计划中",
    },
    stats: {
      projects: "项目",
      featured: "置顶",
      tech: "技术",
    },
  },
  en: {
    languageName: "English",
    switchLabel: "中文",
    eyebrow: "Project Directory",
    title: "Xuan_tmp",
    intro: "A collection of my small projects. Welcome!!",
    featured: "Featured",
    allProjects: "All Projects",
    empty: "No projects yet. Add your first project in src/data/projects.js.",
    techLabel: "Tech Stack",
    demo: "Visit",
    repo: "Source",
    unavailable: "Coming soon",
    status: {
      active: "Active",
      completed: "Completed",
      planned: "Planned",
    },
    stats: {
      projects: "Projects",
      featured: "Featured",
      tech: "Tech",
    },
  },
};

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("guide-language");
  if (savedLanguage === "zh" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function ProjectCard({ project, language, labels }) {
  const hasDemo = Boolean(project.links.demo);
  const hasRepo = Boolean(project.links.repo);

  return (
    <article className="project-card">
      <div className="project-card__header">
        <div>
          <h3>{project.name[language]}</h3>
          <span className="status-pill">
            {labels.status[project.status] ?? project.status}
          </span>
        </div>
        {project.featured && <span className="featured-mark">★</span>}
      </div>

      <p>{project.description[language]}</p>

      <div className="tech-list" aria-label={labels.techLabel}>
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {hasDemo ? (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            {labels.demo}
          </a>
        ) : (
          <span>{labels.unavailable}</span>
        )}
        {hasRepo && (
          <a href={project.links.repo} target="_blank" rel="noreferrer">
            {labels.repo}
          </a>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const labels = copy[language];

  useEffect(() => {
    window.localStorage.setItem("guide-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const featuredProjects = projects.filter((project) => project.featured);
  const stats = useMemo(() => {
    const techCount = new Set(projects.flatMap((project) => project.tech)).size;
    return [
      { label: labels.stats.projects, value: projects.length },
      { label: labels.stats.featured, value: featuredProjects.length },
      { label: labels.stats.tech, value: techCount },
    ];
  }, [featuredProjects.length, labels]);

  return (
    <main className="page-shell">
      <header className="hero">
        <nav className="topbar" aria-label="Primary">
          <span>{labels.languageName}</span>
          <button
            type="button"
            className="language-button"
            onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          >
            {labels.switchLabel}
          </button>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">{labels.eyebrow}</p>
          <h1>{labels.title}</h1>
          <p>{labels.intro}</p>
        </div>

        <dl className="stats-panel">
          {stats.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      {featuredProjects.length > 0 && (
        <section className="content-section" aria-labelledby="featured-heading">
          <div className="section-heading">
            <h2 id="featured-heading">{labels.featured}</h2>
          </div>
          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
              />
            ))}
          </div>
        </section>
      )}

      <section className="content-section" aria-labelledby="projects-heading">
        <div className="section-heading">
          <h2 id="projects-heading">{labels.allProjects}</h2>
        </div>

        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">{labels.empty}</p>
        )}
      </section>
    </main>
  );
}
