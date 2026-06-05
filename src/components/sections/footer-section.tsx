import React, { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const footerLinks = [
  { label: "Проекты", href: "#" },
  { label: "Компетенции", href: "#" },
  { label: "Сотрудничество", href: "#" },
  { label: "Контакты", href: "#" },
]

export function FooterSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.location.href = `mailto:camolet@lkj.ry?subject=Запрос с сайта&body=${encodeURIComponent(message)}%0A%0AОт: ${encodeURIComponent(email)}`
    setSent(true)
  }

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AERO.
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Icon name="MapPin" size={14} />
              <span>ул. Клименкова</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Icon name="Phone" size={14} />
              <a href="tel:89269803456" className="hover:text-foreground transition-colors" data-clickable>+7 926 980-34-56</a>
            </div>
            <p className="text-muted-foreground text-sm mb-4">Напишите о вашем проекте — отвечу в течение дня.</p>
            {sent ? (
              <motion.p
                className="text-foreground font-serif text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Спасибо! Открываю почтовый клиент…
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  required
                  className="bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Расскажите о проекте..."
                  rows={3}
                  className="bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-foreground text-background py-3 px-6 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                  data-clickable
                >
                  Отправить сообщение
                  <Icon name="ArrowRight" size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">2025 AERO. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-clickable>
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}