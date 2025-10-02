import React from 'react'

import {Link} from 'react-router-dom'


const latestnews = [
  {
    id: 1,
    date: "2025-09-15",
    author: "John Smith",
    title: "Global Temperatures Reach Record Highs",
    description: "Recent studies indicate that global average temperatures have reached record highs in 2025, surpassing previous records. This increase has led to more frequent and intense heat waves, wildfires, and droughts worldwide, posing significant risks to human health, agriculture, and natural ecosystems. Experts warn that without immediate global action to reduce greenhouse gas emissions, these extreme temperature events will become more severe and persistent."
  },
  {
    id: 2,
    date: "2025-09-10",
    author: "Maria Gonzalez",
    title: "Rising Sea Levels Threaten Coastal Cities",
    description: "Sea levels continue to rise at an accelerated pace due to melting polar ice caps and thermal expansion caused by global warming. Major coastal cities, including Miami, Jakarta, and Venice, face increased flooding risk, which threatens infrastructure, freshwater supplies, and economic stability. Urban planners are now being forced to design adaptive strategies, such as elevated buildings, sea walls, and managed retreats, to protect communities from long-term climate impacts."
  },
  {
    id: 3,
    date: "2025-09-08",
    author: "Liam Chen",
    title: "Wildfires Intensify Across North America",
    description: "North America is experiencing some of the most intense wildfire seasons in history. Prolonged drought conditions, record-breaking temperatures, and high winds have caused fires to spread rapidly across forests and grasslands. Thousands of homes have been destroyed, air quality has drastically deteriorated, and emergency services are stretched thin. Experts warn that as climate change continues, wildfire seasons will lengthen and intensify, making disaster preparedness essential for communities."
  },
  {
    id: 4,
    date: "2025-09-05",
    author: "Fatima Ali",
    title: "Climate Change Impacts Food Security",
    description: "Shifts in temperature, precipitation patterns, and extreme weather events are increasingly threatening global food security. Crops like wheat, rice, and maize are experiencing reduced yields due to droughts, floods, and heat stress. These disruptions not only impact farmers' livelihoods but also threaten to increase food prices and exacerbate hunger in vulnerable regions. Long-term strategies, including climate-resilient crops and sustainable farming practices, are urgently needed to mitigate these risks."
  },
  {
    id: 5,
    date: "2025-08-30",
    author: "Robert Olsen",
    title: "Renewable Energy Adoption Accelerates",
    description: "In response to growing climate threats, countries worldwide are investing heavily in renewable energy infrastructure. Solar, wind, and hydroelectric power installations are increasing rapidly, aiming to replace fossil fuels and reduce carbon emissions. This transition also creates economic opportunities, including job growth in green technology sectors. Despite progress, experts emphasize that achieving climate goals will require accelerated policy support, innovation, and international collaboration to ensure energy sustainability and equitable access."
  },
  {
    id: 6,
    date: "2025-08-25",
    author: "Yuki Nakamura",
    title: "Coral Reefs Face Mass Bleaching",
    description: "Rising ocean temperatures and acidification are causing widespread coral bleaching, threatening the biodiversity of marine ecosystems. Coral reefs, which support a significant portion of marine life, are experiencing increased stress and mortality rates. This loss not only affects fish populations and tourism but also diminishes natural coastal protection. Scientists stress that urgent global action to reduce greenhouse gas emissions and local conservation efforts are critical to preserving these vital ecosystems for future generations."
  },
  {
    id: 7,
    date: "2025-08-20",
    author: "Carlos Ramirez",
    title: "Extreme Storms Increase Globally",
    description: "Recent research indicates a growing frequency and intensity of storms worldwide, linked to human-induced climate change. Hurricanes, typhoons, and cyclones have become more destructive, resulting in loss of life, economic damage, and disruption of essential services. Coastal and low-lying areas are particularly vulnerable, highlighting the urgent need for improved disaster preparedness, resilient infrastructure, and international cooperation to mitigate the impacts of these extreme weather events on populations and economies."
  },
  {
    id: 8,
    date: "2025-08-15",
    author: "Aisha Khan",
    title: "Climate Migration on the Rise",
    description: "As climate-related disasters increase, communities are being forced to relocate from affected regions, creating a rise in climate migration. Flooding, droughts, and sea-level rise are displacing millions, particularly in vulnerable countries. This migration places pressure on urban centers, social services, and international borders. Policymakers are now exploring solutions such as climate-resilient infrastructure, social safety nets, and adaptive planning to ensure that affected populations are supported during displacement and resettlement."
  },
  {
    id: 9,
    date: "2025-08-10",
    author: "David Lee",
    title: "Deforestation Accelerates Global Warming",
    description: "Large-scale deforestation in tropical regions is accelerating global warming by reducing carbon absorption and releasing stored CO2 into the atmosphere. Forest loss impacts biodiversity, water cycles, and soil health, further destabilizing ecosystems. Efforts to combat deforestation include afforestation programs, sustainable logging practices, and stricter environmental regulations. Experts warn that without immediate action, the combined effect of deforestation and climate change could cause irreversible damage to both the environment and human societies."
  },
  {
    id: 10,
    date: "2025-08-05",
    author: "Sophia Rossi",
    title: "Innovative Climate Solutions Emerging",
    description: "Scientists and engineers are developing innovative solutions to mitigate climate change impacts. These include carbon capture technologies, climate-resilient agriculture, renewable energy innovations, and urban planning strategies that reduce emissions. Pilot programs are showing promising results, but large-scale adoption is needed to make a global impact. Collaboration between governments, industries, and communities is crucial to scale these solutions effectively and create a sustainable path toward reducing global greenhouse gas emissions."
  }
];

const News = () => {
  return (
    <section className="w-full min-h-[800px] bg-gray-50 p-6 flex flex-col items-center justify-center gap-8">
      <h1 className='text-4xl font-bold text-emerald-600'>Latest News</h1>
      <p className='text-base sm:text-lg text-center'>Stay updated with our recent discoveries and announcements</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
        {
          latestnews && latestnews.map((news) => {
            const { id, author, title, description, date } = news
            return <div key={id} className='w-full flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-xl hover:scale-[1.03] transition duration-500'>
              <p className='font-semibold text-lg'>{title}</p>
              <div className='w-full flex flex-row items-center justify-between text-emerald-700'>
                <p className='font-semibold italic'>{author}</p>
                <p className='text-xs italic'>{date}</p>

              </div>
              {
                description.length > 100 && <p>{description.slice(0,150)} .... <Link to={`/news/${id}`} className='italic text-green-600'>see more</Link></p>
              }
            </div>
          })
        }

      </div>

    </section>
  )
}

export default News
