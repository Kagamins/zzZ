import styles from './Footer.module.css'
import { Button } from 'reactstrap'
import React from "react";
export default function Footer () {
    return ( <footer className={styles.footer}>
                
        <a className="btn btn-primary"   href="https://twitter.com/zzzfreecompany">
  
        Twitter
        </a>
        <a className="btn btn-danger"  href="https://www.instagram.com/zzzfreecompany/">

        Instagram
      </a>
        
            </footer>)
}