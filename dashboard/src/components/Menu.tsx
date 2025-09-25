import { NavLink } from "react-router-dom"

import "./Menu.css"

const Menu = () => {
    
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Menu</div>
      </div>
              {/* Tentar arrumar o bug dos links */}
      <nav className="menu-nav">
        <NavLink 
          className={`links`}
          to="/activeusers" 
        >
          Usuários Ativos
        </NavLink>
        <NavLink 
          className={`links`}
          to="/" 
        >
          Receita total
        </NavLink>
        <NavLink 
          className={`links`}
          to="/conversionrate" 
        >
          Taxa de conversão
        </NavLink>
        <NavLink 
          className={`links`}
          to="/averageticked" 
        >
          Ticked médio
        </NavLink>

        
      </nav>
    </div>
  )
}

export default Menu