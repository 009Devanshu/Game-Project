import bullseye from "../assets/bullseye.svg";
import thumpsup from "../assets/thumbs-up.svg";
import meh from "../assets/meh.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsup, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
