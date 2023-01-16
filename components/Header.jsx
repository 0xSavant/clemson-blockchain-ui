import { useState } from "react";
import Image from "next/image";
import {
  createStyles,
  Header,
  Group,
  Container,
  Burger,
  Button,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  cLink: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    marginRight: 6,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const navLinks = [
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export function HeaderMiddle() {
  const router = useRouter();

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(router.pathname);
  const { classes, cx } = useStyles();

  const items = navLinks.map((navLink) => (
    <a
      key={navLink.label}
      href={navLink.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === navLink.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(navLink.link);
        router.push(`${navLink.link}/`);
      }}
    >
      {navLink.label}
    </a>
  ));

  return (
    <Header height={56} mb={80}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group position="center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CBC Logo"
              width={40}
              height={45}
              onClick={() => setActive(null)}
            />
          </Link>
        </Group>
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}

export default HeaderMiddle;
