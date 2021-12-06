import React, { PureComponent } from 'react'

import Subject from './subject'

import store from '../store'
import { countComponent } from '../logger'


interface TvNavigationState {
  elem: number;
}

class PureApp extends PureComponent<{}, TvNavigationState> {
  state = {
    elem: 0
  };

  constructor(props) {
    super(props)
    console.log("constructor")
  }

  focusElem = () => {
    let el = this.state.elem
    document.getElementById("button" + el).focus()
    console.log("focuse elem button" + el)
  }

  nextButton = (e: KeyboardEvent) => {
    e.stopPropagation();
    console.log("pressed code " + e.code)

    let el = this.state.elem
    let next = (el + 1) % 3
    if (e.code === 'ArrowRight') {
      this.setState( {next})
      this.state.elem = next
      console.log("state became " + this.state.elem + ", should be " + next)
      this.focusElem()
    }
  };

  componentDidMount() {
    console.log("componentDidMount")

    this.focusElem()
    window.addEventListener('keyup', this.nextButton)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")

    window.removeEventListener('keyup', this.nextButton)
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    console.log("componentDidUpdate")
  }

  render() {
    countComponent('App', true)

    return (
      <div className="pure-app">
        <button id="button0">Button 1</button>
        <button id="button1">Button 2</button>
        <button id="button2">Button 3</button>
      </div>
    )
  }
}

export default PureApp
