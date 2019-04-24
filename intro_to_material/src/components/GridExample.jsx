import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//(1) : import with styles
import { withStyles } from '@material-ui/core/styles';

//(2) : define styles
const styles = theme => ({
    customBG: {
        backgroundColor:theme.palette.error.main,
        color: theme.palette.error.contrastText,
        margin: 'auto',
    },
    secondaryBG: {
        backgroundColor:theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        width: '100%',
        height: '100%',
        margin: 'auto',
        lineHeight: '50px',
    },
    tertiaryBG: {
        backgroundColor:theme.palette.tertiary.main,
        color: theme.palette.tertiary.contrastText,
        width: '100%',
        height: '100%',
        margin: 'auto',
        lineHeight: '50px',
    },
    contrastBG: {
        backgroundColor:theme.contrastingColors.main,
        color: theme.contrastingColors.contrast,
        width: '100%',
        height: '100%',
        margin: 'auto',
        lineHeight: '50px',
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit*2,
    },
    customHeight: {
        height: '30px',
    },
    paper: {
        height: '50px',
        textAlign: 'center',
        elevation: 7,
        margin: 'auto',
        backgroundColor: theme.palette.primary.main,

    },
});

class GridExample extends Component {

    render(){
        //import theme and classes
        let { theme, classes} = this.props;
    return (
        <Grid container className={classes.paper} spacing={24}>
            <Grid item xs={12}><Paper className={classes.paper}><h1>Overwriting the Theme</h1></Paper></Grid>
            <Grid item xs={12}><Paper className={classes.paper}><div className={classes.customBG}>12 wide box here</div></Paper></Grid>
            <Grid item xs={6}><Paper className={classes.paper}><div className={classes.secondaryBG}>12-1 box</div></Paper> </Grid>
            <Grid item xs={6} className={classes.paper}><Paper className={classes.tertiaryBG}>6/12-2 box</Paper> </Grid>
            <Grid item xs={3}><Paper className={classes.paper}>3/12-1 box</Paper> </Grid>
            <Grid item xs={3}><Paper className={classes.paper}>3/12-2 box</Paper> </Grid>
            <Grid item xs={3}><Paper className={classes.paper}>3/12-3 box</Paper> </Grid>
            <Grid item xs={3}><Paper className={classes.paper}>3/12-4 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.contrastBG}>1/12-1 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-2 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-3 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-4 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-5 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-6 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-7 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-8 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-9 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-10 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-11 box</Paper> </Grid>
            <Grid item xs={3} sm={1}><Paper className={classes.paper}>1/12-12 box</Paper> </Grid>
        </Grid>
    );
}
};
//(5) inherit withStyles and set withTheme property to true
export default withStyles(styles, { withTheme: true })(GridExample);