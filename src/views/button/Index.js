import React from "react"
import Button from "../../../packages/button"
import "../../../packages/button/button.scss"
export default function ButtonPage() {
  return (
    <div>
      <Button block type="primary">我是一个按钮</Button>
      <Button block type="info">我是一个按钮</Button>
    </div>
  )
}