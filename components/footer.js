import styles from './Footer.module.css'
import { Button } from 'reactstrap'
import React from "react";
export default function Footer () {
    return ( <footer className={styles.footer}>
                
        <Button color='primary'   href="https://twitter.com/zzzfreecompany">
        <i className="fa fa-twitter" ></i>
        </Button>
        <a className="btn btn-danger"  href="https://www.instagram.com/zzzfreecompany/">
        <i className="fa fa-instagram" ></i>
      </a>
        
            </footer>)
}