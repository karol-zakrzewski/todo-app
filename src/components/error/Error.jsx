import React from 'react'
import { ErrorText } from './Error.styled'

const Error = ( {error}) => {
  return (
    <ErrorText>{error}</ErrorText>
  )
}

export default Error