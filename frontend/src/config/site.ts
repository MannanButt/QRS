const publicValue = (value: string | undefined): string | null => {
  const normalized = value?.trim();
  return normalized ? normalized : null;
};

/**
 * QRS public identity. Keep real contact values in frontend/.env.local or the
 * QRS frontend deployment environment; these fields are deliberately blank
 * until QRS provides approved details.
 */
export const qrsSite = {
  name: "QRS Technologies",
  legalName: "QRS Technologies",
  tagline: "Technology that moves business forward.",
  description: "QRS Technologies helps businesses plan, build, automate, and grow with practical digital solutions.",
  location: {
    address: "Jail Road, Gulberg III, Lahore",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Jail+Road%2C+Gulberg+III%2C+Lahore",
  },
  contact: {
    email: publicValue(process.env.NEXT_PUBLIC_QRS_CONTACT_EMAIL),
    primaryPhone: "03124130449",
    secondaryPhone: publicValue(process.env.NEXT_PUBLIC_QRS_SECONDARY_PHONE),
    whatsappNumber: "923124130449",
  },
  social: {
    instagram: "https://www.instagram.com/qrstechnologies_pvt.ltd/",
    linkedin: "https://www.linkedin.com/in/abdullah-khurram-a0a22724a",
    facebook: "https://www.facebook.com/profile.php?id=61594678926146&sk=grid",
    youtube: publicValue(process.env.NEXT_PUBLIC_QRS_YOUTUBE_URL),
  },
} as const;

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function whatsappHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
