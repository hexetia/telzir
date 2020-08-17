import React from 'react';
import { Tabs, Tab, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Plans, PlanStore } from '../../stores/PlanStore';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		position: 'fixed',
		bottom: 0,
		left: 0,
		width: '100%',
		zIndex: 2000,
		[theme.breakpoints.up('md')]: {
			position: 'initial',
			margin: '20px 0',
			boxShadow: 'none',
			background: 'transparent'
		}
	},
	tabRoot: {
		fontSize: '0.86rem'
	}
}));

export const PlanTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
		switch (newValue) {
			case 0:
				PlanStore.plan = Plans.FALEMAIS30;
				break;
			case 1:
				PlanStore.plan = Plans.FALEMAIS60;
				break;
			case 2:
				PlanStore.plan = Plans.FALEMAIS120;
				break;
		}

		setValue(newValue);
	}

	return (
		<Paper square className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant="fullWidth"
				indicatorColor="secondary"
				textColor="secondary"
				aria-label="plans list"
				width="100%"
			>
				<Tab classes={{ root: classes.tabRoot }} label={Plans.FALEMAIS30} />
				<Tab classes={{ root: classes.tabRoot }} label={Plans.FALEMAIS60} />
				<Tab classes={{ root: classes.tabRoot }} label={Plans.FALEMAIS120} />
			</Tabs>
		</Paper>
	);
};
