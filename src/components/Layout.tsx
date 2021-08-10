import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Pane, Heading } from "evergreen-ui";
import { Link as Linked } from "evergreen-ui";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "default" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>Logo</Heading>
      </Pane>
      <Pane>
        <Linked marginRight={16}>Blog</Linked>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Pane>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&rsquo;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
