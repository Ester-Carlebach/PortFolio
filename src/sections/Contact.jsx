import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { slideInLeft, slideInRight, fadeInUp } from "../utils/animations";

const Contact = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef(null);
  const contactBoxesRef = useRef(null);
  const headerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = t('form.errors.nameRequired');
        }
        break;
      case "email":
        if (!value.trim()) {
          error = t('form.errors.emailRequired');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = t('form.errors.emailInvalid');
        }
        break;
      case "phone":
        if (value && !/^[0-9\s\-\+\(\)]+$/.test(value)) {
          error = t('form.errors.phoneInvalid');
        }
        break;
      case "message":
        if (!value.trim()) {
          error = t('form.errors.messageRequired');
        }
        break;
    }

    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors({ ...errors, [name]: error });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t('form.errors.nameRequired');
    }

    if (!form.email.trim()) {
      newErrors.email = t('form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t('form.errors.emailInvalid');
    }

    if (form.phone && !/^[0-9\s\-\+\(\)]+$/.test(form.phone)) {
      newErrors.phone = t('form.errors.phoneInvalid');
    }

    if (!form.message.trim()) {
      newErrors.message = t('form.errors.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (headerRef.current) {
      fadeInUp(headerRef.current);
    }
    if (formRef.current) {
      slideInLeft(formRef.current, 0.2);
    }
    if (contactBoxesRef.current) {
      slideInRight(contactBoxesRef.current, 0.2);
    }
  }, []);

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div ref={headerRef}>
          <TitleHeader
            title={t('title')}
            sub={t('subtitle')}
          />
        </div>
        <div className="grid-12-cols mt-8 sm:mt-16">
          <div className="xl:col-span-5 mb-8 xl:mb-0">
            <div className="flex-center rounded-xl p-6 sm:p-10 border-2 border-purple-500/30 bg-gray-900/50">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{t('form.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form.namePlaceholder')}
                    className={errors.name ? 'border-2 border-red-500' : ''}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email">{t('form.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form.emailPlaceholder')}
                    className={errors.email ? 'border-2 border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone">{t('form.phoneLabel')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form.phonePlaceholder')}
                    className={errors.phone ? 'border-2 border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2 font-semibold">{errors.phone}</p>}
                </div>



                <div>
                  <label htmlFor="message">{t('form.messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form.messagePlaceholder')}
                    rows="5"
                    className={errors.message ? 'border-2 border-red-500' : ''}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2 font-semibold">{errors.message}</p>}
                </div>

<button
  type="submit"
  disabled={loading}
  className="relative group px-10 py-4 rounded-xl flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
>
  <p className="relative z-10 text-white font-semibold">
    {loading ? t('form.submitting') : t('form.submitButton')}
  </p>
  <div className="relative z-10 group-hover:translate-x-1 transition-transform">
    <img src="/images/arrow-down.svg" alt="arrow" className="-rotate-90 w-4 h-4 brightness-200" />
  </div>
</button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-semibold">
                    {t('form.successMessage')}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center font-semibold">
                    {t('form.errorMessage')}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 flex items-center justify-center px-4 sm:px-0">
            <div ref={contactBoxesRef} className="w-full max-w-md flex flex-col gap-4 sm:gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: t('form.contactInfo.email'),
                  value: 'esty41655@gmail.com',
                  href: 'mailto:esty41655@gmail.com'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: t('form.contactInfo.phone'),
                  value: '058-324-1655',
                  href: 'tel:+972583241655'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ),
                  label: 'GitHub',
                  value: 'Ester-Carlebach',
                  href: 'https://github.com/Ester-Carlebach'
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-box group flex flex-col items-center justify-center py-5 sm:py-6 px-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 min-h-[140px] sm:min-h-[150px]"
                >
                  <div className="contact-icon text-purple-500 mb-3 group-hover:text-purple-400 transition-colors">
                    {contact.icon}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{contact.label}</p>
                  <p className="text-white font-medium text-center">{contact.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
