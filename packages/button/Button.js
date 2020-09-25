import React from 'react'
import classNames from "../utils/classnames"

export default function Button(props) {
  const {
    type = 'default',
    disabled = false,
    size = 'normal',
    block = false,
    plain = false,
    round = false,
    children,
    className,
    ...other
  } = props

  const Component = other.href ? 'a' : 'button'

  const cls = classNames(
    'ui-btn',
    `ui-btn_${type}`,
    `ui-btn_${size}`,
    {
      'ui-btn_block': block,
      'ui-btn_plain': plain,
      'ui-btn_round': round,
      'ui-btn_disabled': disabled
    },
    className
  )

  return (
    <Component {...other} disabled={disabled} className={cls}>{children}</Component>
  )
}
