import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://i.pinimg.com/736x/a0/99/2a/a0992afa9c1f2b47db51d11f69c897f3--city-wallpaper-tree-wallpaper.jpg" />
      <Post img="https://i.pinimg.com/236x/c6/aa/ea/c6aaeac100f883b11e2f9141e1ab654f--romantic-vacations-romantic-getaways.jpg" />
      <Post img="https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0" />
      <Post img="https://www.myglobalviewpoint.com/wp-content/uploads/2021/12/Travel-Blogging-is-Popular.jpg" />
      <Post img="https://navbharattimes.indiatimes.com/photo/msid-91609410,imgsize-197810/pic.jpg" />
      <Post img="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/south-india-tour-package-1555403191-390X219.jpg" />
    </div>
  );
}
