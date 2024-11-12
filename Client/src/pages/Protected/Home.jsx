import { Stack } from "@mui/material";
import Input from "../../component/Home/Input";
import Post from "../../component/Home/Post";

const Home = () => {
  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Stack>
    </>
  );
};
export default Home;
