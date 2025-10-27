import { Link } from "react-router-dom";

const NavStyle = {
    display:'flex',
    justifyContent : 'flex-end',
    alignItems : 'center',
    height : '100px',
    backgroundColor : '#90e0ef',
    width: '100%',
    color: 'white'
}

const ListStyle = {
    listStyle : 'none',
    width : '20%',
    display : 'flex',
    gap : '40px'
}

const LinkStyle = {
    textDecoration : 'none',
    color : 'white',
    fontSize : '25px',
    transition : 'all 0.2s',
}   

function Nav() {
    return ( 
        <>
            <section style={NavStyle}>
                <ul style={ListStyle}> 
                    <li><Link to='/' style={LinkStyle}>Home</Link></li>
                    <li><Link to='/CountryList' style={LinkStyle}>country list</Link></li>
                </ul>
            </section>
        </>
     );
}

export default Nav;