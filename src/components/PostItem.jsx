import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                {/*Получаем фукнцию remove из компонентов выше и передаем в него текущий post, далее там будет фильтрация по id и удаление нужного поста*/}
                <MyButton onClick={()=> props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;