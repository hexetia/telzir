import React from 'react';
import { Theme, Typography, useMediaQuery } from '@material-ui/core';
import { CallMore } from '../icons/CallMore';
import { makeStyles } from '@material-ui/styles';
import {Girl} from "../icons/Girl";
import { Textfit } from 'react-textfit';
import {maxWidthDesktop} from "../App";

const useStyles = makeStyles((theme: Theme) => ({
		root: {
			color: 'white',
			overflow: 'hidden',
			background: 'linear-gradient(to left, #4776e6, #8e54e9)'
		},
		container: {
			width: '100%',
			maxWidth: maxWidthDesktop,
			display: 'flex',
			minHeight: 200,
			margin: '0 auto'
		},
		titleWrapper: {
			width: '70vw',
			padding: theme.spacing(2),
			[theme.breakpoints.up('md')]: {
				maxWidth: 580
			}
		},
		title: {
			fontWeight: 'bold',
			letterSpacing: -3
		},
		dontWorryTitle: {
			color: 'cyan'
		},
		iconWrapper: {
			flexGrow: 1,
			position: 'relative',
			[theme.breakpoints.up('md')]: {
				width: 'auto'
			}
		},
		icon: {
			position: 'absolute',
			width: '30vw',
			top: 0,
			right: 0
		}
	})
);

export const Main = () => {
	const classes = useStyles();
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

	return (
		<main className={classes.root}>
			<div className={classes.container}>
				<div className={classes.titleWrapper}>
					<Typography style={{fontSize: '1rem', marginLeft: mdUp ? 3 : 1}}>Novo plano</Typography>
					<Typography variant={mdUp ? 'h2' : 'h4'} className={classes.title}>
						<span className={classes.dontWorryTitle}>FALE MAIS</span>, FALE O MÊS INTEIRO
					</Typography>
					<Typography variant={mdUp ? 'h2' : 'h4'} className={classes.title} gutterBottom>
						SEM SE PREOCUPAR
					</Typography>
					<Textfit mode="single" max={14} style={{textTransform: 'uppercase'}}>Os Primeiros 120 Minutos são Grátis* :)</Textfit>
				</div>
				<div className={classes.iconWrapper}>
					<div className={classes.icon}>
						{mdUp ? <CallMore /> : <Girl />}
					</div>
				</div>
			</div>
		</main>
	);
};
