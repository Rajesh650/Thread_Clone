import { Avatar, Button, Stack, Typography } from "@mui/material";

const ProfileBar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        boxShadow={"5px 5px 5px gray"}
        width={"90%"}
        borderRadius={"15px"}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"} gap={0.6}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
              Rajesh_2001
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color={"gray"}>
              This is bio.
            </Typography>
            <Typography variant="caption" fontSize={"1rem"}>
              This is bio.
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{
            border: "1px solid gary",
            color: "black",
            borderRadius: "10px",
            p: 2,
            height: 40,
          }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
};

export default ProfileBar;
