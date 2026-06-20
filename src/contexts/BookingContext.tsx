import { createContext, useContext, useState, type ReactNode } from "react";
import AppointmentDialog, { type AppointmentType } from "@/components/AppointmentDialog";

type OccasionId = "wedding" | "business" | "shirt" | "event" | "personal" | "team";

interface OpenBookingOptions {
  type?: AppointmentType;
  occasion?: OccasionId;
  notes?: string;
}

interface BookingContextType {
  openBooking: (arg?: AppointmentType | OpenBookingOptions | unknown) => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });
export const useBooking = () => useContext(BookingContext);

const isAppointmentType = (v: unknown): v is AppointmentType =>
  v === "showroom" || v === "athome" || v === "trunkshow" || v === "virtual";

const isOpenOptions = (v: unknown): v is OpenBookingOptions =>
  typeof v === "object" && v !== null && ("type" in v || "occasion" in v || "notes" in v);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<AppointmentType>("showroom");
  const [occasion, setOccasion] = useState<OccasionId | undefined>();
  const [notes, setNotes] = useState<string | undefined>();

  const openBooking = (arg?: AppointmentType | OpenBookingOptions | unknown) => {
    if (isAppointmentType(arg)) {
      setType(arg);
      setOccasion(undefined);
      setNotes(undefined);
    } else if (isOpenOptions(arg)) {
      setType(arg.type ?? "showroom");
      setOccasion(arg.occasion);
      setNotes(arg.notes);
    } else {
      setType("showroom");
      setOccasion(undefined);
      setNotes(undefined);
    }
    setOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <AppointmentDialog open={open} onOpenChange={setOpen} type={type} initialOccasion={occasion} initialNotes={notes} />
    </BookingContext.Provider>
  );
};
