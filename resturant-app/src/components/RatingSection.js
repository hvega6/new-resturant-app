import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, HStack } from "@chakra-ui/react";
import Testimonials from "./Testimonials";

const Rating = [
  {
    rating: "Rating",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "Tom",
    description: "It was delisious",
  },
  {
    rating: "Rating",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "Tom",
    description: "It was delisious",
  },
  {
    rating: "Rating",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "Tom",
    description: "It was delisious",
  },
  {
    rating: "Rating",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "Tom",
    description: "It was delisious",
  },
];

const RatingSection = () => {
  return (
    <FullScreenSection p={8} alignItems="flex-start" spacing={8}> 
      <Heading as="h3" id="rating-section" color='black' >
        Testimonials
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
        w="150%"
      >
        {Rating.map((Rating) => (
          <Testimonials
            rating={Rating.rating}
            raterName={Rating.raterName}
            imageSrc={Rating.getImageSrc()}
            description={Rating.description}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default RatingSection;
