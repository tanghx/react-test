import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalStyle from './modal.module.css'
class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={ModalStyle.confirmWrapper}>
        <p>{this.props.message}</p>
        <div className={ModalStyle.footer}>
          <button onClick={this.props.cancal}>取消</button>
          <button onClick={this.props.ok}>确定</button>
        </div>
      </div>
    )
  }
}

function confirm(message) {
  const node = document.createElement('div')
  node.className = ModalStyle.modalShadow
  document.body.appendChild(node)
  return new Promise((resolve, reject) => {
    const modal = <Modal message={message} 
                    ok={() => {
                      resolve(true)
                      hide(node)
                    }}
                    cancal={() => {
                      resolve(false)
                      hide(node)
                    }} />
    ReactDOM.render(modal, node)
  })
}

function hide(node) {
  ReactDOM.unmountComponentAtNode(node)
  document.body.removeChild(node)
}

export default confirm