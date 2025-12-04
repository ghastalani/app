'use client';

import React from 'react';
import { ExternalLink, Leaf, Users, TrendingUp, Award, Sparkles, ArrowRight } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function RSEByDesign() {
  const sections = [
    {
      id: 'definition',
      icon: <Leaf className="w-6 h-6" />,
      title: "Qu'est-ce que le RSE ?",
      description:
        "L'intégration volontaire de préoccupations sociales et environnementales. Un impact positif sur la société tout en maintenant la viabilité économique.",
      link: "https://www.iso.org/fr/iso-26000-social-responsibility.html",
      linkText: "ISO 26000",
    },
    {
      id: 'importance',
      icon: <Users className="w-6 h-6" />,
      title: "Pourquoi c'est crucial ?",
      description:
        "Améliore la réputation, attire les talents et crée de la valeur. Les entreprises responsables innovent et contribuent positivement au monde.",
      link: "https://www.un.org/sustainabledevelopment/fr/",
      linkText: "Objectifs ONU",
    },
    {
      id: 'impact',
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Impact Durable",
      description:
        "Réduire l'empreinte carbone et promouvoir l'équité. Des emplois verts et un avenir viable pour les générations futures.",
      link: "https://ec.europa.eu/environment/index_fr.htm",
      linkText: "Commission UE",
    },
    {
      id: 'exemples',
      icon: <Award className="w-6 h-6" />,
      title: "Réussites",
      description:
        "Programmes zéro déchet, énergies renouvelables et inclusion. La preuve que rentabilité et responsabilité vont de pair.",
      link: "https://www.entreprises.gouv.fr/fr/responsabilite-sociale-des-entreprises",
      linkText: "Exemples Gouv",
    },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[rgb(var(--secondary-color))] selection:text-white overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[rgb(var(--primary-color))] opacity-[0.03] blur-3xl animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[rgb(var(--secondary-color))] opacity-[0.03] blur-3xl animate-float-delayed" />
      </div>

      {/* Compact Floating Navbar */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-[rgba(var(--primary-color),0.1)] transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] p-1.5 rounded-full shadow-md animate-pulse">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-[rgb(var(--primary-color))] to-[rgb(var(--secondary-color))] bg-clip-text text-transparent">
              RSE by Design
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-[rgba(var(--primary-color),0.1)] text-[rgb(var(--primary-color))] text-xs font-bold tracking-wider mb-6 border border-[rgba(var(--primary-color),0.2)]">
            NOUVELLE ÈRE
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Construire un <br />
            <span className="bg-gradient-to-r from-[rgb(var(--primary-color))] via-[rgb(var(--secondary-color))] to-[rgb(var(--accent-color))] bg-clip-text text-transparent">
              Avenir Responsable
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(var(--text-secondary))] max-w-2xl mx-auto leading-relaxed mb-10">
            Transformez votre entreprise avec des pratiques durables.
            Créez un impact positif pour votre organisation et la société.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <article
              key={section.id}
              className={`glass-panel rounded-3xl p-6 sm:p-8 hover:scale-[1.02] transition-all duration-300 group cursor-default animate-fade-in-up`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-[rgba(var(--primary-color),0.1)] to-[rgba(var(--secondary-color),0.1)] p-3 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
                  <div style={{ color: 'rgb(var(--primary-color))' }}>
                    {section.icon}
                  </div>
                </div>
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--secondary-color))] transition-colors p-2"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(var(--text-primary))' }}>
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgb(var(--text-secondary))' }}>
                {section.description}
              </p>

              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider group/link"
                style={{ color: 'rgb(var(--primary-color))' }}
              >
                <span>{section.linkText}</span>
                <ArrowRight className="w-3 h-3 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="text-center py-12 border-t border-[rgba(var(--card-border),0.3)] relative z-10">
        <p className="text-sm" style={{ color: 'rgb(var(--text-tertiary))' }}>
          © 2024 RSE by Design. <span className="opacity-50">Fait avec passion.</span>
        </p>
      </footer>
    </div>
  );
}