import React from 'react'
import { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const Data = useLoaderData();
    // const [Data, setData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data) => setData(data))
    // }, [])

  return (
    <>
      <div className="flex flex-col items-center h-[500px] justify-center">
        <div className="text-3xl font-semibold">
            Github Followers : {Data.followers}
        </div>
        <div className="mt-8">
        <img src={Data.avatar_url} alt="" width={300}/>
        </div>
      </div>
    </>
  )
}

export default Github;

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
