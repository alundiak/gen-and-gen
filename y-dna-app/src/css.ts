import { createHooks } from "@css-hooks/react";

export const { styleSheet, css } = createHooks({
  hooks: {
    "&:hover": "&:hover"
  },
});
