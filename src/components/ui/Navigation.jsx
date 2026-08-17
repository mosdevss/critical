import {Link} from 'react-router-dom'

const Navigation = ()=> {
  return (
    <nav>
      <ul>
        <li><Link to="/critical/">Home</Link></li>
        <li><Link to="/critical/about">About</Link></li>
        <li><Link to="/critical/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
