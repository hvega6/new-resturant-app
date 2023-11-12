import { HStack, Image, Text, VStack } from "@chakra-ui/react";

const Testimonials = ({ rating, imageSrc, raterName, description }) => {
  return (
    <VStack>
      <HStack> 
        <Text as="b">{rating}</Text>
        <Image src={imageSrc} alt="testimonial-images"
        height={175}
        width={200}/>
        <Text as="b">{raterName}</Text>
        <Text>{description}</Text>
      </HStack>
    </VStack>
  );
};
export default Testimonials;
