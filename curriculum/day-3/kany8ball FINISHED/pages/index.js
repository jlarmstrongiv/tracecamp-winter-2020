import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(""); // changes when we hit the "submit" button. allows our useEffect to be called any time we press the submit button (because we pass search as a dependency to useEffect)
  const [isLoading, setIsLoading] = useState(false); // when isLoading is true we display our spinner loading icon

  useEffect(() => {
    setIsLoading(true); // set isLoading to TRUE before+during our API call

    // for pulling the quote
    const getQuote = () =>
      axios(
        "http://slowwly.robertomurray.co.uk/delay/3000/url/https://api.kanye.rest/"
      ).then((response) => response.data.quote);

    // call getQuote and store its value (which is a promise) in result
    getQuote().then((quote) => {
      setApiResponse(quote);
      setIsLoading(false); // when the API call is done
    });
  }, [search]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kanye8Ball</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kany8Ball</h1>
        <br></br>

        <div className={styles.grid}>
          <a className={styles.card}>
            {isLoading ? (
              <img
                style={{ width: "50px", margin: "80px auto" }}
                src="https://thumbs.gfycat.com/SkinnySeveralAsianlion.webp"
                alt="loading..."
              />
            ) : (
              <p className={styles.description}>{apiResponse}</p>
            )}
          </a>
        </div>
        <form
          style={{ color: "black" }}
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Name:
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />{" "}
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              setSearch(query);
            }}
          />
        </form>
      </main>

      <footer className={styles.footer}>Powered by APIs!</footer>
    </div>
  );
}
