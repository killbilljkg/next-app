// 'use client'
// import React, { useState } from 'react'
// import styles from './ContactForm.module.css'

// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   interest: '',
//   message: '',
// }

// function ContactForm() {
//   const [formData, setFormData] = useState(initialState)
//   const [errors, setErrors] = useState({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [submitError, setSubmitError] = useState('');


//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//     setErrors(prev => ({ ...prev, [name]: '' }))
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phoneRegex = /^[0-9+\-\s()]{7,}$/;

//   const validate = () => {
//     const newErrors = {};

//     const trimmed = {
//       firstName: formData.firstName.trim(),
//       lastName: formData.lastName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       message: formData.message.trim(),
//     };

//     if (!trimmed.firstName) newErrors.firstName = 'First name is required';
//     if (!trimmed.lastName) newErrors.lastName = 'Last name is required';

//     if (!trimmed.email) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(trimmed.email)) {
//       newErrors.email = 'Enter a valid email address';
//     }

//     if (!trimmed.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!phoneRegex.test(trimmed.phone)) {
//       newErrors.phone = 'Enter a valid phone number';
//     }

//     if (!formData.interest) {
//       newErrors.interest = 'Please select an option';
//     }

//     if (!trimmed.message) {
//       newErrors.message = 'Message is required';
//     } else if (trimmed.message.length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError('');
//     setSuccess(false);

//     if (!validate()) return;

//     setIsSubmitting(true);

//     const payload = {
//       firstName: formData.firstName.trim(),
//       lastName: formData.lastName.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone.trim(),
//       interest: formData.interest,
//       message: formData.message.trim(),
//     };

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Failed to submit form');
//       }

//       setSuccess(true);
//       setFormData(initialState);
//     } catch (err) {
//       setSubmitError(err.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


//   return (
//     <section className={styles.contactSection}>
//       <div className={styles.container}>
        
//         <div className={styles.left}>
//           <h2 className={styles.title}>Get in <span>Touch</span></h2>
//           <p className={styles.description}>
//             We’d love to understand your goals, challenges, and how ARCA AI can support your clinical, operational, or community health needs.
//           </p>
//           <p className={`${styles.highlight} ${styles.description}`}>
//             Share a few details below, and our team will reach out within 48 hours.
//           </p>
//         </div>

//         <form className={styles.form} onSubmit={handleSubmit} noValidate>

//           <div className={styles.row}>
//             <div className={styles.field}>
//               <label>First Name *</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               {errors.firstName && <span>{errors.firstName}</span>}
//             </div>

//             <div className={styles.field}>
//               <label>Last Name *</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//               {errors.lastName && <span>{errors.lastName}</span>}
//             </div>
//           </div>

//           <div className={styles.row}>
//             <div className={styles.field}>
//               <label>Email *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <span>{errors.email}</span>}
//             </div>

//             <div className={styles.field}>
//               <label>Phone *</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && <span>{errors.phone}</span>}
//             </div>
//           </div>

//           <div className={styles.field}>
//             <label>Area Of Interest *</label>
//             <select
//               name="interest"
//               value={formData.interest}
//               onChange={handleChange}
//             >
//               <option value="">Select Area Of Interest</option>
//               <option value="providers">Providers</option>
//               <option value="payers">Payers</option>
//               <option value="pharma">Pharma</option>
//               <option value="community">Community Health</option>
//               <option value="partnerships">Partnerships</option>
//             </select>
//             {errors.interest && <span>{errors.interest}</span>}
//           </div>

//           <div className={styles.field}>
//             <label>Message *</label>
//             <textarea
//               rows="4"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//             {errors.message && <span>{errors.message}</span>}
//           </div>

//           <button
//             type="submit"
//             className={styles.submitBtn}
//             disabled={isSubmitting}
//             >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>

//           {submitError && (
//             <p className={styles.error}>{submitError}</p>
//           )}

//           {success && (
//             <p className={styles.success}>
//               Thank you for reaching out. Our team will get back to you shortly.
//             </p>
//           )}
//         </form>

