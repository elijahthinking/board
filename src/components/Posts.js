import { useEffect } from "react"
import { getPosts } from "../api/postAPI";

const Posts = () => {
  useEffect(()=>{
    const getPostData= async ()=>{
    try {
      const postData = await getPosts();
      console.log(postData);
     }catch (error) {
      console.log(error);
     }
    }
    getPostData();
  },[]);
  return (
    <div className="posts">
      <h2>자유게시판</h2>
    </div>
  )
}

export default Posts