# 🚀 My Portfolio Website

Welcome to my personal portfolio!
This project showcases my skills, projects, and experience as a **Full-Stack Developer**, built with modern technologies and a focus on performance, scalability, and user experience.

---

## 🌐 Live Preview

> *(Add your deployed link here)*
> 🔗 https://your-portfolio-url.com

---

## ✨ Features

* 🌙 **Dark / Light Mode Toggle**
* 🌎 **Multilanguage Support (ES / EN)**
* ⚡ **Server-Side Rendering (SSR)**
* 📱 **Responsive Design**
* 🎯 **Smooth Scroll Navigation**
* 🧠 **Modern State Management with Signals**
* 🎨 **Custom UI with Tailwind + PrimeNG**
* 📬 **Contact Form (ready for backend/email integration)**

---

## 🛠️ Tech Stack

### Frontend

* Angular (latest version)
* TypeScript
* Tailwind CSS
* PrimeNG
* Lucide Icons

### Backend / SSR

* Angular SSR
* Node.js (for server rendering)

### Architecture

* Standalone Components
* Signals-based state management
* Modular services:

  * ThemeService
  * TranslationService
  * LocalStorageService

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── components/
 │   │   ├── navbar/
 │   │   ├── footer/
 │   │   ├── contact/
 │   │
 │   ├── services/
 │   │   ├── theme.service.ts
 │   │   ├── translation.service.ts
 │   │   ├── language.service.ts
 │   │   ├── local-storage.service.ts
 │   │
 │   ├── layouts/
 │   │   ├── main-layout/
 │   │
 │   ├── pages/
 │       ├── home/
 │       ├── contact/
 │
 ├── assets/
 │   ├── i18n/
 │       ├── en.json
 │       ├── es.json
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
ng serve
```

---

## 🧪 Run with SSR

```bash
npm run build
npm run serve:ssr:my-page
```

---

## 🌍 Internationalization

This project uses a **custom translation system** with JSON files:

```
/assets/i18n/
  en.json
  es.json
```

Switch language dynamically via UI.

---

## 🎨 Theming

* Uses CSS variables
* Controlled via `ThemeService`
* Persisted in `localStorage`
* Detects system preference (`prefers-color-scheme`)

---

## 📬 Contact

The contact form is ready to integrate with:

* EmailJS
* Formspree
* Custom backend (recommended)

---

## 🚧 Future Improvements

* 🔥 SEO with localized routes (`/en`, `/es`)
* 🧠 Active section highlighting (scroll spy)
* 📊 Analytics integration
* 🛡️ Form validation + spam protection
* ⚡ Performance optimizations

---

## 👨‍💻 Author

**Salvador Fernández Martínez**

* 💼 Full-Stack Developer
* 🌱 Always learning and building
* 🚀 Focused on scalable and modern web apps

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🧑‍💻 Fork it
* 📢 Share it

---

## 📜 License

This project is open-source and available under the MIT License.

---

> Built with passion, curiosity, and a lot of ☕
