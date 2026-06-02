import React from 'react';
import { AiOutlineBook } from "react-icons/ai";


const AppIcon = ({
    size,
    background
}) => {

  return (
    <div>
      <AiOutlineBook size={size} color={background} />
    </div>
  )
}

export default AppIcon;
