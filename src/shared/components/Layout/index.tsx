import { Fragment, ReactElement } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import * as Styled from './styles'


type Element = {
	children: ReactElement,
}
const Layout = ({ children }: Element) => {
	return (
		<Fragment>
			<Header />
			<Styled.BodyWrapper>{children}</Styled.BodyWrapper>
			<Footer />
		</Fragment>
	)
}

export default Layout