

import React from 'react'
import {Check} from 'lucide-react'
import {Link} from "react-router-dom"

const Pricing = () => {
  const pricing = [
   { imgUrl: "/pricing.jpg",
    title: "Quaralateraley",
    price: 1200,
    length: 3
  },
  { imgUrl: "/pricing.jpg",
    title: "Half_year",
    price: 1800,
    length: 6
  },
  { imgUrl: "/pricing.jpg",
    title: "yearley",
    price: 2200,
    length: 12
  },
  ]
  return (
    <section className='pricing'>
      <h1 className='pt-3 pb-2 font-bold dark:text-gray-900 text-5xl text-center cursor-default'>Ultimate fintess gym plans</h1>
      <div className="wrapper">
        {
          pricing.map(element =>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>Package</h1>
                  <h3>Rs {element.price}</h3>
                  <p>for {element.length} months</p>
                </div>
                <div className="description">
                  <p>
                    <Check/> Equipment

                  </p>
                  <p>
                    <Check/> All day training

                  </p>
                  <p>
                    <Check/> Under trainer

                  </p>
                  <p>
                    <Check/> safely

                  </p>
                  <Link to="/Email">join now</Link>
                  
                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default Pricing


