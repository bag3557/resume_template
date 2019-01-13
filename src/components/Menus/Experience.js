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
    lineHeight: '5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#343a40',
    marginBottom: 40
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
    lineHeight: '1.3rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%'
  },
  positionDesc: {
    fontSize: '1.2rem',
    lineHeight: '1.3rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%'
  }
}

const ads = [
  {
    position: "SENIOR WEB DEVELOPER",
    positionPeriod: "March 2013 - Present",
    positionShort: "INTELITEC SOLUTIONS",
    positionDesc: `Bring to the table win-win survival strategies to ensure proactive domination. 
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. 
    User generated content in real-time will have multiple touchpoints for offshoring.`
  },
  {
    position: "WEB DEVELOPER",
    positionPeriod: "December 2011 - March 2013",
    positionShort: "INTELITEC SOLUTIONS",
    positionDesc: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
    Override the digital divide with additional clickthroughs from DevOps. 
    Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.`
  },
  {
    position: "JUNIOR WEB DESIGNER",
    positionPeriod: "July 2010 - December 2011",
    positionShort: "SHOUT! MEDIA PRODUCTIONS",
    positionDesc: `Podcasting operational change management inside of workflows to establish a framework. 
    Taking seamless key performance indicators offline to maximise the long tail. 
    Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.`
  },
  {
    position: "WEB DESIGN INTERN",
    positionPeriod: "September 2008 - June 2010",
    positionShort: "SHOUT! MEDIA PRODUCTIONS",
    positionDesc: `Collaboratively administrate empowered markets via plug-and-play networks. 
    Dynamically procrastinate B2C users after installed base benefits. 
    Dramatically visualize customer directed convergence without revolutionary ROI.`
  }
]

const Experience = ({classes}) => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>Experience</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        {ads.map((adObject, index) =>
          <React.Fragment key={index}>
            <Typography className={classes.position}>
              {adObject.position}
              <span style={{float: 'right', color:'#bd5d38', fontWeight:'normal'}}>{adObject.positionPeriod}</span>
            </Typography>
            <br/>
            <Typography className={classes.positionShort}>{adObject.positionShort}</Typography>
            <br/>
            <Typography className={classes.positionDesc}>{adObject.positionDesc}</Typography>
            <br />
            <br />
            <br />
          </React.Fragment>
          )}
        </Grid>
        
        
      </Grid>
    )
  }

  export default withStyles(styles)(Experience)
