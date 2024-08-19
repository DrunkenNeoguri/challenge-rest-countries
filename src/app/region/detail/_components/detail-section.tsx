import {
  Box,
  Button,
  Flex,
  Heading,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";

export default function DetailSection() {
  return (
    <Section>
      <Flex direction="column">
        <Button>Back</Button>
        <Flex>
          <Box>Image</Box>
          <Flex direction="column">
            <Heading>Nation Name</Heading>
            <Box>
              <Flex>
                <Text>
                  <Strong>Native Name:</Strong>
                </Text>
                <Text>
                  <Strong>Popluation: </Strong>
                </Text>
                <Text>
                  <Strong>Region:</Strong>
                </Text>
                <Text>
                  <Strong>Sub Region: </Strong>
                </Text>
                <Text>
                  <Strong>Capital: </Strong>
                </Text>
              </Flex>
              <Flex>
                <Text>
                  <Strong>Top Level Domain:</Strong>
                </Text>
                <Text>
                  <Strong>Currencies: </Strong>
                </Text>
                <Text>
                  <Strong>Languages: </Strong>
                </Text>
              </Flex>
            </Box>
            <Flex>
              <Text>
                <Strong>Border Countries:</Strong>
              </Text>
              <Box>A</Box>
              <Box>B</Box>
              <Box>C</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
