import React from 'react'

import { TbMapSearch } from "react-icons/tb";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa"; 

const missions = [
  {
    title: "Advanced Research & Strategies",
    icon: <TbMapSearch />,
    color: "text-blue-600",
    description: "To advance research on climate impacts and resilience strategies.",
  },
  {
    title: "Technology & Innovation",
    icon: <FaHandHoldingHand />, 
    color: "text-cyan-600",
    description: "To leverage cutting-edge tools like GIS, remote sensing, and machine learning for sustainable development.",
  },
  {
    title: "Collaboration & Policy",
    icon: <GiPalmTree />, 
    color: "text-emerald-600",
    description: "To foster interdisciplinary collaboration and bridge the gap between research and actionable policies.",
  },
  {
    title: "Training & Capacity Building",
    icon: <FaGraduationCap />,
    color: "text-amber-600",
    description: "To train the next generation of climate researchers and practitioners.",
  },
];

const objectives = [
  "Conduct research on climate impacts, mitigation, and adaptation.",
  "Utilize geospatial and remote sensing technologies for environmental monitoring.",
  "Develop solutions for water resource management, disaster resilience, and food security.",
  "Publish high-impact research and provide actionable recommendations to policymakers.",
  "Create platforms for knowledge dissemination through workshops, seminars, and publications.",
];

const Mission = () => {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-gray-50 flex flex-col items-center gap-16">
      
      {/* Vision */}
      <div className="text-center max-w-3xl animate-fadeIn">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Vision</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          To become a globally recognized research hub that drives climate resilience through advanced research and community collaboration.
        </p>
      </div>

      {/* Mission */}
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-semibold text-gray-900 text-center mb-12 tracking-tight">Mission</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => {
            const { title, icon, description, color } = mission;
            return (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center 
                           hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              >
                <div className={`text-5xl mb-4 ${color}`}>{icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Objectives */}
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-semibold text-gray-900 text-center mb-8 tracking-tight">Objectives</h1>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed animate-fadeIn">
          {objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Mission