//       </div>
//     </section>
//   )
// }

// export default ContactForm


'use client'
import React, { useState, useEffect } from 'react'
import styles from './ContactForm.module.css'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

// Toast types: 'success' | 'error' | 'info'
function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  const icons = {
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#10b981" />
        <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill="#ef4444" />
        <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  }

  const toastStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    background: '#fff',
    border: `1px solid ${type === 'success' ? '#d1fae5' : '#fee2e2'}`,
    borderLeft: `4px solid ${type === 'success' ? '#10b981' : '#ef4444'}`,
    borderRadius: '8px',
    padding: '14px 16px',
    minWidth: '300px',
    maxWidth: '380px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    animation: 'slideIn 0.25s ease',
  }

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={toastStyle} className={styles.toast} role="alert">
        <div style={{ flexShrink: 0, marginTop: '1px' }}>{icons[type]}</div>
        <div style={{ flex: 1 }}>
          <p style={{ margin: 0, fontWeight: 600, fontSize: '14px', color: '#111827' }}>
            {type === 'success' ? 'Message Sent!' : 'Submission Failed'}
          </p>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6b7280', lineHeight: 1.4 }}>
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: '0 0 0 4px', fontSize: '18px', lineHeight: 1 }}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null) // { type, message }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[0-9+\-\s()]{7,}$/

  const validate = () => {
    const newErrors = {}
    const trimmed = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    }

    if (!trimmed.firstName) newErrors.firstName = 'First name is required'
    if (!trimmed.lastName) newErrors.lastName = 'Last name is required'
    if (!trimmed.email) newErrors.email = 'Email is required'
    else if (!emailRegex.test(trimmed.email)) newErrors.email = 'Enter a valid email address'
    if (!trimmed.phone) newErrors.phone = 'Phone number is required'
    else if (!phoneRegex.test(trimmed.phone)) newErrors.phone = 'Enter a valid phone number'
    if (!formData.interest) newErrors.interest = 'Please select an option'
    if (!trimmed.message) newErrors.message = 'Message is required'
    else if (trimmed.message.length < 10) newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setToast(null)

    if (!validate()) return

    setIsSubmitting(true)

    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      interest: formData.interest,
      message: formData.message.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      // ✅ Safely parse JSON — don't let a malformed response crash the UI
      let data = {}
      try {
        data = await res.json()
      } catch {
        // Server returned empty / non-JSON body
        if (!res.ok) throw new Error('SERVER_ERROR')
      }

      if (!res.ok) {
        throw new Error(data.message || 'SERVER_ERROR')
      }

      setToast({
        type: 'success',
        message: "Thanks for reaching out! We'll get back to you within 48 hours.",
      })
      setFormData(initialState)

    } catch (err) {
      // ✅ Never show raw technical errors to users
      const isUserFacing = err.message && !['SERVER_ERROR', 'Failed to fetch'].includes(err.message)
      setToast({
        type: 'error',
        message: isUserFacing
          ? err.message
          : "We couldn't send your message right now. Please try again or email us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h2 className={styles.title}>Get in <span>Touch</span></h2>
          <p className={styles.description}>
            We'd love to understand your goals, challenges, and how ARCA AI can support your clinical, operational, or community health needs.
          </p>
          <p className={`${styles.highlight} ${styles.description}`}>
            Share a few details below, and our team will reach out within 48 hours.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div className={styles.field}>
              <label>Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={styles.field}>
              <label>Phone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label>Area Of Interest *</label>
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">Select Area Of Interest</option>
              <option value="providers">Providers</option>
              <option value="payers">Payers</option>
              <option value="pharma">Pharma</option>
              <option value="community">Community Health</option>
              <option value="partnerships">Partnerships</option>
            </select>
            {errors.interest && <span>{errors.interest}</span>}
          </div>

          <div className={styles.field}>
            <label>Message *</label>
            <textarea rows="4" name="message" value={formData.message} onChange={handleChange} />
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

        </form>
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  )
}

export default ContactForm