import React from "react";
import { ContainerFilter, ContainerList, ListItem } from "./elements";

const labelOptions = ["Single", "Multiple Fixed", "Multiple Constantly"];

const RefinementList = (props: any) => {
  const { items = [], refine } = props;
  const sortItems = (a: any, b: any) => {
    if (a.label > b.label) {
      return 1;
    }
    if (a.label < b.label) {
      return -1;
    }
    return 0;
  };
  return (
    <ContainerFilter>
      <ContainerList>
        {items
          .sort(sortItems)
          .map(
            (item: {
              label: number;
              isRefined: any;
              value: any;
              count: React.ReactNode;
            }) => (
              <ListItem
                key={item.label}
                isRefined={item.isRefined}
                onClick={() => {
                  refine(item.value);
                }}
              >
                <span>{labelOptions[item.label]}</span>
              </ListItem>
            )
          )}
      </ContainerList>
    </ContainerFilter>
  );
};

export default RefinementList;
