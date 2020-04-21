import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer" >
            <div className="container">
                <div className="row">             
                    
                        
                            <div className='col my-auto'>
                            <Link to='/'>The Health Thing</Link>
                            <Link to='/snacks'> | Snacks</Link>
                            <Link to='/recipes'> | Recipes</Link>
                            <Link to='/catering'> | Catering</Link> 
                            </div>
                            
                            <div className='col my-auto text-center'>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook-official" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                            </div>
                    
                    <div className="col ">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-mobile" /> 1-206-555-1234</a>
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope" /> info@hummusveggies.com</a>
                    </div>
                
            </div>
            </div>
        </footer>
    )
}

export default Footer;