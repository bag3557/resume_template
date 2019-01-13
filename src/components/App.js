import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import MenuComponent from './Menus/MenuComponent'
import MenuData from './Menus/pages.json'
import * as AllComponent from './Menus/componentListing' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  state = {
    menus: [],
    activeMenu: 0,
    menuComponents: []
  }
  componentDidMount = () => {
    const menus = []
    const menuComponents = []
    MenuData.map(value => {
      menus.push(value.page_name)
      menuComponents.push(AllComponent[value.component_name])
      return true
    })
    this.setState({menus, menuComponents})
  }
  onChangeMenuHandler = e => this.setState({activeMenu: this.state.menus.indexOf(e.target.innerHTML)});

  render(){
    const { menus, menuComponents, activeMenu } = this.state
    const Child = menuComponents[activeMenu]
    return (
    <Grid container>
      <Grid item xs={2} style={{backgroundColor: '#bd5d38', height: '100vh', display:'flex'}}>
        <MenuComponent 
          activeMenu={activeMenu}
          menus={menus} 
          onChangeMenuHandler={this.onChangeMenuHandler}/>
      </Grid>
      <Grid item xs={10} >{Child ? <Child /> : null}</Grid>
    </Grid>)
  }
}

export default App;