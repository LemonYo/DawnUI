import React from 'react'
import PropsTypes from 'prop-types'
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

Button.propTypes = {
  type: PropsTypes.oneOf(["default", "primary", "warn", "info"]),
  disabled: PropsTypes.bool,
  size: PropsTypes.oneOf(["normal", "small", "large", "mini"]),
  block: PropsTypes.bool,
  plain: PropsTypes.bool,
  round: PropsTypes.bool,
}
