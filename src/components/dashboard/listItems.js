import React from 'react';
import {ListItem,ListItemIcon,ListItemText,ListSubheader} from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";

// uses role
const isAdmin=true
// const handleDashboardBtn=()=>{
//   redirect('/dashboard')
// }

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Dashboard" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem> */}
    <ListItem button component={Link} to="/members">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary={isAdmin? "Members":'Profile'} />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Category Reports</ListSubheader>
    
    <ListItem button component={Link} to="/beneficiary">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="BENEFICIARY" />
    </ListItem>
    <ListItem button component={Link} to="/investment">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="INVESTMENT" />
    </ListItem>
    <ListItem button component={Link} to="/quarter">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="QUARTER" />
    </ListItem>
    <ListItem button component={Link} to="/property">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="PROPERTY" />
    </ListItem>
    <ListItem button component={Link} to="/rent">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="RENT" />
    </ListItem>
    <ListItem button  component={Link} to="/quarterupdate">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="PROPERTY-QUARTER-UPDATE" />
    </ListItem>
  </div>
);
