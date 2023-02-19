import { Box } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

export const SiteLayout = (children: ReactNode) => {
  return (
    <Box bgColor="blackAlpha.200">
      <main>{children}</main>
    </Box>
  );
};

export default SiteLayout;
