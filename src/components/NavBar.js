import React from 'react'

function NavBar({filterItem,category}) {
  return (
    <nav className="navbar">
        <div className="btn-group">
        {
            category.map((b)=>{
                return (
                    <button className="btn-group__item" onClick={()=>filterItem(b)}>{b}</button>
                )
            })
        }
        </div>
    </nav>
  )
}

export default NavBar;