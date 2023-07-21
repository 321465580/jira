import React from 'react'
// import { useEffect, useState } from "react"

function SearchPanel({users, param, setParam}) {

    return (
        <form>
            <div>
                <input type="text" value={param.name} onClick={e => setParam({ ...param, name: e.target.value })} />
                <select name="" id="" onChange={e => setParam({ ...param, personid: e.target.value })}>
                    <option value="">全部</option>
                    {
                        users.map(user => <option value={user.id}>{user.name}</option>)
                    }
                </select>
            </div>
        </form>
    )
}

export default SearchPanel