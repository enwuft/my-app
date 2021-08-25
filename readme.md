[![Code Grade](https://www.code-inspector.com/project/26782/score/svg)](https://frontend.code-inspector.com/project/26782/dashboard)
<a target="_blank" href="https://github.com/enwuft/my-app/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">
        <img alt="GitHub issues by-label" src="https://img.shields.io/github/issues/enwuft/my-app/good%20first%20issue?color=9cf&label=good%20first%20issue&style=flat-square">
    </a>

### POC

https://web.dev/code-splitting-with-dynamic-imports-in-nextjs/

`js
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
() => import('../components/hello'),
{ loading: () => <p>...</p> }
)

function Home() {
return (

<div>
<Header />
<DynamicComponentWithCustomLoading />
<p>HOME PAGE is here!</p>
</div>
)
}

export default Hom
`
