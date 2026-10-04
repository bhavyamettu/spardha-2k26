// Where registrations go. Paste a Google Apps Script web-app URL or a Formspree endpoint here.
// If left empty, the form opens the user's email app with the details pre-filled for REGISTRATION_EMAIL.
export const REGISTRATION_ENDPOINT = "";
export const REGISTRATION_EMAIL = "acm.vvit@gmail.com";

export type RegData = { name: string; email: string; phone: string; college: string; event: string; day: string; teamSize: number };

export async function submitRegistration(d: RegData): Promise<"sent" | "mail"> {
  if (REGISTRATION_ENDPOINT) {
    await fetch(REGISTRATION_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ ...d, at: new Date().toISOString() }) });
    return "sent";
  }
  const body = `Spardha 2K26 registration\n\nEvent: ${d.event} (${d.day})\nTeam leader: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nCollege: ${d.college}\nTeam size: ${d.teamSize}`;
  window.location.href = `mailto:${REGISTRATION_EMAIL}?subject=${encodeURIComponent(`Registration — ${d.event}`)}&body=${encodeURIComponent(body)}`;
  return "mail";
}
