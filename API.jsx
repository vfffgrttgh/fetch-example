import { useEffect, useState } from 'react'

function App() {
  const [value, setter] = useState({})

  async function fetchData(url) {
    const response = await fetch(url);

    return response.json()
  }

  useEffect(() => {
    fetchData("url").then(res => setter(res))
  }, [])

  return (
    <>
      <h1>[value.props_of_data}</h1>
    </>
  )
}
