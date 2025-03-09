import React from 'react'

const StepCard = ({number, title,description}) => {
  return (
    <>
      <div className="relative p-6">
            <div className="text-6xl font-bold text-yellow-400/20 absolute top-0 left-0">
              {number}
            </div>
            <div className="relative z-10 mt-8">
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </div>
          </div>
    </>
  )
}

export default StepCard
