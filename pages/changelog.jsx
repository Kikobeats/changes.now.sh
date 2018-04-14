/* global particlesJS, anchors, fetch */

import React, { Fragment, Component } from 'react'
import Script from 'react-load-script'
import Markdown from 'react-markdown'
import { Flex } from 'grid-styled'
import Head from 'next/head'
import 'isomorphic-unfetch'

import { getPackageInfo } from 'helpers'

import { Home, Github } from 'react-feather'
import styled from 'styled-components'

const IconLink = styled.a`
  position: relative;
  top: 1px;
  color: inherit;
  border: 0;

  &:hover,
  &:active,
  &:focus {
    background-color: inherit;
    color: #ff2e88;
  }
`

export default class Changelog extends Component {
  static async getInitialProps ({ query }) {
    const pkgInfo = await getPackageInfo(query.package)

    const {
      version,
      description,
      repository,
      homepage,
      license,
      modified,
      changelogFilename,
      readme
    } = pkgInfo

    let html = 'No changelog found!'

    if (changelogFilename) {
      const res = await fetch(changelogFilename)
      html = await res.text()
    }

    return {
      version,
      description,
      repository,
      homepage,
      license,
      modified,
      html
    }
  }
  render () {
    const { html, license, description, homepage, repository } = this.props
    const { package: pkgName } = this.props.url.query

    return (
      <Fragment>
        <Head>
          <title>{pkgName}</title>
        </Head>
        <header>
          <h1>{pkgName}</h1>
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', lineHeight: '1.65' }}>
            {description}
          </h3>
          <Flex alignItems='baseline' style={{ color: '#757575' }}>
            {license && <span style={{ marginRight: '8px', fontSize: '14px' }}>{license}</span>}

            {homepage && (
              <IconLink target='_blank' href={homepage}>
                <Home size={14} style={{ marginRight: '8px' }} />
              </IconLink>
            )}

            {repository &&
              repository.url && (
                <IconLink target='_blank' href={repository.url}>
                  <Github size={14} />
                </IconLink>
              )}
          </Flex>
        </header>
        <Markdown className='changelog' escapeHtml={false} source={html} />
        <Script
          url='https://cdn.jsdelivr.net/npm/anchor-js@4.1.0/anchor.min.js'
          onLoad={() => {
            anchors.add('.changelog h1, .changelog h2, .changelog h3')
          }}
        />
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
