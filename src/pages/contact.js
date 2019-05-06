import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Contact from "../forms/Contact"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Got a Question? I'd love to hear from you, send me a message and I&apos;ll respond as soon as possible.</p>
    <Contact />
  </Layout>
)

export default SecondPage
