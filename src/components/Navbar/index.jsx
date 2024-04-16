import {
  AccountCircle,
  ChevronRight,
  Menu,
  Person,
  VerifiedUser,
  WidthFull,
} from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
// import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import Search from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    color: "black",
    backgroundColor: theme.palette.common.white,
    width: "100%", // Set width to 100%
    maxWidth: "none", // Allow the tooltip to expand to full width
    borderRadius: 0, // Remove border radius for a rectangular shape
    padding: theme.spacing(2), // Adjust padding as needed
    boxShadow: theme.shadows[1], // Apply shadow
    zIndex: theme.zIndex.tooltip, // Set appropriate z-index
  },
}));

const index = () => {
  const [hidden, setHidden] = useState(window.innerWidth > 1152 ? true : false);
  const [open, setOpen] = React.useState(false);
  const [col, setCol] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth > 1152 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Tooltip1 = () => {
    return (
      <div
        onMouseLeave={() => setCol(false)}
        className="flex justify-between gap-x-5"
      >
        <div className="list-none flex flex-col text-lg w-[20rem]">
          <li className="hover:underline cursor-pointer p-1">
            Breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Report a breakdown
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Personal breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Family breakdown cover
          </li>
        </div>
        <div className="list-none flex flex-col text-lg w-[20rem]">
          <li className="hover:underline cursor-pointer p-1">
            European breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Electric car breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Business breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Caravan and motorhome breakdown cover
          </li>
        </div>
        <div className="list-none flex flex-col text-lg w-[20rem]">
          <li className="hover:underline cursor-pointer p-1">
            Breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Report a breakdown
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Personal breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Family breakdown cover
          </li>
        </div>
      </div>
    );
  };
  const Tooltip2 = () => {
    return (
      <div onMouseLeave={() => setCol(false)} className="flex justify-between gap-x-5">
        <div className="list-none flex flex-col text-lg w-[20rem]">
          <li className="hover:underline cursor-pointer p-1">
            Breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Report a breakdown
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Personal breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Family breakdown cover
          </li>
        </div>
        <div className="list-none flex flex-col text-lg w-[20rem]">
          <li className="hover:underline cursor-pointer p-1">
            European breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Electric car breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Business breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
          <li className="hover:underline cursor-pointer p-1">
            Multicar breakdown cover
          </li>
        </div>
      </div>
    );
  };

  let tooltip1 = <Tooltip1 />;
  let tooltip2 = <Tooltip2 />;
  return (
    <>
      {hidden ? (
        <div className={`bg-[${col ? "#fff" : "#ffd300"}] text-black`}>
          <div className="lg:w-[70rem] lg:mx-auto py-3">
            <div className="flex justify-between">
              <p>
                Are you a{" "}
                <span className="hover:underline">business customer?</span>
              </p>
              <div className="grid grid-cols-3 gap-2 divide-x text-center divide-black">
                <div className="hover:underline">Broken down?</div>
                <div className="hover:underline">Route Planner</div>
                <div className="lg:ps-4 hover:underline">Help and support</div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <img src="/logonav.svg" alt="" />
              </div>
              <div className="pt-5 flex divide-x divide-black gap-10">
                <ul className="list-none lg:gap-10 flex text-center justify-between">
                  <BootstrapTooltip title={tooltip1}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      Breakdown
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip1}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      Insurance
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip2}>
                    {" "}
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)} 
                    >
                      Vehicle maintenance
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip2}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      New and used cars
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip2}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      Driving school
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip2}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      Finance
                    </li>
                  </BootstrapTooltip>
                  <BootstrapTooltip title={tooltip2}>
                    <li
                      onMouseEnter={() => setCol(true)}
                      onMouseLeave={() => setCol(false)}
                    >
                      Travel
                    </li>
                  </BootstrapTooltip>
                </ul>
                <div className="flex gap-2 ps-4">
                  <Person />
                  <p>Travel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-400 text-black ">
          <div className="mx-[2rem] py-3 flex justify-between">
            <div>
              <img src="/logonav.svg" alt="" />
            </div>
            <div className="flex pt-3 gap-2">
              <IconButton
                sx={{ gap: 2 }}
                variant="plain"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <p className="font-bold">Menu</p>
                <Menu />
              </IconButton>
              <Drawer
                anchor="right"
                color="#fff"
                size="lg"
                variant="solid"
                open={open}
                onClose={() => setOpen(false)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 0.5,
                    marginX: 2,
                    marginY: 2,
                  }}
                >
                  <div>
                    <img src="/logonav.svg" alt="" />
                  </div>
                  <Typography
                    component="label"
                    htmlFor="close-icon"
                    fontSize="sm"
                    fontWeight="lg"
                    sx={{ cursor: "pointer", display: "flex" }}
                  >
                    <p className="pt-2 font-bold text-md">Close</p>
                    <ModalClose id="close-icon" sx={{ position: "inherit" }} />
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 4,
                    mx: 4,
                  }}
                >
                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <Person />
                      <p>Account</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Breakdown</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Insurance</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Vehicle maintenance</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>New and used cars</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Driving school</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Finance</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>

                  <div className="h-[0.2px] bg-slate-400 w-full"></div>
                  <div className="flex justify-between w-full my-4">
                    <div className="flex gap-2 pt-2">
                      <p>Travel</p>
                    </div>
                    <div>
                      <ChevronRight fontSize="small" />
                    </div>
                  </div>
                </Box>
              </Drawer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
