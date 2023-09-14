import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { entries } from "./entryData.js";
import { Fragment } from "react";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map(({ id, motto, date, notes }) => {
          return (
            <Fragment key={id}>
              <Entry motto={motto} date={date} notes={notes} />
              <Divider />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
