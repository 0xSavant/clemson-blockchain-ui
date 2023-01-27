import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Box,
} from "@mantine/core";
import React, { useEffect, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Cube } from "./Animations/Cube";
import * as THREE from "three";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 115,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

const AnimateFrame = (props) => {
  useFrame(({ clock }) => {
    props.meshRef.current.rotation.x += Math.PI / 180;
    props.meshRef.current.rotation.y += Math.PI / 180;
    props.meshRef.current.rotation.z += Math.PI / 180;
  });

  return null;
};

export function HeroTop() {
  const { classes } = useStyles();
  const myMesh = useRef();

  return (
    <div className={classes.wrapper}>
      <Group position="center" spacing={0}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            Building{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "violet.8", to: "orange.9" }}
              inherit
            >
              blockchain
            </Text>{" "}
            at Clemson.
          </h1>

          <Text className={classes.description} color="dimmed">
            The Clemson Blockchain Club is dedicated to advancing the education
            and adoption of blockchain tech at Clemson University.
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet.8", to: "orange.7" }}
            >
              Learn More
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
            >
              Upcoming Events
            </Button>
          </Group>
        </Container>
        <Box
          component={Container}
          sx={(theme) => ({
            width: 415,
            height: 600,
          })}
        >
          <Canvas
            camera={{ fov: 30, near: 0.1, far: 500, position: [0, 0, 5] }}
          >
            <mesh ref={myMesh}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <boxGeometry />
              <meshStandardMaterial color={"#F56600"} />
            </mesh>
            <AnimateFrame meshRef={myMesh} />
          </Canvas>
        </Box>
      </Group>
    </div>
  );
}

export default HeroTop;
