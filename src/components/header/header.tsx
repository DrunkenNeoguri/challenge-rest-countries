"use client";
import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { DarkModeContext } from "@/providers/dark-mode-proivder";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useContext } from "react";

export default function Header() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    <Flex
      justify="between"
      align="center"
      position="fixed"
      top="0"
      height="80px"
      width="100%"
      py="28px"
      px="80px"
      style={{
        background: "white",
        zIndex: 10,
        boxShadow: "0px 5px 10px #cdcdcdaf",
      }}
    >
      <Heading as="h1">Where in the World?</Heading>
      <Button>
        {/* {!darkMode ? <LightModeIcon /> : <DarkModeIcon />} Dark Mode */}
      </Button>
    </Flex>
  );
}
