import { ChangeEvent, FC } from "react";
import { toPng } from "html-to-image";
import {
  WrapperSidebar,
  ContainerSidebar,
  Input,
  Button,
  Label,
} from "./index.styled";
import { SidebarProps } from "./index.types";

const Sidebar: FC<SidebarProps> = ({ filter, setFilter }) => {
  const captureAndSaveAsImage = () => {
    const calendarLink: HTMLDivElement | null =
      document.querySelector("#calendar");
    if (calendarLink) {
      toPng(calendarLink, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "calendar.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const { checked, name } = event.target;
      setFilter(
        (currentFilter: { [x: string]: boolean }) => (
          (currentFilter[name] = checked), { ...currentFilter }
        )
      );
    }
  };

  return (
    <WrapperSidebar>
      <ContainerSidebar>
        <Button onClick={captureAndSaveAsImage}>Save as Image</Button>
        {filter &&
          Object.keys(filter)?.map((color, index) => {
            return (
              <Label key={index}>
                <Input
                  name={color}
                  onChange={handleChange}
                  defaultChecked={filter[color]}
                  type="checkbox"
                />
                {color}
              </Label>
            );
          })}
      </ContainerSidebar>
    </WrapperSidebar>
  );
};

export { Sidebar };
