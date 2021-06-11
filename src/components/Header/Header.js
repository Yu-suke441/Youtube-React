import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Style from './Header.module.scss'
const Header = () => {
    return (
        <div className={Style.header}>
            <div>
                <Link to="/">OreTube</Link>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="検索" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
            </div>
            
        </div>
         
    )
}

export default Header
