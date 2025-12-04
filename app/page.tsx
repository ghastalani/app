'use client';

import React from 'react';
import { ExternalLink, Leaf, Users, TrendingUp, Award } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function RSEByDesign() {
  const sections = [
    {
      id: 'definition',
      icon: <Leaf className="w-8 h-8" />,
      title: "Qu'est-ce que le RSE ?",
      description: "La Responsabilité Sociale des Entreprises (RSE) désigne l'intégration volontaire par les entreprises de préoccupations sociales et environnementales dans leurs activités commerciales et leurs relations avec les parties prenantes. Elle vise à créer un impact positif sur la société tout en maintenant la viabilité économique.",
      link: "https://www.iso.org/fr/iso-26000-social-responsibility.html",
      linkText: "En savoir plus sur ISO 26000"
    },
    {
      id: 'importance',
      icon: <Users className="w-8 h-8" />,
      title: "L'importance de la responsabilité sociale des entreprises",
      description: "La RSE est devenue cruciale pour les entreprises modernes. Elle améliore la réputation, attire les talents, renforce la fidélité des clients et crée de la valeur à long terme. Les entreprises responsables sont mieux positionnées pour gérer les risques, innover et contribuer positivement à la société.",
      link: "https://www.un.org/sustainabledevelopment/fr/",
      linkText: "Objectifs de développement durable de l'ONU"
    },
    {
      id: 'impact',
      icon: <TrendingUp className="w-8 h-8" />,
      title: "L'impact de la durabilité sur l'environnement et la société",
      description: "La durabilité transforme notre approche des affaires en réduisant l'empreinte carbone, en préservant les ressources naturelles et en promouvant l'équité sociale. Les pratiques durables créent des emplois verts, améliorent la santé publique et assurent un avenir viable pour les générations futures.",
      link: "https://ec.europa.eu/environment/index_fr.htm",
      linkText: "Commission européenne - Environnement"
    },
    {
      id: 'exemples',
      icon: <Award className="w-8 h-8" />,
      title: "Exemples de projets RSE réussis",
      description: "De nombreuses entreprises ont mis en œuvre des initiatives RSE remarquables : programmes de réduction des déchets, investissements dans les énergies renouvelables, projets d'inclusion sociale, et partenariats avec des ONG. Ces exemples démontrent qu'il est possible de concilier rentabilité et responsabilité sociale.",
      link: "https://www.entreprises.gouv.fr/fr/responsabilite-sociale-des-entreprises",
      linkText: "Exemples et ressources gouvernementales"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Header */}
      <header className="shadow-md sticky top-0 z-50 transition-colors duration-300" style={{ backgroundColor: `rgb(var(--header-bg))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-xl shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                RSE by Design
              </h1>
            </div>
            <ThemeToggle />
          </div>
          <p className="mt-3 text-lg max-w-3xl transition-colors duration-300" style={{ color: `rgb(var(--text-secondary))` }}>
            Conception et mise en œuvre de stratégies de responsabilité sociale pour un avenir durable
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl shadow-2xl p-12 text-white">
          <h2 className="text-5xl font-bold mb-6">
            Construire un avenir responsable
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl leading-relaxed">
            RSE by Design vous accompagne dans la transformation de votre entreprise
            vers des pratiques plus durables et socialement responsables. Ensemble,
            créons un impact positif pour votre organisation et la société.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {sections.map((section, index) => (
          <article
            key={section.id}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            style={{ backgroundColor: `rgb(var(--card-bg))` }}
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-4 rounded-xl flex-shrink-0">
                  <div className="text-emerald-700">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 transition-colors duration-300" style={{ color: `rgb(var(--text-primary))` }}>
                    {section.title}
                  </h3>
                  <p className="text-lg leading-relaxed transition-colors duration-300" style={{ color: `rgb(var(--text-secondary))` }}>
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-start">
                <a
                  href={section.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>{section.linkText}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-white mt-20 transition-colors duration-300" style={{ backgroundColor: `rgb(var(--footer-bg))` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <span>RSE by Design</span>
              </h4>
              <p className="text-gray-400">
                Votre partenaire pour une transformation durable et responsable.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Ressources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#definition" className="hover:text-emerald-400 transition-colors">RSE définition</a></li>
                <li><a href="#importance" className="hover:text-emerald-400 transition-colors">Importance</a></li>
                <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Impact</a></li>
                <li><a href="#exemples" className="hover:text-emerald-400 transition-colors">Exemples</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">
                Contactez-nous pour en savoir plus sur nos services et comment nous pouvons vous aider.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RSE by Design. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}