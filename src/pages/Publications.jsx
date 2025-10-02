import React from 'react'

const papers = [
  {
    id: 1,
    author: "Magoni M., Radaelli R.",
    title: "The Climate Transition Strategy of the City of Brescia (Italy)[J]. Urban Resilience and Sustainability, 2023",
    abstract: "/"
  },
  {
    id: 2,
    author: "Smith J., Liu H.",
    title: "AI-Driven Approaches to Renewable Energy Optimization[J]. Energy Systems Review, 2022",
    abstract: "/"
  },
  {
    id: 3,
    author: "Gonzalez P., Ahmed S.",
    title: "Smart Grids and Sustainable Urban Development[J]. Journal of Smart Infrastructure, 2021",
    abstract: "/"
  },
  {
    id: 4,
    author: "Chowdhury T., Patel K.",
    title: "Water Management Strategies in South Asian Megacities[J]. Environmental Policy Journal, 2020",
    abstract: "/"
  },
  {
    id: 5,
    author: "Olsen R., Nakamura Y.",
    title: "Circular Economy in Construction Industries[J]. Sustainable Engineering, 2023",
    abstract: "/"
  },
  {
    id: 6,
    author: "Fernandez L., Ibrahim M.",
    title: "Impact of Climate Change on Coastal Urban Areas[J]. Marine Sustainability Reports, 2021",
    abstract: "/"
  },
  {
    id: 7,
    author: "Khan A., Williams T.",
    title: "Green Transportation Systems for Carbon-Neutral Cities[J]. Urban Mobility Journal, 2022",
    abstract: "/"
  },
  {
    id: 8,
    author: "Zhang W., Rossi L.",
    title: "Digital Twins in Urban Climate Adaptation[J]. Smart City Innovations, 2023",
    abstract: "/"
  },
  {
    id: 9,
    author: "Garcia M., Novak D.",
    title: "Resilient Housing in Post-Disaster Reconstruction[J]. Architecture & Society, 2020",
    abstract: "/"
  },
];


const Publications = () => {
  return (
    <section className="w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8">
      <div style={{ backgroundImage: "url('https://res.cloudinary.com/dz45x9efk/image/upload/v1759431115/pexels-pixabay-256559_c5pjrp.jpg')" }} className="w-full h-[200px] flex items-center justify-center bg-cover bg-center">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">Publications</h1>
        
      </div>
      <div className='w-full md:w-3/4 flex flex-col items-center justify-center gap-6'>
          {
            papers && papers.map((paper)=>{
              const {id, author, title, abstract}= paper
              return <div key={id} className='w-full flex-col flex gap-2 items-start'>
                <h1>{title}</h1>
                <p className='italic font-semibold'>{author}</p>
                <a href={abstract} className='text-white bg-emerald-500 p-2 px-3 rounded-lg w-auto'>Abstract</a>
              </div>
            })
          }

        </div>
    </section>
  )
}

export default Publications
