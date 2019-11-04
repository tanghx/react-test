import React, { Component } from 'react';
import confirm from './test/Modal';
import InputNumber from './test/InputNumber'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotate: false
    }
  }

  async componentDidMount() {
    let res = await confirm('确定删除吗？')
    if(res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }

  async confirmShow () {
    let res = await confirm('确定删除吗？')
    if(res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }
  
  render() {
    const value = 1
    return (
      <div>
        <button onClick={this.confirmShow.bind(this)}>确定</button>
        <InputNumber defaultValue={value} onChange={e => {}} ></InputNumber>
        <InputNumber value={value} onChange={e => {}} ></InputNumber>

      </div>
    );
  }
}

export default App;
