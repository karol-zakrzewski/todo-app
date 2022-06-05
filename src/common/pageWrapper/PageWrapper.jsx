import React from 'react'
import { PageWrapperStyled } from './PageWrapper.styled'

const PageWrapper = ( {children}) => {
  return (
    <PageWrapperStyled>
      {children}
    </PageWrapperStyled>
  )
}

export default PageWrapper