import React, { useState } from 'react';
import { Button, TextField, Theme, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { view } from 'react-easy-state';
import { maxWidthDesktop } from '../App';
import { calcNewPrice, calcPrice } from '../../stores/PlanStore';
import { blueGrey } from '@material-ui/core/colors';
import { PlanTabs } from '../plans/Plans';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		width: '100%',
		maxWidth: maxWidthDesktop,
		margin: '0 auto'
	},
	textFieldsWrapper: {
		display: 'flex',
		justifyContent: 'center'
	},
	textField: {
		margin: theme.spacing(0, 0.5)
	},
	wantWrapper: {
		textAlign: 'center',
		margin: theme.spacing(1),
		paddingBottom: 60
	},
	button: {
		background: 'linear-gradient(to left, #4776e6, #8e54e9)'
	},
	compareWrapper: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	commonPlan: {
		color: 'white',
		width: '50%',
		textAlign: 'center',
		margin: '8px 4px',
		padding: theme.spacing(1)
	},
	faleMaisPlan: {
		background: 'linear-gradient(to left, #4776e6, #8e54e9)',
	},
	otherPlan: {
		backgroundColor: blueGrey[500],
	}
}));

export const SaveNow = view(() => {
	const classes = useStyles();
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	const [data, setData] = useState({
		origin: 11,
		target: 18,
		minutes: 30
	});

	const changeHelper = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [evt.target.name]: evt.target.value });
	};

	return (
		<section className={classes.container}>
			<Typography variant={mdUp ? 'h4' : 'h6'} align="center" gutterBottom>
				Compare, Mude e Economize Já
			</Typography>

			<PlanTabs />

			<div className={classes.textFieldsWrapper}>
				<TextField
					fullWidth
					name="origin"
					value={data.origin}
					className={classes.textField}
					label="DDD Origem"
					variant="outlined"
					type="number"
					inputProps={{ min: 0 }}
					onChange={changeHelper}
				/>
				<TextField
					fullWidth
					name="target"
					value={data.target}
					className={classes.textField}
					label="DDD Destino"
					variant="outlined"
					type="number"
					onChange={changeHelper}
				/>
				<TextField
					fullWidth
					name="minutes"
					value={data.minutes}
					className={classes.textField}
					label="Minutos"
					variant="outlined"
					type="number"
					onChange={changeHelper}
				/>
			</div>

			<div className={classes.compareWrapper}>
				<div className={clsx(classes.commonPlan, classes.faleMaisPlan)}>
					<Typography>
						COM <span style={{ color: 'cyan' }}>FaleMais</span>
					</Typography>
					<Typography variant="h5" data-value>$ {calcNewPrice(data.origin, data.target, data.minutes).toFixed(2)}</Typography>
				</div>
				<div className={clsx(classes.commonPlan, classes.otherPlan)}>
					<Typography>
						SEM <span style={{ color: 'cyan' }}>FaleMais</span>
					</Typography>
					<Typography variant="h5" data-value>$ {calcPrice(data.origin, data.target, data.minutes).toFixed(2)}</Typography>
				</div>
			</div>

			<div className={classes.wantWrapper}>
				<Button className={classes.button} variant="contained" color="primary" fullWidth={!mdUp} size='large'>
					Quero pra mim
				</Button>
			</div>
		</section>
	);
});
