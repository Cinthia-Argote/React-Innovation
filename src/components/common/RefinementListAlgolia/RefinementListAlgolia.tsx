import React from "react";
import { ContainerFilter, ContainerList, ListItem } from "./elements";

const RefinementList = (props: any) => {
  const { items = [], refine } = props;
  return (
    <ContainerFilter>
      <ContainerList>
        {items
          .sort((a: any, b: any) => {
            if (a.label > b.label) {
              return 1;
            }
            if (a.label < b.label) {
              return -1;
            }
            return 0;
          })
          .map(
            (item: {
              label: string;
              isRefined: any;
              value: any;
              count: React.ReactNode;
            }) => (
              <ListItem key={item.label} isRefined={item.isRefined}>
                <span
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  {item.label}
                </span>
              </ListItem>
            )
          )}
      </ContainerList>
    </ContainerFilter>
  );
};

export default RefinementList;
