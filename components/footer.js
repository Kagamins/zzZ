import styles from './Footer.module.css'
import { Button } from 'reactstrap'
import React from "react";
export default function Footer () {
    return ( <footer className={styles.footer}>
                
        <Button color='primary'   href="https://twitter.com/zzzfreecompany">
        <i className="fa-brands fa-twitter" ></i>
        </Button>
        <Button className="btn btn-danger"  href="https://www.instagram.com/zzzfreecompany/">
        <i className="fa-brands fa-instagram" ></i>
      </Button>
      <Button color='primary'   href="https://discord.gg/SNfuxuQTmq">
      <i className="fa-brands fa-discord"></i> 
      </Button>
        
            </footer>)
}