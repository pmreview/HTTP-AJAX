import React from 'react';

const FriendFrom = props => {
    return (
        <div>
            <form onSubmit={props.addFriend}>
                <input
                    placeholder="Name"
                    onChange={props.handleChanges}
                    value={props.name}
                    name="name"
                />
                <input
                    placeholder="Age"
                    onChange={props.handleChanges}
                    value={props.age}
                    name="age"
                />
                <input
                    placeholder="Email"
                    onChange={props.handleChanges}
                    value={props.email}
                    name="email"
                />

                <button type="submit">Add Friend</button>
                <button type="button" onClick={props.updateFriend}>Update</button>
                <button type="button" onClick={props.deleteFriend}>Delete</button>
            </form>
        </div>
    )
}

export default FriendFrom;