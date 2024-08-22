"use client";
import { DarkSearchIcon, LightSearchIcon } from "@/assets/icons";
import { TextField } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

type SearchBarPropType = {
  darkMode: boolean;
};

export default function SearchBar(props: SearchBarPropType) {
  const { darkMode } = props;
  const [keyword, setKeyword] = useState<string>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSetKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (!keyword || keyword.trim() === "") {
      newParams.delete("keyword");
      if (newParams.size === 0) {
        return router.push(`${pathname}`);
      } else {
        return router.push(`${pathname}?${newParams.toString()}`);
      }
    } else {
      newParams.set("keyword", keyword);
      return router.push(`${pathname}?${newParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField.Root
        placeholder="Search for a country..."
        style={{ width: "480px", height: "56px" }}
        id="keyword"
        value={keyword}
        onChange={handleSetKeyword}
      >
        <TextField.Slot style={{ paddingLeft: "32px", paddingRight: "24px" }}>
          {!darkMode ? <LightSearchIcon /> : <DarkSearchIcon />}
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
}
