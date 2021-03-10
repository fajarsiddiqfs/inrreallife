import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import SectionThree from '../components/sectionThree'
import SectionFour from '../components/sectionFour'

const IndexPage = () => (
  <Layout>
    <SEO title="Meeting Makers In Real Life - Tweets By Fajar Siddiq" />

    <SectionThree />
    <SectionFour />
  </Layout>
)

export default IndexPage
