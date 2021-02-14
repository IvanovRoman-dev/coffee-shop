import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/App.scss'
import Slider from '../components/Slider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider/>
  </Layout>
)

export default IndexPage
