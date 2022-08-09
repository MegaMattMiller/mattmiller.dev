import { FC } from 'react'

interface CardProps {
  imageSrc: string;
  title: string;
  body: string;
  url: string;
}

const Card:FC<CardProps> = (props) => {
  const navigateToUrl = (): void => {
    window.location.href = props.url
  }


  return (
    <div className="card xl:card-side bg-base-100 shadow-xl mx-4 lg:mx-5 xl:w-full">
      <figure><img src={props.imageSrc} alt="Album" className='h-auto xl:w-[30vw] w-auto' draggable="false" /></figure>
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