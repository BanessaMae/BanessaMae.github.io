import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from '../api/posts';

const PostsList = () => {
    const { data = [] } = useGetAllPostsQuery();

    return (
        <>
            <h1>Список постов</h1>
            {data.map((post) => (
                <article className="app_article" key={post.id}>
                    <h3>Номер: {post.id}</h3>
                    <p>Заголовок: {post.title}</p>
                    <p>Описание: {post.body.length > 50 ? post.body.slice(0, 50) + '...' : post.body}</p>
                    <Link to={`/post/${post.id}`}>
                        <button className="app__button">Просмотр</button>
                    </Link>
                </article>
            ))}
        </>
    );
};

export default PostsList;