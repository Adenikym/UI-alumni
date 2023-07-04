"use client";

import React, { FC, ReactElement } from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useRouter } from "next/navigation";

const HeroSection: FC = (): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  return (
    <div className=" px-0 w-[100vw] bg-hero-pattern flex justify-center">
      <div style={{ maxWidth: 1440 }} className="">
        <div className="py-16 px-2 md:px-20 ">
          <div className="flex justify-between ">
            <div className="w-[820px]">
              <p className=" text-text-black text-6xl font-bold leading-[78.5px]">
                University of Ibadan <br /> 75th Anniversary <br /> Crowdfunding Barometer
              </p>

              <p className="mt-10 text-2xl text-text-black">
                Lorem ipsum dolor sit amet consectetur. Sed nunc laoreet nec
                fames pretium lacinia. Id ac pretium lacus in facilisis justo
                tristique tristique in. Molestie et venenatis adipiscing
                malesuada eget tempor ut. Gravida lacus{" "}
              </p>

              <div className="mt-10 ">
              <Button
                style={{
                  backgroundColor: "#234CEB",
                  padding: "12px 16px",
                  borderRadius: "100px",
                  textTransform: "none",
                  marginTop: "24px"
                }}
               
                onClick={() => {
                // handleOpen()
                }}
              >
                <span className="text-white font-bold  text-base ">
             Donate
                </span>
              </Button>
              </div>
            </div>

            <div className="">
              <Image
                src="/hero-image.svg"
                alt="placeholder"
                width={561}
                height={572}
                priority
              />
            </div>
          </div>

          <div className="mt-[200px]">
            <h3></h3>

            <div className="mt-10 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
