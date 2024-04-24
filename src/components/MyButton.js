"use client"
import Button from "@/components/Button";

export function MyButton() {
  return <Button text="test" className="test" onClick={() => { console.log("Button clicked!"); }} />;
}
