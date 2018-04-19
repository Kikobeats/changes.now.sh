/* global particlesJS */

import React, { Fragment, Component } from 'react'
import Script from 'react-load-script'
import { Flex } from 'grid-styled'
import styled from 'styled-components'

import { getPackageInfo } from 'helpers'
import { Router } from 'routes'

const INPUT_COLOR = {
  IDLE: '#555',
  SUCCESS: '#43a047',
  ERROR: '#f44336'
}

const FooterLink = styled.a`
  font-weight: bold;
  border: 0;
  color: white;
`

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { status: 'idle', pkgName: '', inputColor: INPUT_COLOR.IDLE }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { pkgName, inputColor } = this.state
    if (inputColor === INPUT_COLOR.SUCCESS) {
      this.setState({ status: 'loading' })
      Router.pushRoute(`/${pkgName}`)
    }
  }

  renderHeader () {
    return (
      <header>
        <h1 style={{ margin: 0 }}>changes.now.sh</h1>
        <p>See the changelog for any NPM package</p>
      </header>
    )
  }

  renderForm () {
    const { inputColor, status } = this.state
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <fieldset className='form-group'>
          <input
            type='text'
            placeholder='react, debug, async...'
            className='form-control'
            ref={node => (this.input = node)}
            style={{ borderColor: inputColor }}
            onChange={async event => {
              event.preventDefault()
              const pkgName = event.target.value.toLowerCase()
              this.setState({ pkgName })
              if (pkgName === '') return this.setState({ inputColor: INPUT_COLOR.IDLE })
              const pkgInfo = await getPackageInfo(pkgName)
              this.setState({ inputColor: pkgInfo.name ? INPUT_COLOR.SUCCESS : INPUT_COLOR.ERROR })
            }}
            autoFocus
          />
        </fieldset>
        <div className='form-actions'>
          <button
            type='button'
            className='btn btn-info btn-block'
            onClick={this.handleSubmit}
            disabled={status === 'loading'}
          >
            <span
              className={status}
              aria-hidden='true'
              children={status === 'idle' && 'See changes'}
            />
          </button>
        </div>
      </form>
    )
  }

  renderFooter () {
    return (
      <footer>
        <p>
          by <FooterLink href='https://kikobeats.com' target='_blank' children='Kiko Beats' /> using{' '}
          <FooterLink href='https://www.algolia.com' target='_blank' children='Algolia' /> (<a
            href='https://github.com/Kikobeats/changes.now.sh'
            target='_blank'
          >
            source
          </a>)
        </p>
      </footer>
    )
  }

  render () {
    return (
      <Fragment>
        <Flex
          is='article'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          style={{ minHeight: '100vh' }}
        >
          <Flex
            is='section'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            style={{ flex: '1', textAlign: 'center' }}
          >
            {this.renderHeader()}
            {this.renderForm()}
          </Flex>
          {this.renderFooter()}
        </Flex>
        <Script
          url='https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
          onLoad={() => {
            particlesJS.load('particles-js', '/static/particles.json')
          }}
        />
      </Fragment>
    )
  }
}
