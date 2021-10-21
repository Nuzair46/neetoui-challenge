import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "neetouiv2";

import { Header, MenuBar } from "neetouiv2/layouts";

import ContactCard from "./ContactCard";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./NewContactPane";

const Contacts = () => {
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [delToast, setDelToast] = React.useState(false);

  return (
    <div className="flex w-full">
      <MenuBar showMenu={showMenuBar} title="Contacts">
        <MenuBar.Block label="All" count={0} active />
        <MenuBar.Block label="Archived" count={0} />
        <MenuBar.Block label="Completed" count={0} />
        <MenuBar.Block label="Phase 2" count={0} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed)
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />
            },
            {
              icon: () => <Plus size={20} />
            },
            {
              icon: () => <Settings size={20} />
            }
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
      </MenuBar>
      <div className="flex flex-col content-start w-full px-5 justify-items-start">
        <Header
          menuBarToggle={() => setShowMenuBar(!showMenuBar)}
          title="All Contacts"
          actionBlock={
            <div className="flex space-x-5">
              <div className="w-80">
                <Input
                  prefix={<Search size={16} />}
                  placeholder="Search Name, Email, Phone Number, Etc."
                />
              </div>
              <Button
                onClick={() => setShowNewContactPane(true)}
                label="Add Contact"
                icon="ri-add-line"
                iconPosition="right"
                style="primary"
              />
            </div>
          }
        />
        <ContactCard setShowToast={setDelToast} />
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
          fetchContacts={null}
        />
      </div>
      <DeleteAlert showToast={delToast} setShowToast={setDelToast} />
    </div>
  );
};

export default Contacts;
