import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import HistoryIcon from '@material-ui/icons/History';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

const ListMenuItems = (props) => (
  <List>
    <ListItem
      primaryText=""
      leftIcon={<Left />}
      onClick={props.toggleNavigation}
      style={{ marginTop: 57, paddingBottom: '1.5em', borderBottom: '1px solid #dddddd' }}
    />
    <ListItem
      primaryText="Home"
      leftIcon={<StorefrontOutlinedIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />
    <ListItem
      primaryText="Profile"
      leftIcon={<AccountCircleOutlinedIcon />}
      href="/architect"
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />
    <ListItem
      primaryText="Building Material"
      leftIcon={<DonutLargeIcon />}
      href="/material"
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />
    <ListItem
      primaryText="Orders"
      leftIcon={<DescriptionOutlinedIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />
    <ListItem
      primaryText="History"
      leftIcon={<HistoryIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />
    <ListItem
      primaryText="Contact_Us"
      leftIcon={<ContactSupportOutlinedIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />

    <ListItem
      primaryText="Delete_Account"
      href="/planner"
      leftIcon={<DeleteForeverOutlinedIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />

    <ListItem
      primaryText="Payment"
      leftIcon={<NotificationImportantOutlinedIcon />}
      href="/payment"
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />

    <ListItem
      primaryText="Log Out"
      leftIcon={<ExitToAppOutlinedIcon />}
      style={{ paddingBottom: '1em', textAlign: 'left', color: "#FF2A27" }}
    />

  </List>
);

export default ListMenuItems;
