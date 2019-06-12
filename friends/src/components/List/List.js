import React from 'react';

const List = props => {
    console.log('props here', props)
    return (
        <div onClick={() => props.selectFriend(props.friend.id)}>
            <h1>{props.friend.name}</h1>
            <p><b>Age:</b> {props.friend.age}</p>
            <p><b>Email:</b> {props.friend.email}</p>
        </div>
    )
}

export default List;