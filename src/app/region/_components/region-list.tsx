"use client";

import NationCard from "@/components/nation-card/nation-card";
import useGetRegionListQuery from "@/hooks/use-nation-list-";
import { Grid } from "@radix-ui/themes";

export default function RegionList({
  regionList,
}: {
  regionList?: NationType[];
}) {
  return (
    <Grid columns="4" gap="72px" width="auto" px="80px">
      {regionList?.map((region: NationType) => {
        return <NationCard key={region.name} {...region} />;
      })}
    </Grid>
  );
}
