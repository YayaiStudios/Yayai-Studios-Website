import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yayai Studios | Home</title>
      </Head>
      <div className="container">
        <nav>
          <div className="left">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </div>
          <div className="right">
            <Image
              className="multiclick"
              src="/logo.png"
              alt="Yayai Studios"
              width={50}
              height={50}
            />
          </div>
        </nav>
        <main>
          <div className="main-grid">
            <h1 className="main-heading">
              Here&#39;s whats going on at{" "}
              <span className="name">YAYAI STUDIOS.</span>
            </h1>
            <div className="card">
              <h2>Official Twitter</h2>
              <p>
                make sure you follow us{" "}
                <Link href="https://twitter.com/StudiosYayai">
                  @StudiosYayai
                </Link>{" "}
                on Twitter <br />
                for latest news, updates and spoilers.
              </p>
            </div>
            <div className="card">
              <h2>Official Discord</h2>
              <p>
                Join our{" "}
                <Link href="https://discord.gg/PqFNEbxzWz">discord server</Link>{" "}
                <br />
                for news and updates directly through discord!
              </p>
            </div>
            <div className="card">
              <h2>About Us</h2>
              <p>
                Get to know us more by checking out our <br /> new{" "}
                <Link href="./about.html">about page</Link>.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
