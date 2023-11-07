import { HStack, Image, Text, VStack } from "@chakra-ui/react";


const Testimonials = ({}) => {
  return (
    <VStack>
      <h2>Testimonials</h2>
      <HStack>
        <Text as='b'>{rating}</Text>
        <Image src={imageSrc} alt="testimonial-images"/>
        <Text as='b'>{raterName}</Text>
        <Text>{review}</Text>
      </HStack>
    </VStack>

  );
};
  export default Testimonials;
  