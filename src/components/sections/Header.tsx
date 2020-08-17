import { Telzir } from '../icons/Telzir';
import React from 'react';
import { Button, Theme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { maxWidthDesktop } from '../App';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		padding: theme.spacing(1),
		borderBottom: '1px lightgrey solid',
	},
	headerContent: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	nav: {
		margin: theme.spacing(0, 1)
	},
	wrapper: {
		maxWidth: maxWidthDesktop,
		margin: '0 auto'
	}
}));

export const Header = () => {
	const classes = useStyles();
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

	return (
		<>
			<header className={classes.header}>
				<div className={clsx(classes.wrapper, classes.headerContent)}>
					<Telzir />
					<div>
						<Button style={{ fontSize: '1.5em', textTransform: 'none', marginRight: mdUp ? 20 : 10 }}>Menu</Button>
						<Button style={{ fontSize: '1.5em', textTransform: 'none' }}>Minha Conta</Button>
					</div>
				</div>
			</header>
			<nav className={clsx(classes.nav, classes.wrapper)}>
				<Button>Pré e pós-pago</Button>
				<Button>Internet</Button>
				<Button>Tv</Button>
			</nav>
		</>
	);
};
