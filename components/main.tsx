import React from 'react'
import useSWR from 'swr'

const fetcher = () => fetch('/api/reading-supply').then((res) => res.json())

const postIDs = [
  {
    id: "c85f250e-e6f6-47c9-a2a8-c69c6cfa97c4",
    route: "mcallister-log-pa",
    name: "Mcallister Log (PA)",
  },
  {
    id: "6b728708-817a-4ca7-8cd4-85bb67c589a8",
    route: "buckeye-log-wv",
    name: "Buckeye Log (WV)",
  },

  {
    id: "40342f19-1d3c-4980-bbc6-6f228a681e8a",
    route: "nameless-log-wv",
    name: "Nameless Log (WV)",
  },
  {
    id: "617cc7bc-e6f2-4415-85d4-44c41fc65134",
    route: "bone-norman-log-wv",
    name: "Bone Norman Log (WV)",
  },
  {
    id: "333b318f-93b6-4125-b134-57cb4a81d242",
    route: "rockland-springs-log-wv",
    name: "Rockland Springs Log (WV)"},

  {
    id: "3a1d4d5b-29d8-4fed-bd7f-36847ec47302",
    route: "scott-hollow-log-wv",
    name: "Scott Hollow Log (WV)",
  },
  // id: "5d1912eb-254f-4d9a-961a-5a4370e3d5fa"
  {
    id: "5d1912eb-254f-4d9a-961a-5a4370e3d5fa",
    route: "my-log-wv",
    name: "My Log (WV)",
  },
  {
    id: "9ebb86e3-ca6c-46ff-864d-2a64e1d1c014",
    route: "crowders-log-wv",
    name: "Crowder's Log (WV)"
  },
  {
    id: "312fcc97-480d-494b-b074-03353c23c3b6",
    route: "organ-log-wv",
    name: "Organ Log (WV)"
  },
  // id: "2ff1dd89-da7c-409d-b13d-84c33ae853b1"
  {
    id: "2ff1dd89-da7c-409d-b13d-84c33ae853b1",
    route: "ape-log-wa",
    name: "Ape Log (WA)",
  },
  {
    id: "3399bcee-b6c5-411c-b950-efdb1c436bd7",
    route: "washington",
    name: "Washington",
  },
  // id: "a60d3845-6376-4183-800c-e06097b5e339"
  {
    id: "a60d3845-6376-4183-800c-e06097b5e339",
    route: "deadhorse-log-wa",
    name: "Deadhorse Log (WA)",
  },
  // id: "bf3032d3-9083-4550-8a6f-298f6ce6b672"
  {
    id: "bf3032d3-9083-4550-8a6f-298f6ce6b672",
    route: "cave-ridge-log-wa",
    name: "Cave Ridge Log (WA)",
  },
  // id: "5ca20275-9545-4de2-be0f-39819f331e9f"
  {
    id: "5ca20275-9545-4de2-be0f-39819f331e9f",
    route: "lake-log-wa",
    name: "Lake Log (WA)",
  },
  // id: "4a7d6af3-c699-4b7a-8dcf-f1d9195454ef"
  {
    id: "4a7d6af3-c699-4b7a-8dcf-f1d9195454ef",
    route: "goldmeyer-hot-springs-wa",
    name: "Goldmeyer Hot Springs (WA)",
  },
  // // id: ""
  // {'lost-soldiers-log-ca': 'Lost Soldiers Log (CA)'},
  // id: "a30a4855-f58d-4fb9-aeb5-db2e2554a476"
  {
    id: "a30a4855-f58d-4fb9-aeb5-db2e2554a476",
    route: "clay-log-ca",
    name: "Clay Log (CA)",
  },
  // id: "874df388-936f-4f81-90fb-a00ae84a8e1b"
  {
    id: "874df388-936f-4f81-90fb-a00ae84a8e1b",
    route: "cave-ridge-log-ca",
    name: "Cave Ridge Log (CA)",
  },
  // id: "408ed629-6bfc-4cf3-970a-84d6ae1d2b05"
  {
    id: "408ed629-6bfc-4cf3-970a-84d6ae1d2b05",
    route: "cave-ridge-log-ca",
    name: "Cave Ridge Log (CA)",
  },
  // id: "71b5d1f6-a402-423b-902e-242a55bde041"
  {
    id: "71b5d1f6-a402-423b-902e-242a55bde041",
    route: 'neversink-log-al',
    name: 'Neversink Log (AL)',
  },
  // id: "ed6b0981-6fea-46f7-84cf-086819b3188e"
  {
    id: "ed6b0981-6fea-46f7-84cf-086819b3188e",
    route: 'tac-wees-log-id',
    name: 'Tac Wees Log (ID)',
  },
  // id: "53931f1e-7bbb-47fb-9184-8bec90a53263"
  {
    id: "53931f1e-7bbb-47fb-9184-8bec90a53263",
    route: 'papoose-log-id',
    name: 'Papoose Log (ID)',
  },
  // id: "248bef7b-49b1-4afa-bf47-f31e3da08f0c"
  {
    id: "248bef7b-49b1-4afa-bf47-f31e3da08f0c",
    route: 'connies-log-ca',
    name: 'Connie\'s Log (CA)',
  },
  // id: "bda7d4a5-99cc-4d58-8f98-c87ad10a604d"
  {
    id: "bda7d4a5-99cc-4d58-8f98-c87ad10a604d",
    route: 'rippled-log-ca',
    name: 'Rippled Log (CA)',
  },
  // id: "d8169090-78b2-4537-bde0-c1a3b23a6160"
  {
    id: "d8169090-78b2-4537-bde0-c1a3b23a6160",
    route: 'rehoboth-log-ca',
    name: 'Rehoboth Log (CA)',
  },
]

export default function Main() {

  const {
    data,
    error,
    isLoading
  } = useSWR('/api/reading-supply', fetcher)

  console.log({isLoading})
  console.log({data})


  return (
    isLoading ?
    <div>loading...</div>
    :
    <Thing
      posts={data && data.posts}
      postIDs={postIDs}
    />
  )
}


function Thing({posts, postIDs}:any) {
  console.log({posts})
  // let postsArray : any[] = []

  // // take posts and iterate through the object returning a new array with the datashape of {id: string, title: string, content: string}
  // for (const [key, value] of Object.entries(posts)) {
  //   postsArray.push({
  //     id: key,
  //     title: value.data ? value.data.title : value.title,
  //     content: value.content
  //   })
  // }

  // console.log({postsArray})

  let caveLogPosts : any[] = []

  postIDs.map((postID) => {
    // find the post in posts where post[1] === postID.id
    const post = Object.entries(posts).find((post) => post[0] === postID.id)
    console.log({post})
    let selectedPost = post[1]
    Object.assign(selectedPost, {id: post[0]})
    caveLogPosts.push(selectedPost)
  })
  console.log("caveLogPosts", caveLogPosts)

  return (
    <div>
      {caveLogPosts.map((post) => {
        return (
          <div className={"flex"} key={post.id}>
            <h2 className={"font-mono text-neutral-400 pr-4"}>{post.id.slice(-6)}</h2>
            <h2>{post.data.title}</h2>
          </div>
        )
      })
      }
    </div>
  )
}