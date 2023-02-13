import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta keywords="megadance ballroom dance latin children youth adult" />
        <meta
          name="description"
          content="kharkiv dance ballroom and latin dance for children and adult
          address: Kharkiv, str, phone: 0678612768, Mary 
          work since 9:00 to 21:00 from Monday to Saturday"
        />
      </Head>

      <body>
        <Main />
        {/* Here we will mount our modal portal */}
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
