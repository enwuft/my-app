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
