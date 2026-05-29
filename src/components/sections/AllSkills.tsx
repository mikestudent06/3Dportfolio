"use client";

import Link from "next/link";
import { ArrowLeft, LucideIcon, Code2, Server, Database, TestTube, Rocket, Wrench, FileCode, Zap, Globe, Smartphone, Palette, Boxes, GitBranch, Cloud, CheckCircle, Sparkles, Layers, MessageCircle, Users, Brain } from "lucide-react";
import TitleHeader from "@/components/ui/TitleHeader";
import { skills, texts } from "@/lib/constants";

const getSkillIcon = (skillName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    "HTML5": Code2, "CSS3": FileCode, "Tailwind CSS": Palette, "JavaScript (ES6+)": FileCode,
    "TypeScript": FileCode, "React.js": Zap, "React Native": Smartphone, "ShadCN UI": Boxes,
    "Redux Toolkit": Boxes, "Zustand": Boxes, "GSAP": Sparkles, "Node.js": Server,
    "Express.js": Server, "NestJS": Server, "API REST": Globe, "JWT": CheckCircle,
    "Domain Driven Design": Layers, "MongoDB": Database, "MongoDB Atlas": Database, "SQL": Database,
    "Postman": TestTube, "Tests API": TestTube, "Git & GitHub": GitBranch, "Vercel": Cloud,
    "Render": Cloud, "Netlify": Cloud, "Cursor": Code2, "Figma": Palette,
    "React Query (TanStack)": Zap, "UML": Layers, "Prompt IA": Brain,
    "Communication": MessageCircle, "Travail d'équipe": Users,
  };
  return iconMap[skillName] || Code2;
};

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2, backend: Server, database: Database, testing: TestTube,
  devops: Rocket, tools: Wrench, softSkills: Users,
};

export const AllSkills = () => {
  const categories = [
    { key: "frontend", label: texts.skills.categories.frontend, skills: skills.frontend },
    { key: "backend", label: texts.skills.categories.backend, skills: skills.backend },
    { key: "database", label: texts.skills.categories.database, skills: skills.database },
    { key: "testing", label: texts.skills.categories.testing, skills: skills.testing },
    { key: "devops", label: texts.skills.categories.devops, skills: skills.devops },
    { key: "tools", label: texts.skills.categories.tools, skills: skills.tools },
    { key: "softSkills", label: texts.skills.categories.softSkills, skills: skills.softSkills },
  ];

  return (
    <section id="all-skills" className="page-section pt-0">
      <div className="page-container">
        <TitleHeader title={texts.skills.title} sub={texts.skills.subtitle} />
        <p className="text-center text-white-50 max-w-2xl mx-auto mt-6 mb-16">{texts.skills.description}</p>

        <div className="space-y-16" data-reveal-stagger>
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category.key];
            return (
              <div key={category.key} data-reveal-item>
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-12 rounded-xl bg-black-200 border border-black-50 flex-center">
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">{category.label}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.skills.map((skill) => {
                    const SkillIcon = getSkillIcon(skill);
                    return (
                      <div key={skill} className="page-card-hover card text-center p-6 group">
                        <div className="size-14 mx-auto rounded-xl bg-black-200 border border-black-50 flex-center mb-3 group-hover:bg-blue-100 transition-colors">
                          <SkillIcon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-sm font-medium text-white-50 group-hover:text-white">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/" className="cta-wrapper inline-block">
            <div className="cta-button group px-8 py-3">
              <div className="bg-circle" />
              <p className="text flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> {texts.skills.backToHome}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
