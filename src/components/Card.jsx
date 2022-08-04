import React from 'react'

const Card = (props) => {
  const navigateToUrl = () => {
    window.location.href = props.url
  }


  return (
    <div className="card xl:card-side bg-base-100 shadow-xl mx-4 lg:mx-5 xl:w-full">
      <figure><img src={props.imageSrc} alt="Album" className='h-auto xl:w-[30vw] w-auto' /></figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={navigateToUrl}>Check it out</button>
        </div>
      </div>
    </div>
  )
}

export default Card