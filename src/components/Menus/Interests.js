import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  aboutContainer:{
    display: 'flex', 
    height: '100vh', 
    overflow: 'scroll',
    alignContent: 'center',
    padding: 15
  },
  nameStyle: {
    fontSize: '3rem',
    lineHeight: '5.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#343a40',
    marginBottom: 50
  },
  position: {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 700,
    color: '#343a40',
    width: '70%'
  },
  positionShort: {
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%'
  }
}


const Interests = ({classes}) => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>Interests</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        
            <Typography className={classes.positionShort}>Apart from being a web developer, I enjoy most of my time being outdoors. 
            In the winter, I am an avid skier and novice ice climber. 
            During the warmer months here in Colorado, I enjoy mountain biking, 
            free climbing, and kayaking.<br/><br/>
            When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, 
            I am an aspiring chef, and I spend a large amount of my free time exploring the latest 
            technology advancements in the front-end web development world.</Typography>
            
        </Grid>
        
        
      </Grid>
    )
  }

  export default withStyles(styles)(Interests)
