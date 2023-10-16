export type SidebarProps = {
  filter: null | { [color: string]: boolean };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      [color: string]: boolean;
    } | null>
  >;
};
