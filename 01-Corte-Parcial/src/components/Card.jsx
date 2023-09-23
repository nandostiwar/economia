import { useState } from 'react';

const CardMina = (props) => {
  return (
    <div onClick={() => props.funcionExplotar(props.mine)} className={`carta`}>
      {props.numero}
    </div>
  )
}

export default CardMina;