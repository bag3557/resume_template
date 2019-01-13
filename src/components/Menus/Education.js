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
  },
  positionDesc: {
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%'
  }
}

const ads = [
  {
    position: "UNIVERSITY OF COLORADO BOULDER",
    positionPeriod: "August 2006 - May 2010",
    positionShort: "BACHELOR OF SCIENCE",
    positionDesc: `Computer Science - Web Development Track GPA: 3.23`
  },
  {
    position: "JAMES BUCHANAN HIGH SCHOOL",
    positionPeriod: "August 2002 - May 2006",
    positionShort: "TECHNOLOGY MAGNET PROGRAM",
    positionDesc: `GPA: 3.56`
  }
]

const Education = ({classes}) => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>Education</Typography>
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

  export default withStyles(styles)(Education)
