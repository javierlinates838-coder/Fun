"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/icon";

type Field = "name" | "email" | "message";

const fields: { name: Field; label: string; type: "text" | "email" | "textarea" }[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "message", label: "What the site needs to do", type: "textarea" },
];

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const shouldFocusSummary = useRef(false);
  const baseId = useId();
  useEffect(() => {
    if (!shouldFocusSummary.current) return;
    shouldFocusSummary.current = false;
    summaryRef.current?.focus();
  }, [errors]);

  const errorEntries = fields.flatMap((field) => {
    const message = errors[field.name];
    return message ? [{ field: field.name, message }] : [];
  });

  function validate(data: Record<Field, string>) {
    const next: Partial<Record<Field, string>> = {};
    if (!data.name.trim()) next.name = "Enter your name.";
    if (!data.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      next.email = "Enter an email address like name@example.com.";
    }
    if (!data.message.trim()) {
      next.message = "Describe what the site needs to do.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: String(new FormData(form).get("name") ?? ""),
      email: String(new FormData(form).get("email") ?? ""),
      message: String(new FormData(form).get("message") ?? ""),
    };
    const next = validate(data);
    if (Object.keys(next).length > 0) {
      shouldFocusSummary.current = true;
      setErrors(next);
      return;
    }
    setErrors(next);

    const subject = `Project inquiry from ${data.name.trim()}`;
    const body = `${data.message.trim()}\n\n${data.name.trim()}\n${data.email.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="error-summary"
        >
          <p>The note needs a few details before it can open in your email app.</p>
          <ul>
            {errorEntries.map((entry) => (
              <li key={entry.field}>
                <a href={`#${baseId}-${entry.field}`}>{entry.message}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {fields.map((field) => {
        const id = `${baseId}-${field.name}`;
        const error = errors[field.name];
        const errorId = `${id}-error`;
        const shared = {
          id,
          name: field.name,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? errorId : undefined,
        };
        return (
          <div className="field" key={field.name}>
            <label htmlFor={id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea {...shared} rows={5} autoComplete="off" />
            ) : (
              <input
                {...shared}
                type={field.type}
                autoComplete={field.name === "email" ? "email" : "name"}
              />
            )}
            {error ? (
              <p id={errorId} className="field-error">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <button type="submit" className="button">
        Write the email
        <Icon name="arrow" />
      </button>
      <p className="form-note">{site.contact.formNote}</p>
    </form>
  );
}
