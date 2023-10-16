import { useState, FC, MouseEvent, useEffect } from "react";
import { format } from "date-fns";
import { ColorEvent, Colors } from "@utils/types";
import { useApi } from "@hooks/index";
import {
  ModalWrapper,
  Input,
  Label,
  Form,
  ColorRadioGroup,
  ModalContainer,
} from "./index.styled";
import { ModalCreateEventProps, FormData } from "./index.types";

const ModalCreateEvent: FC<ModalCreateEventProps> = ({
  onClose,
  date,
  selectEvent,
  getEvents,
}) => {
  const formattedDate: string = format(date, "yyyy-MM-dd");
  const { events } = useApi();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    color: ColorEvent.COLOR_EVENT_RED,
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.color) {
      if (formData?.id && formData) {
        events.editEvent(formData.date || "", formData?.id, {
          ...formData,
          id: Date.now(),
        });
      } else {
        events.setEvent({ ...formData, id: Date.now() }, formattedDate);
      }
      getEvents();
      onClose();
    }
  };

  const handleDelete = () => {
    if (formData.date && formData.id) {
      events.deleteEvent(formData.date, formData.id);
      getEvents();
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    const currentElement = event.currentTarget;
    const cliclElement = event.target;
    if (currentElement === cliclElement) {
      onClose();
    }
  };

  const handleColorChange = (color: Colors) => {
    setFormData({ ...formData, color });
  };

  useEffect(() => {
    if (selectEvent) {
      setFormData(selectEvent);
    }
  }, [selectEvent]);

  return (
    <ModalWrapper onClick={handleClose}>
      <ModalContainer>
        <Form onSubmit={handleFormSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <ColorRadioGroup>
            {Object.values(ColorEvent).map((color) => {
              if (color === ColorEvent.COLOR_HOLIDAY) {
                return null;
              }
              return (
                <Label key={color}>
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={formData.color === color}
                    onChange={() => handleColorChange(color)}
                  />
                  {color}
                </Label>
              );
            })}
          </ColorRadioGroup>

          <button type="submit">
            {formData?.id ? "Save" : "Create Event"}
          </button>
          {formData?.id && (
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          )}
        </Form>
      </ModalContainer>
    </ModalWrapper>
  );
};

export { ModalCreateEvent };
