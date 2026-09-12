import React from 'react'
import MembershipHero from '../sections/Members/MembershipHero'
import MembershipIntro from '../sections/Members/MembershipIntro'
import HowToRegister from '../sections/Members/HowToRegister'
import MembershipBenefits from '../sections/Members/MembershipBenefits'
import CodeOfConduct from '../sections/Members/CodeOfConduct'
import MembershipCTA from '../sections/Members/MembershipCTA'

const Membership = () => {
  return (
   <>
   <MembershipHero  />
   <MembershipIntro />
   <HowToRegister />
   <MembershipBenefits />
   <CodeOfConduct />
   <MembershipCTA />
   </>
  )
}

export default Membership
