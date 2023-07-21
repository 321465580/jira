import React, { useEffect, useState } from "react";
import SearchPanel from "./search-panel";
import List from "./list";

// require('dotenv').config();
const apiUrl = process.env.REACT_APP_API_URL

function ProjectListScreen() {

  // 请求到的用户数量
  const [users, setUsers] = useState([])
  // 输入框的参数
  const [param, setParam] = useState({
    name: "",
    personid: "",
  });

  // 查询到的列表，列表是很多个项目的列表 
  const [list, setList] = useState([]);

  // 请求数据
  useEffect(() => {
    // console.log(apiUrl);
    fetch(`${apiUrl}/projects`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);

  // 页面第一次加载的时候去加载数据
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List  users={users} list={list} />
    </div>
  );
}

export default ProjectListScreen;