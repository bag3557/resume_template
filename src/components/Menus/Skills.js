import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import HtmlLogo from '../../html5-brands.svg'
import AngularLogo from '../../angular-brands.svg'
import CSS3Logo from '../../css3-alt-brands.svg'
import GruntLogo from '../../grunt-brands.svg'
import GulpLogo from '../../gulp-brands.svg'
import JSLogo from '../../js-square-brands.svg'
import LessLogo from '../../less-brands.svg'
import NodeLogo from '../../node-js-brands.svg'
import NPMLogo from '../../npm-brands.svg'
import ReactLogo from '../../react-brands.svg'
import SASSLogo from '../../sass-brands.svg'
import WordpressLogo from '../../wordpress-brands.svg'

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
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 700,
    color: '#868e96',
    width: '70%'
  },
  positionDesc: {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 700,
    color: '#868e96',
    width: '70%',
  },
  logo: {
    width: 35,
    margin: 10
  },
  workflowPoint: {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: 300,
    color: '#868e96',
    width: '70%',
    listStyleType: 'none'
  }
}

const logo = [
  HtmlLogo, CSS3Logo, JSLogo,
  AngularLogo, ReactLogo, NodeLogo,
  SASSLogo, LessLogo, WordpressLogo,
  GulpLogo, GruntLogo, NPMLogo
]
const workflow = [
  'Mobile-First', 
  'Responsive Design', 
  'Cross Browser Testing & Debugging', 
  'Cross Functional Teams', 
  'Agile Development & Scrum'
]

const Skills = ({classes}) => {
    return (
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} sm={12} md={12}> 
          <Typography className={classes.nameStyle}>Skills</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>        
            <Typography className={classes.position}>
              PROGRAMMING LANGUAGES & TOOLS
            </Typography>
            {logo.map((image, index) => <img key={index} alt={image} src={image} className={classes.logo}/> )}
            <br /><br />
            <Typography className={classes.position}>
              WORKFLOW
            </Typography>
            <ul>
              {workflow.map(point => <li key={point} className={classes.workflowPoint}>
                <span role='img' aria-label="tick">✔️</span>
                  {point}
              </li>)}
            </ul>
        </Grid>       
      </Grid>
    )
  }

  export default withStyles(styles)(Skills)
