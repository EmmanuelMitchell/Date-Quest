import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <h2>DateQuest App</h2>
      <Button as={Link} href="/members" variant="faded" color="success">
        Click Me
      </Button>
      <Button>Click me</Button>
    </div>
  );
}
