"use client";
import { DarkSearchIcon, LightSearchIcon } from "@/assets/icons";
import { Box, TextField } from "@radix-ui/themes";

type SearchBarPropType = {
  darkMode: boolean;
};

export default function SearchBar(props: SearchBarPropType) {
  const { darkMode } = props;

  return (
    <TextField.Root placeholder="Search for a country..." size="3">
      <TextField.Slot>
        {!darkMode ? <LightSearchIcon /> : <DarkSearchIcon />}
      </TextField.Slot>
    </TextField.Root>
  );
}
