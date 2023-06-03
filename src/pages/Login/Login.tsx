import * as React from 'react'

import LoginForm from './LoginForm'
import * as Styled from './styles'


interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
	return (
		<Styled.Login>
			<LoginForm />
		</Styled.Login>
	)
}

export default Login
