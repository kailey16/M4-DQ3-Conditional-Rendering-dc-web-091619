import React from 'react'
import MenuBar from '../components/MenuBar.js'  
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      menubarClick: Profile
    }
  }

  divChange = (event) => {
    const taps = {
      "profile": Profile,
      "photo": Photos,
      "cocktail": Cocktails,
      "pokemon": Pokemon
    }
    this.setState({
      menubarClick: taps[event.target.id]
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar divChange={this.divChange} />
        {this.state.menubarClick === Pokemon ? <Pokemon /> : this.state.menubarClick()}
      </div>
    )
  }

}

export default MainBox
