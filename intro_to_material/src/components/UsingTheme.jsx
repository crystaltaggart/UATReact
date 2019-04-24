import React, {Component} from "react";
//(1): import withTheme component
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
/*GOTCHAS: Typeography works here because Google implemented the code to get the theme values without additional code
h1 doesn't support this property by default which is why it doesn't work for example 2
in the third example the style tag was written to use the theme*/
class UsingTheme extends Component {

    render() {
        //get the theme as part of the props
        const { theme } = this.props;

        return (
            <div>
            <Typography color={'secondary'} align={'center'} variant={'h2'}>Using the theme</Typography>
            <h1 color={theme.palette.error.main}>NOT Using the Theme</h1>
                <h1 style={{color: theme.palette.secondary.main}}>Now Using the Theme</h1>
            </div>
        )
    }
}
//(2): inherit withTheme
export default withTheme()(UsingTheme);