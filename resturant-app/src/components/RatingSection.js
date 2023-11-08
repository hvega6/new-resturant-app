import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Testimonials from "./Testimonials";

const Rating = [
  {
    rating: "",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "",
    description: "",
  },
  {
    rating: "",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "",
    description: "",
  },
  {
    rating: "",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "",
    description: "",
  },
  {
    rating: "",
    getImageSrc: () => require("../icons_assets/A.jpg"),
    raterName: "",
    description: "",
  },
];

const RatingSection = () => {
  return (
    <FullScreenSection p={8} alignItems="flex-start" spacing={8}>
      <Heading as="h3" id="rating-section">
        Testimonials
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {Rating.map((Rating) => (
          <Testimonials
            key={Rating.rating}
            title={Rating.rating}
            imageSrc={Rating.getImageSrc()}
            description={Rating.description}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default RatingSection;
