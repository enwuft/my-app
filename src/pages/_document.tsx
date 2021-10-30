import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <link rel="icon" type="image/ico" href="/favicon-32x32.png" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/Boon-Regular.woff2"
            rel="preload"
            type="font/woff2"
          />
          <script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_SSo8UcvW6lMEmoYkGKDhp7SClxVZHK9eQwoM2Ue8zB9',{api_host:'https://app.posthog.com'})
</script>
        </Head>
        <body>
          <noscript>
            <iframe
              height="0"
              src="https://www.googletagmanager.com/ns.html?id=`${GTM_ID}"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
              width="0"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
