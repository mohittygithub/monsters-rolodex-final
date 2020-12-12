import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <div key={monster.id}>
          <Card monster={monster} />
        </div>
      ))}
    </div>
  )
}
