import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { GoHome } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { TbEdit } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      maxWidth="100%"
      justifyContent="space-between"
      alignItems="center"
      spacing={2} // Add spacing between icons
      padding={2} // Optional padding for better spacing around the icons
    > 
      <Link to="/">
        <GoHome size={32} />
      </Link>
      <Link to="/Search">
        <IoIosSearch size={32} />
      </Link>
      <TbEdit size={32} />
      <CiHeart size={32} />
      <Link to={'/profile/threads/1'}>
      <RxAvatar size={32} />
      </Link>
      
    </Stack>
  );
};

export default Navbar;
