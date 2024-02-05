import Image from "next/image"
import styles from "./singlePost.module.css"

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json();
};

const SingleBlogPage =  async ({params}) => {
  const {slug} = params;
  
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className= {styles.img} src="https://images.pexels.com/photos/19795102/pexels-photo-19795102/free-photo-of-fources.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" 
        fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        <Image className={styles.avatar} src="https://images.pexels.com/photos/19795102/pexels-photo-19795102/free-photo-of-fources.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" 
        width={50} height={50}/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Terry Jefferson</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Publishex</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage
