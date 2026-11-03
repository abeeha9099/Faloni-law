import { useState } from 'react'
import site from '../data/site.json'

// Submissions POST as JSON to VITE_FORM_ENDPOINT. Until that is configured the form validates but tells
// visitors to call instead, so no inquiry is silently lost.
const endpoint = import.meta.env.VITE_FORM_ENDPOINT

const fields = [
  { name: 'firstName', label: 'First Name', autoComplete: 'given-name', half: true },
  { name: 'lastName', label: 'Last Name', autoComplete: 'family-name', half: true },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', half: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', half: true },
  { name: 'message', label: 'Please Describe Your Case', textarea: true },
]

function validate(values) {
  const errors = {}
  for (const f of fields) {
    if (!values[f.name]?.trim()) errors[f.name] = `${f.label} is required.`
  }
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (values.phone && values.phone.replace(/\D/g, '').length < 10) errors.phone = 'Enter a 10-digit phone number.'
  return errors
}

const inputClass =
  'w-full border bg-white px-4 text-[16px] text-navy-900 outline-none transition-colors placeholder:text-slate/60 focus:border-navy-900'

export default function ContactForm() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }
    if (!endpoint) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(res.statusText)
      setStatus('sent')
      setValues({})
    } catch {
      setStatus('error')
    }
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-describedby={endpoint ? undefined : 'contact-demo-note'}>
      {!endpoint && (
        <p id="contact-demo-note" className="flex gap-3 border border-gold-500 bg-gold-50 px-4 py-3 text-[14px] leading-snug text-navy-900 sm:col-span-2">
          <span className="font-label text-[15px] tracking-[0.12em] text-gold-800">Demo</span>
          <span>
            This form is a design preview and does not send any information. To reach the firm, call{' '}
            <a href={site.phones.main.href} className="font-medium underline">{site.phones.main.display}</a>.
          </span>
        </p>
      )}
      {fields.map((f) => {
        const id = `contact-${f.name}`
        const error = errors[f.name]
        const shared = {
          id,
          name: f.name,
          value: values[f.name] || '',
          onChange,
          autoComplete: f.autoComplete,
          'aria-invalid': Boolean(error),
          'aria-describedby': error ? `${id}-error` : undefined,
          required: true,
        }
        return (
          <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
            <label htmlFor={id} className="mb-2 block text-[14px] font-medium text-navy-900">
              {f.label} <span className="text-gold-800">*</span>
            </label>
            {f.textarea ? (
              <textarea {...shared} rows={5} className={`${inputClass} py-3 ${error ? 'border-[#B42318]' : 'border-silver'}`} />
            ) : (
              <input {...shared} type={f.type || 'text'} className={`${inputClass} h-12 ${error ? 'border-[#B42318]' : 'border-silver'}`} />
            )}
            {error && (
              <p id={`${id}-error`} className="mt-1.5 text-[13px] text-[#B42318]">{error}</p>
            )}
          </div>
        )
      })}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-slate">All Fields Required *</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-12 items-center justify-center bg-gold-500 px-8 text-[15px] font-medium text-navy-900 transition-colors hover:bg-gold-600 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : endpoint ? 'Submit' : 'Submit (demo)'}
        </button>
      </div>

      <div role="status" className="sm:col-span-2 empty:hidden">
        {status === 'sent' && (
          <p className="border-l-4 border-gold-500 bg-gold-50 px-4 py-3 text-[15px] text-navy-900">Thank you. A member of our team will contact you shortly.</p>
        )}
        {status === 'unconfigured' && (
          <p className="border-l-4 border-gold-500 bg-gold-50 px-4 py-3 text-[15px] text-navy-900">
            Nothing was sent: this demo form is not connected. Please call us at{' '}
            <a href={site.phones.main.href} className="font-medium underline">{site.phones.main.display}</a>.
          </p>
        )}
        {status === 'error' && (
          <p className="border-l-4 border-[#B42318] bg-white px-4 py-3 text-[15px] text-navy-900">
            Something went wrong sending your message. Please call us at{' '}
            <a href={site.phones.main.href} className="font-medium underline">{site.phones.main.display}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
