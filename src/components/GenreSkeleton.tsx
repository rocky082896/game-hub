import { Button, Image, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <Image>
        <Skeleton />;
      </Image>
      <Button>
        <Skeleton />;
      </Button>
    </>
  );
};

export default GenreSkeleton;
