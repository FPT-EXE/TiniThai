import { Fragment, ReactElement } from 'react'

// import { ProtectedRoute } from '../ProtectedRoute'

import Header from './Header'
import Footer from './Footer'
import * as Styled from './styles'


type Element = {
	children: ReactElement,
};
const Layout = ({ children }: Element) => {
	return (
		<Fragment>
			{/* <ProtectedRoute> */}
			<Header />
			<Styled.BodyWrapper>{children}</Styled.BodyWrapper>
			<Footer />
			{/* </ProtectedRoute> */}
		</Fragment>
	)
}

export default Layout
