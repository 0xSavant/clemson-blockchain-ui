import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HeroTop from "@/components/HeroTop";
import { FeaturesCards } from "@/components/SectionTwo";
import { Space } from "@mantine/core";
import SectionFive from "@/components/SectionThree";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroTop />
      <Space h="md" />
      <FeaturesCards />
      <Space h="md" />
      <SectionFive />
    </>
  );
}
