import { Select } from "@radix-ui/themes";

type FilterPropType = {
  darkMode: boolean;
};

export default function Filter(props: FilterPropType) {
  const { darkMode } = props;
  return (
    <Select.Root size="3">
      <Select.Trigger placeholder="Filter by Region" />
      <Select.Content>
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
