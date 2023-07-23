import React from 'react'
import { User } from '../../types/user'

// 传入参数的类型
type paramType = {
    name: string,
    personId: string
}

interface SearchPanelProps {
    users: User[],
    param: paramType,
    setParam: (param: paramType) => void
}

function SearchPanel({users, param, setParam} : SearchPanelProps) {

    return (
        <form>
            <div>
                <input type="text" value={param.name} onChange={e => setParam({ ...param, name: e.target.value })} />
                <select name="" id="" onChange={e => setParam({ ...param, personId: e.target.value })}>
                    <option value="">全部</option>
                    {
                        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
            </div>
        </form>
    )
}

export default SearchPanel