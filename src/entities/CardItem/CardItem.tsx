import { forwardRef } from "react";

import { Card } from "~/shared/types";

type Props = {
  user?: boolean;
  data: Card | string;
  class: string;
};

const CardItem = forwardRef<HTMLImageElement, Props>((props, ref) => {
  const src = typeof props.data === "string" ? props.data : props.data.face;

  return <img className={props.class} src={src} alt="" ref={ref} />;
});

export default CardItem;
