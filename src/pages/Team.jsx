import React, { useContext } from 'react'
import { ThemeContext } from '../components/Context'
import TeamBoard from '../components/TeamBoard'

const Team = () => {
  const { team } = useContext(ThemeContext)

  const advisorTeam = team?.filter(member => member.role === 'advisor') || []
  const founderTeam = team?.filter(member => member.role === 'founder') || []
  const mentorTeam = team?.filter(member => member.role === 'mentor') || []
  const leaderTeam = team?.filter(member => member.role === 'leadership') || []
  const researchTeam = team?.filter(member => member.role === 'research') || []
  const specialistTeam = team?.filter(member => member.role === 'specialist') || []
  const supportTeam = team?.filter(member => member.role === 'support') || []


  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-base md:text-3xl font-semibold text-center text-red-500'>Welcome to Our Board</h1>
      {founderTeam.length > 0 && <TeamBoard title='Founder'  groupmember={founderTeam} />}
      {advisorTeam.length > 0 && <TeamBoard title='Advisor'  groupmember={advisorTeam} />}
      {mentorTeam.length > 0 && <TeamBoard title='Mentor'  groupmember={mentorTeam} />}
      {leaderTeam.length > 0 && <TeamBoard title='Leadership'  groupmember={leaderTeam} />}
      {researchTeam.length > 0 && <TeamBoard title='Researchers'  groupmember={researchTeam} />}
      {specialistTeam.length > 0 && <TeamBoard title='Specialist'  groupmember={specialistTeam} />}
      {supportTeam.length > 0 && <TeamBoard title='Supportive members'  groupmember={supportTeam} />}

    </section>
  )
}

export default Team
