import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'
import stylesheet from 'styles/index.scss'

const Particles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

const Wrapper = styled.article`
margin: 0 auto;
max-width: 560px;
padding: 0 1rem;
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>changelog.sh | See the changelog for any NPM package</title>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body className='standard'>
          <Fragment>
            <Particles id='particles-js' />
            <Wrapper>
              <Main />
            </Wrapper>
          </Fragment>
          <NextScript />
        </body>
      </html>
    )
  }
}
