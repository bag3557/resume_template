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
  workflowPoint: {
    fontSize: '1rem',
    lineHeight: '2rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%',
    listStyleType: 'none'
  }
}
const workflow = [
  'Google Analytics Certified Developer', 
  'Mobile Web Specialist - Google Certification', 
  '1<span>st<span> Place - University of Colorado Boulder - Emerging Tech Competition 2009', 
  '1<sup>st</sup> Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)', 
  '2<sup>nd</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2008',
  '1<sup>st</sup> Place - James Buchanan High School - Hackathon 2006',
  '3<sup>rd</sup> Place - James Buchanan High School - Hackathon 2005'
]


const Awards = ({classes}) => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>AWARDS & CERTIFICATIONS</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>        
            <ul>
              {workflow.map(point => <li key={point} className={classes.workflowPoint}>
                <span role='img' aria-label="tick">🏆</span>
                  {point}
              </li>)}
            </ul>
        </Grid>       
      </Grid>
    )
  }

  export default withStyles(styles)(Awards)
