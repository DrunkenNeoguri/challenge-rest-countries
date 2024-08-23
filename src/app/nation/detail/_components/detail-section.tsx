"use client";
import { Button, Flex, Heading, Section, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailSection(props: NationType) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = props;

  const router = useRouter();

  const handleMoveToBack = () => {
    return router.push("/nation");
  };

  return (
    <Section p="4">
      <Flex justify="center" align="center">
        <Flex direction="column" width="1440px">
          <Button
            size="3"
            style={{ width: "360px", margin: "80px 0" }}
            type="button"
            onClick={handleMoveToBack}
          >
            Back
          </Button>

          <Flex justify="between">
            <Image
              alt={`${name}'s flag`}
              src={flag}
              width={560}
              height={400}
              style={{
                objectFit: "cover",
              }}
            />
            <Flex direction="column" gap="36px">
              <Heading>{name}</Heading>
              <Flex>
                <Flex direction="column" gap="12px">
                  <Text>
                    <Strong>Native Name:</Strong>
                    {nativeName}
                  </Text>
                  <Text>
                    <Strong>Popluation: </Strong>
                    {population}
                  </Text>
                  <Text>
                    <Strong>Region:</Strong>
                    {region}
                  </Text>
                  <Text>
                    <Strong>Sub Region: </Strong>
                    {subregion}
                  </Text>
                  <Text>
                    <Strong>Capital: </Strong>
                    {capital}
                  </Text>
                </Flex>
                <Flex direction="column" gap="12px">
                  <Text>
                    <Strong>Top Level Domain:</Strong>
                    {topLevelDomain}
                  </Text>
                  <Text>
                    <Strong>Currencies: </Strong>
                    {currencies?.map((currency) => {
                      return <Text key={currency.code}>{currency.name}</Text>;
                    })}
                  </Text>
                  <Text>
                    <Strong>Languages: </Strong>
                    {languages?.map((language) => {
                      return <Text key={language.name}>{language.name}</Text>;
                    })}
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Text my="32px">
                  <Strong>Border Countries:</Strong>
                  {borders?.map((border) => {
                    return <Text key={border}>{border}</Text>;
                  })}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
