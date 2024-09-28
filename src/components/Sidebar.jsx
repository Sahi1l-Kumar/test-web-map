import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleIcon from "@mui/icons-material/People";
import HouseIcon from "@mui/icons-material/House";
import WaterIcon from "@mui/icons-material/Water";
import WheelchairPickupIcon from "@mui/icons-material/WheelchairPickup";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Population Diversity",
          "Drainage System",
          "Improper Living Conditions",
          "Growth of Diseases",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <PeopleIcon /> : <></>}
                {index === 1 ? <WaterIcon /> : <></>}
                {index === 2 ? <HouseIcon /> : <></>}
                {index === 3 ? <CoronavirusIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          "Poor Sanitation",
          "Poor Healthcare System",
          "Poverty Rate High",
          "Malnutrition Level",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <SanitizerIcon /> : <></>}
                {index === 1 ? <HealthAndSafetyIcon /> : <></>}
                {index === 2 ? <AttachMoneyIcon /> : <></>}
                {index === 3 ? <WheelchairPickupIcon /> : <></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        variant="outlined"
        onClick={toggleDrawer(true)}
        style={{ margin: "10px" }}
      >
        ☰
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
