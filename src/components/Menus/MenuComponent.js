import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Avatar} from '@material-ui/core'
import logo from '../../download.jpg'
import MenuListComponent from './MenuListComponent'

const styles = {
  bigAvatar: {
    width: 200,
    height: 200,
    border: '.5rem solid rgba(255,255,255,.2)',
  },
  user: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  }
};

const MenuComponent = ({classes, menus, onChangeMenuHandler, activeMenu}) => {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Avatar alt="User Image" src={logo} className={classes.bigAvatar} />
          <br />
          {/* <Typography className={classes.user}>Ajit Bhaik</Typography> */}
          {menus.map((menu, index) => 
            {
              // if(activeMenu === index)
              //   return <MenuListComponent key={index} menuItem={menu} onChangeMenuHandler={onChangeMenuHandler}/> 
              // else
              //   return <MenuListComponent key={index} menuItem={menu} onChangeMenuHandler={onChangeMenuHandler}/>
             return activeMenu === index 
                ? <MenuListComponent key={index} active menuItem={menu} onChangeMenuHandler={onChangeMenuHandler}/> 
                : <MenuListComponent key={index} menuItem={menu} onChangeMenuHandler={onChangeMenuHandler}/>
              
            })
          }          
        </Grid>
    </Grid>  
    )
  }


export default withStyles(styles)(MenuComponent)
