"use client";

import NationCard from "@/components/nation-card/nation-card";
import useGetRegionListQuery from "@/hooks/use-get-list";
import { Grid } from "@radix-ui/themes";

export default function RegionList() {
  const { data } = useGetRegionListQuery();

  return (
    <Grid columns="4" gap="72px" width="auto" px="80px">
      {data?.map((region: RegionType) => {
        return <NationCard key={region.name} {...region} />;
      })}
    </Grid>
  );
}
