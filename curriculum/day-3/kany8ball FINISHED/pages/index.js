import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState('');
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(async () => {
    setIsLoading(true);
    const result = await axios(
      'http://slowwly.robertomurray.co.uk/delay/2000/url/https://api.kanye.rest/',
    );
    setApiResponse(result.data.quote);
    setIsLoading(false);

    // axios
    //   .get(
    //     'http://slowwly.robertomurray.co.uk/delay/2000/url/https://api.kanye.rest/',
    //   )
    //   .then((res) => {
    //     setApiResponse(res.data.quote);
    //     console.log(apiResponse);
    //   });
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
            {isLoading && !isFirstMount ? (
              <img
                style={{ width: '50px', margin: '80px auto' }}
                src="https://thumbs.gfycat.com/SkinnySeveralAsianlion.webp"
                alt="loading..."
              />
            ) : (
              <p className={styles.description}>{apiResponse}</p>
            )}
          </a>
        </div>
        <form
          style={{ color: 'black' }}
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Name:
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />{' '}
          </label>
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              setSearch(query);
              setIsFirstMount(false);
            }}
          />
        </form>
      </main>

      <footer className={styles.footer}>Powered by APIs!</footer>
    </div>
  );
}
