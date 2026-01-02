import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScBanS_t--r4bWCq--8G9XNhrdfDqyk7kPOYIrKrExdy_EkKw/formResponse";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    const formBody = new URLSearchParams();
    formBody.append('entry.673960306', formData.name);
    formBody.append('entry.1275267907', formData.email);
    formBody.append('entry.1163588375', formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-32 px-6 md:px-20 bg-[#050505] relative border-t border-white/10">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                    <span className="text-[10px] tracking-[0.3em] opacity-60 uppercase">Transmission Open</span>
                </div>
                <h2 className="text-4xl md:text-5xl cinematic-font">Send Coordinates</h2>
                <p className="text-xs text-gray-500 mt-2 font-mono">Reach out for collaborations, trips, or just to say hi.</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Variable ID (Name)" 
                            className="signal-input"
                            required 
                        />
                    </div>
                    <div className="group">
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Frequency (Email)" 
                            className="signal-input"
                            required 
                        />
                    </div>
                </div>
                <div className="group">
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Data Packet (Message)" 
                        className="signal-input pb-8 resize-none h-24"
                        required
                    />
                </div>
                
                <div className="text-center mt-12">
                    <button 
                        type="submit" 
                        disabled={status === 'submitting' || status === 'success'}
                        className="group relative px-8 py-3 bg-white text-black font-mono text-xs tracking-widest uppercase hover:bg-transparent hover:text-white transition-colors duration-300 border border-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10">
                            {status === 'submitting' ? 'Transmitting...' : 
                             status === 'success' ? 'Signal Received' : 
                             'Transmit Signal'}
                        </span>
                        {status === 'idle' && (
                            <div className="absolute inset-0 bg-white group-hover:scale-x-0 origin-right transition-transform duration-300 z-0"></div>
                        )}
                    </button>
                    {status === 'success' && (
                        <p className="mt-4 text-[10px] text-green-500 font-mono tracking-widest animate-pulse">
                            TRANSMISSION SUCCESSFUL. STAND BY.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-[10px] text-red-500 font-mono tracking-widest">
                            TRANSMISSION FAILED. RETRY.
                        </p>
                    )}
                </div>
            </form>
        </div>
    </section>
  );
};

export default Contact;