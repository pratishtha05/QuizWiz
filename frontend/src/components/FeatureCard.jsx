import React from 'react'

const FeatureCard = ({icon, title, description}) => {
  return (
    <>
      <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/20 transition">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
    </>
  )
}

export default FeatureCard
