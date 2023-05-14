import React, {useState} from 'react'
import classes from './Counter.module.scss';
export const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  }
  return (
    <div>
        <h1 className={classes.header}>{count}</h1>
        <button className={classes.btn}
         onClick={increment}>INCREMENT</button>
    </div>
  )
}
