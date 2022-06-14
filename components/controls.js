import { SetStateAction } from 'react'
import { Directions } from '../pages'
import styles from './Controls.module.css'

export const Controls = ({
    directions,
    setDirections}) => {
    const setDirection = (actionName, value, e) => {
      e.preventDefault()
      setDirections(currentDirections => ({
        ...currentDirections,
        [actionName]: value
      }))
    }

    const ButtonAction = (actionName) => ({
        onMouseDown: e => setDirection(actionName, true, e),
        onTouchStart: e => setDirection(actionName, true, e),
        onMouseUp: e => setDirection(actionName, false, e),
        onMouseLeave: e => setDirection(actionName, false, e),
        onTouchEnd: e => setDirection(actionName, false, e)
      })

      return ( 
<div className={styles.controls}>
      <div className={styles.upDownControl}>
        <button className={styles.control} {...ButtonAction('ArrowUp')} >
          &uarr;
        </button>
        <button className={styles.control} {...ButtonAction('ArrowDown')} >
          &darr;
        </button>
      </div>
      <div className="left-right-control">
        <button className={styles.control} {...ButtonAction('ArrowLeft')} >
          &larr;
        </button>
        <button className={styles.control} {...ButtonAction('ArrowRight')} >
          &rarr;
        </button>
      </div>
    </div>



      )



}
