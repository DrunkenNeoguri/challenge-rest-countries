import { Select } from "@radix-ui/themes";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type FilterPropType = {
  darkMode: boolean;
};

export default function Filter(props: FilterPropType) {
  const { darkMode } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      onValueChange={(state: RegionType) => {
        const newParams = new URLSearchParams(searchParams);
        if (!state) {
          newParams.delete("region");
          if (newParams.size === 0) {
            return router.push(`${pathname}`);
          } else {
            return router.push(`${pathname}?${newParams.toString()}`);
          }
        } else {
          newParams.set("region", state);
          return router.push(`${pathname}?${newParams.toString()}`);
        }
      }}
    >
      <Select.Trigger
        placeholder="Filter by Region"
        style={{
          width: "200px",
          height: "56px",
          fontWeight: 500,
          paddingLeft: "24px",
        }}
      />
      <Select.Content style={{ width: "200px", margin: 0 }}>
        <Select.Group>
          <Select.Item value="Africa">Africa</Select.Item>
          <Select.Item value="America">America</Select.Item>
          <Select.Item value="Asia">Asia</Select.Item>
          <Select.Item value="Europe">Europe</Select.Item>
          <Select.Item value="Oceania">Oceania</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
