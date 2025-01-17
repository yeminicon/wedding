import { Spinner } from "@nextui-org/react";


export default function LoadingBox() {
  return (
    <Spinner>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}