import React from 'react';
import { useGetPostByIdQuery } from '../api/posts';
import { useDispatch } from 'react-redux';
import { setDetailsPost } from '../store/PostsSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data = [] } = useGetPostByIdQuery(id);

    return (
        <>
            <h1>Полный пост</h1>
            {data && (
                <>
                    <p> Номер: {data.id}</p>
                    <h4>Заголовок: {data.title}</h4>
                    <p>Описание: {data.body}</p>
                    <Link to="/">
                        <button className="app__button" onClick={() => dispatch(setDetailsPost())}>Назад</button>
                    </Link>
                </>
            )}
        </>
    );
};

export default PostDetails;