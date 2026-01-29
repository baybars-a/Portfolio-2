'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [state, handleFormspreeSubmit] = useForm("mzddwddv");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleFormspreeSubmit(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormState({ name: '', email: '', message: '' });
      const timer = setTimeout(() => {
        window.location.reload();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-20 bg-neutral-900 rounded-3xl border border-[#f4538a]/30"
          >
            <CheckCircle2 size={64} className="text-[#f4538a] mb-6" />
            <h4 className="text-3xl font-bold mb-2">Message Sent!</h4>
            <p className="text-neutral-400">Thank you. We'll get back to you soon!</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-grotesk font-bold ml-1">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#f4538a] transition-colors text-white placeholder:text-neutral-700"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-grotesk font-bold ml-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#f4538a] transition-colors text-white placeholder:text-neutral-700"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-neutral-500 font-grotesk font-bold ml-1">
                Message
              </label>
              <textarea
                required
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-[#f4538a] transition-colors text-white placeholder:text-neutral-700 resize-none"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <button
              disabled={state.submitting}
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-[#f4538a] hover:bg-[#ff7ba8] text-white font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
            >
              {state.submitting ? (
                "Sending..."
              ) : (
                <>
                  Send Inquiry
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;