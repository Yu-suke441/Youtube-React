import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VIdeoGridItem/VideoGridItem'
const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)
    useEffect(() => {
        fetchPopularData().then((res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem
                                id={popular.id}
                                key={popular.id}
                                src={popular.snippet.thumbnails.default.url}
                                title={popular.snippet.title}></VideoGridItem>
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Top
