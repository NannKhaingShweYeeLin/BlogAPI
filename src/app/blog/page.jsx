import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});

  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}

const Blogpage = async () => {
  //api
  const posts = await getData()

  return (
    <div className={styles.container}>
     
      {posts.map((post) => (
        
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
        </div>

      ))}
        
        
    
    </div>
  )
}

export default Blogpage
