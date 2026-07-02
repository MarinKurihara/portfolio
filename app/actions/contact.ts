"use server"

import { redirect } from "next/navigation"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Your name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(5000, "Please keep your message under 5,000 characters."),
})

export type ContactFormState = {
  status: "idle" | "error"
  message?: string
  fieldErrors?: Partial<Record<"fullName" | "email" | "message", string[]>>
}

export async function sendContactEmail(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = formData.get("website")
  if (typeof website === "string" && website.trim()) {
    redirect("/thank-you")
  }

  const parsed = contactSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact form email environment variables are incomplete.")
    return {
      status: "error",
      message: "Email delivery is not configured yet. Please try again later.",
    }
  }

  const { fullName, email, message } = parsed.data
  const safeName = fullName.replace(/[\r\n]+/g, " ")
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `Portfolio enquiry from ${safeName}`,
    text: [`Name: ${safeName}`, `Email: ${email}`, "", "Message:", message].join("\n"),
  })

  if (error) {
    console.error("Contact form email failed.", {
      name: error.name,
      message: error.message,
    })
    return {
      status: "error",
      message: "Your message could not be sent. Please try again in a moment.",
    }
  }

  redirect("/thank-you")
}
