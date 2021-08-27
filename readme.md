[![Code Grade](https://www.code-inspector.com/project/26782/score/svg)](https://frontend.code-inspector.com/project/26782/dashboard)

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
