import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowRight, BsClock, BsInstagram, BsLinkedin } from "react-icons/bs";
import heros from "../assets/heros.jpg";
import ssc from "../assets/ssc-logo.jpg";
import "../App.css";

const Home = () => {
  const aboutUs =
    "At SSC, we're on a mission to create positive change in our community. With a passionate team of volunteers, we're dedicated to empowering through service and collaboration. Our projects and initiatives are driven by a shared belief in making a lasting impact. Join us in making a difference today.";
  const events = [
    {
      heading: "15 August Celebration",
      desc: "Inviting all to the ceremony.",
      time: "8:00 AM",
      date: "15 AUGUST",
    },
  ];
  const team = [
    {
      name: "Abcdefghi Jkl",
      role: "Community Outreach Coordinator",
      img: heros,
      insta: "",
      linkedIn: "",
    },
    {
      name: "Xdflhlk jafk",
      role: "Event Planner",
      img: heros,
    },
  ];
  return (
    <>
      <Box
        className="hero-section mb-5"
        backgroundImage={heros}
        color={"white"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        textAlign={{ sm: "center", lg: "right" }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          backgroundColor={"#0055a499"}
          padding={70}
          paddingLeft={{ lg: "40%" }}
        >
          <Heading
            className="fade-in-bottom"
            fontSize={{ lg: 60 }}
            opacity={0}
            style={{ animationDelay: "1s" }}
          >
            Empowering Societies
            <br />
            Through Services
          </Heading>
          <Text
            fontSize={{ lg: "xl" }}
            paddingY={10}
            opacity={0}
            className="fade-in-bottom"
            style={{ animationDelay: "2s" }}
          >
            Join SSC and make a positive impact in your community. We're a group
            of volunteers dedicated to uplifting through service and
            collaboration. Together, we're creating a world where everyone
            thrives.
          </Text>
          <Button
            className="fade-in-left"
            size={"md"}
            backgroundColor="#FFD54F"
            opacity={0}
            _hover={{ backgroundColor: "#FFC107" }}
            color="#0055A4"
            fontWeight={"bold"}
            rightIcon={<BsArrowRight />}
            style={{ animationDelay: "3s" }}
          >
            Join Our Club
          </Button>
        </Box>
      </Box>
      <Box
        className="about-us mb-5 p-3 mx-auto"
        id="about-us"
        width={{ lg: "50vw" }}
      >
        <Show above="md">
          <Image src={ssc} float={"left"} width={"20vw"} marginY={"65px"} />
        </Show>
        <Box>
          <Heading fontSize={20} fontFamily={"Montserrat"}>
            ABOUT US
          </Heading>
          <Heading fontSize={25}>
            We at SSC ensure that our shared passion for creating positive
            change is translated into impactful actions.
          </Heading>
          <Text
            style={{ animationDelay: "3s" }}
            opacity={0}
            className="fade-in-bottom"
            fontWeight={"bold"}
          >
            {aboutUs}
          </Text>
          <Button
            backgroundColor="#FFD54F"
            _hover={{ backgroundColor: "#FFC107" }}
          >
            View Details
          </Button>
        </Box>
        <Box className="projects"></Box>
      </Box>
      <Box
        className="events mb-5"
        id="events"
        backgroundImage={
          "linear-gradient(to right, yellow, yellow 55%, white 55%)"
        }
      >
        <Box width={"80vw"} margin={"auto"} padding={{ lg: "60px" }}>
          <Heading marginBottom={{ lg: "60px" }} fontFamily={"Montserrat"}>
            EVENTS
          </Heading>
          {events.map((event) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow={"hidden"}
              backgroundColor={"yellow"}
            >
              <Stack
                fontWeight={500}
                minWidth={"56.75%"}
                padding={8}
                backgroundColor={"white"}
              >
                <CardBody>
                  <Heading fontSize={{ lg: "20px" }}>{event.heading}</Heading>
                  <Text>{event.desc}</Text>
                </CardBody>
                <CardFooter>
                  <Text>
                    <Icon children={<BsClock />} />
                    {event.time}
                  </Text>
                </CardFooter>
              </Stack>
              <Image src={heros} objectFit={"cover"} maxW={{ lg: "40%" }} />
            </Card>
          ))}
        </Box>
      </Box>
      <Box
        className="team mb-5 mx-auto p-3"
        id="team"
        width={"80vw"}
        textAlign={"center"}
      >
        <Heading fontSize={"20px"}>OUR TEAM</Heading>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          {team.map((member) => (
            <Box>
              <Image src={member.img} />
              <Card
                w={"80%"}
                m={"auto"}
                pos={"relative"}
                bottom={12}
                p={5}
                _hover={{ backgroundColor: "yellow" }}
              >
                <Heading fontSize={"18px"} fontFamily={"Montserrat"}>
                  {member.name}
                </Heading>
                <Heading fontSize={"15px"} fontFamily={"sans-serif"}>
                  {member.role}
                </Heading>
                <HStack m={"auto"}>
                  <IconButton
                    variant={"outline"}
                    borderRadius={"50%"}
                    borderColor={"black"}
                    icon={<BsInstagram />}
                    _hover={{ color: "white", backgroundColor: "black" }}
                  />
                  <IconButton
                    variant={"outline"}
                    borderRadius={"50%"}
                    borderColor={"black"}
                    icon={<BsLinkedin />}
                    _hover={{ color: "white", backgroundColor: "black" }}
                  />
                </HStack>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
