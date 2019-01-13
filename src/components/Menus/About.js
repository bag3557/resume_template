import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { SocialIcon} from 'react-social-icons'

const styles = {
  aboutContainer:{
    display: 'flex', 
    height: '100vh', 
    alignContent: 'center',
    padding: 15
  },
  nameStyle: {
    fontSize: '6rem',
    lineHeight: '5.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#343a40',
  },
  address: {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 700,
    color: '#868e96',
  }
}

const About = ({classes})  => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>CLARENCE <span style={{color:'#bd5d38'}}>TAYLOR</span></Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography className={classes.address}>3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 · NAME@EMAIL.COM</Typography>
          <br/>
          <br/>
          <Typography className={classes.address}>I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. <br/>
          Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</Typography>
          <br/>
          <br/>
          <SocialIcon network="linkedin" bgColor="#868e96"/> {' '}
          <SocialIcon network="github" bgColor="#868e96"/> {' '}
          <SocialIcon network="twitter" bgColor="#868e96"/> {' '}
          <SocialIcon network="facebook" bgColor="#868e96"/> {' '}

        </Grid>
        
      </Grid>
    )
  
}

export default withStyles(styles)(About)
