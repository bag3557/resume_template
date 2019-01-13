import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

const style = {
  menu: {
    fontSise: '1rem',
    display:'block',
    textAlign: 'center',
    color: 'rgba(255,255,255,.5)',
    fontWeight: 800,
    letterSpacing: '.05rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    lineHeight: '1.5',
    padding: '.5rem 1rem'
  },
  active: {
    color: 'white',
    fontSise: '1rem',
    display:'block',
    textAlign: 'center',
    fontWeight: 800,
    letterSpacing: '.05rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    lineHeight: '1.5',
    padding: '.5rem 1rem'
  }
}
const MenuListComponent = ({active, classes, menuItem, onChangeMenuHandler}) => 
  <Typography 
    className={active ? classes.active : classes.menu} 
    onClick={onChangeMenuHandler}>
    {menuItem}
  </Typography>

export default withStyles(style)(MenuListComponent)