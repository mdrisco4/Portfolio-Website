import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const TriviaGame = () => (
  <Layout>
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          border: "2px solid red",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Trivia Game
      </h2>
      <p>
        I wrote this game using HTML, CSS and Vanilla JS. Rather than baing
        populated with data fetched from a trivia API I opted to write the
        questions myself with the idea being that I could write sets of trivia
        questions across different categories to be seeded into a database for
        users to choose.
      </p>
    </div>
  </Layout>
)

export default TriviaGame
