import { Box, Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NationCard(props: NationType) {
  const { name, population, region, capital, flag = props.flags.png } = props;
  const router = useRouter();

  const handleMoveToDetail = () => {
    return router.push(`/nation/detail?name=${name}`);
  };

  return (
    <Flex
      direction="column"
      width="264px"
      height="336px"
      role="button"
      onClick={handleMoveToDetail}
      style={{
        cursor: "pointer",
      }}
    >
      <Card size="1">
        <Inset clip="padding-box" side="top" pb="0">
          <Image
            alt={`${name}'s flag`}
            src={flag}
            width={264}
            height={162}
            style={{
              objectFit: "cover",
            }}
          />
        </Inset>

        <Flex height="174px" direction="column" p="12px">
          <Text my="8px">
            <Strong
              style={{ fontSize: "16px", lineHeight: "20px" }}
            >{`${name}`}</Strong>
          </Text>
          <Flex>
            <Flex gap="8px" direction="column" my="8px">
              <Text style={{ fontSize: "14px", lineHeight: "18px" }}>
                <Strong>Population: </Strong>
                {`${population}`}
              </Text>
              <Text style={{ fontSize: "14px", lineHeight: "18px" }}>
                <Strong>Region: </Strong>
                {`${region}`}
              </Text>
              <Text style={{ fontSize: "14px", lineHeight: "18px" }}>
                <Strong>Capital: </Strong>
                {`${capital}`}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
