import React, { FormEvent } from 'react'

const apiUrl = process.env.REACT_APP_API_URL

function LoginScreen() {

    // 登录的函数
    const login = (param: {username: string, password: string}) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(async (response) => {
            if (response.ok) {
              
            }
        });
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }
    return (
      <form action="" onSubmit={handleSumbit}>
          <div>
              <label htmlFor="username">用户名</label>
              <input type="text" id="username"/>
          </div>
          <div>
              <label htmlFor="password">密码</label>
              <input type="text" id="password"/>
          </div>
          <button type="submit">登录</button>
      </form>
    )
}

export default LoginScreen