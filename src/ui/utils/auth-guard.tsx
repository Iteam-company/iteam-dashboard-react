import React, { FC, memo, ReactNode } from 'react';

interface AuthGuardProps {
	children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = memo((props) => {
	const { children } = props;
	return <div>{children}</div>;
});

AuthGuard.displayName = 'AuthGuard';
