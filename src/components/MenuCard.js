import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <section className='main-card--container'>
    {menuData.map((d)=>{
        return (
            <>
            <div className="card-container" key={d.id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Breakfast</span>
                    <h2 className="card-title">{d.name}</h2>
                    <span className="card-description subtle">{d.description}</span>
                    <div className="card-read">Read</div>
                </div>
                <img src={d.image} alt="images" className="card-media" />
                <span className="card-atg subtle">Order Now</span>
            </div>
        </div>
            </>
        )
    })};
    </section>
    
  )
}

export default MenuCard;