import { Stack } from "@mui/material";
import ProfileBar from "../../component/Search/ProfileBar";
import SearchInput from "../../component/Search/SearchInput";
const Search = () => {
  return (
    <>
      <SearchInput></SearchInput>
      <Stack flexDirection={"column"} gap={1} mb={5} width={"50%"} mx={"auto"}>
        <ProfileBar />
      </Stack>
    </>
  );
};

export default Search;
