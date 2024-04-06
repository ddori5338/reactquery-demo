import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePostQuery } from './hooks/usePosts'

const ReactQueryPage = () => {
    
    const {isLoading, data, isError, error, refetch } = usePostQuery();
    console.log('ddd', isLoading, data, isError, error);

    if (isLoading) {
        return <h1>로딩중</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
    return (
        <div>
            리액트쿼리페이지
            {data?.map(item => <div>{item.title}</div>)}
            <button onClick={refetch}>posts 다시 들고오기</button>
        </div>
    )
}

export default ReactQueryPage
