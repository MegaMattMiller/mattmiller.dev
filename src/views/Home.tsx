import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import gitAliases from '../assets/gitAliases.png'
import powershellHelpers from '../assets/powershellHelpers.png'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex xl:flex-row flex-col justify-evenly mt-5">
        <Card imageSrc={gitAliases} title="My Favorite Git Aliases" body="My collection of aliases for Git. You might find them useful." url="https://github.com/MegaMattMiller/gitAliases" />
        <Card imageSrc={powershellHelpers} title="PowerShell Helpers" body="A collection of helpers to make your day-to-day Powershell use much more pleasant." url="https://github.com/MegaMattMiller/powershellHelpers" />
      </div>
    </div>
  )
}

export default Home