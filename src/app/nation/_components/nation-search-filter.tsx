"use client";
import Filter from "@/components/filter/filter";
import SearchBar from "@/components/search-bar/search-bar";
import { DarkModeContext } from "@/providers/dark-mode-proivder";
import { Flex } from "@radix-ui/themes";
import { useContext } from "react";

export default function NationSearchFilter() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Flex direction="row" justify="between" align="center" my="48px" mx="80px">
      <SearchBar darkMode={darkMode} />
      <Filter darkMode={darkMode} />
    </Flex>
  );
}
