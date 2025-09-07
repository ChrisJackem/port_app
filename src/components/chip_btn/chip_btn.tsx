import React from 'react'

type ChipBtnProps = {
    children: React.ReactNode;
}

const ChipBtn = ({ children }:ChipBtnProps) => {
  return (
    <button>{children}</button>
  )
}

export default ChipBtn