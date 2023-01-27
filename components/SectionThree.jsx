import { Accordion, Text, Container, Title, Badge } from "@mantine/core";
import { Icon3dRotate } from "@tabler/icons";

const SectionFive = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-five">
      <Container>
        <div style={{ marginBottom: 30 }}>
          <div style={{ textAlign: "left" }}>
            <Badge variant="filled" color="orange.9">
              FAQs
            </Badge>
          </div>
          <Text color="black">
            <Title order={1} style={{ marginTop: 10 }}>
              You have questions, we have answers.
            </Title>
          </Text>
        </div>

        <Accordion variant="contained">
          <Accordion.Item value="item1">
            <Accordion.Control
              icon={<Icon3dRotate size={20} color={"#FFA945"} />}
            >
              What do you do?
            </Accordion.Control>
            <Accordion.Panel>Yes, of course.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item2">
            <Accordion.Control
              icon={<Icon3dRotate size={20} color={"#FFA945"} />}
            >
              What organizations do you work with?
            </Accordion.Control>
            <Accordion.Panel>Unfortunately no.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item3">
            <Accordion.Control
              icon={<Icon3dRotate size={20} color={"#FFA945"} />}
            >
              How can I join?
            </Accordion.Control>
            <Accordion.Panel>Oh yes!</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default SectionFive;
