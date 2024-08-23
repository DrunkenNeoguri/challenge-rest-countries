import NationCard from "@/components/nation-card/nation-card";
import { Grid } from "@radix-ui/themes";

export default function NationList({
  nationList,
}: {
  nationList: NationType[];
}) {
  return (
    <Grid columns="4" gap="72px" width="auto" px="80px">
      {nationList?.map((nation: NationType) => {
        return <NationCard key={nation.name} {...nation} />;
      })}
    </Grid>
  );
}
