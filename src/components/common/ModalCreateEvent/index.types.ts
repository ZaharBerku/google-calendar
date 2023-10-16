import { EventType } from "@utils/types";

export type ModalCreateEventProps = {
  // onSubmit: (formData: FormData) => void;
  onClose: () => void;
  date: Date;
  selectEvent: EventType | null;
  getEvents: () => void;
};

export type FormData = EventType & { date?: string };
