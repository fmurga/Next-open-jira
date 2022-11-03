import { List, Paper } from "@mui/material";
import { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    // TODO: aqui haremos drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "scroll",
          overflowX: "hidden",
          backgroundColor: "transparent",
          padding: "1px 10px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesByStatus &&
            entriesByStatus.map((entry) => (
              <EntryCard key={entry._id} entry={entry} />
            ))}
        </List>
      </Paper>
    </div>
  );
};
