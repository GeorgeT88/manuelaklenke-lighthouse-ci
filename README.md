# <img src="https://cdn.simpleicons.org/lighthouse/F44B21" height="32" align="center" /> Lighthouse CI — manuelaklenke.com

Performance, accessibility, SEO and best-practices audits for [manuelaklenke.com](https://manuelaklenke.com) using Lighthouse CI. Runs automatically after every deployment.

---

## 📊 Reports

| Report | Link |
|---|---|
| Latest Lighthouse run | [GitHub Pages](https://georget88.github.io/manuelaklenke-lighthouse-ci/) |

---

## 🛠️ Tech Stack

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) — performance & quality audits
- GitHub Actions — CI/CD pipeline
- GitHub Pages — HTML report hosting

---

## 📋 Audit Coverage

| Page | Audited |
|---|---|
| `/` | ✅ |
| `/about` | ✅ |
| `/portfolio` | ✅ |
| `/events` | ✅ |
| `/contact` | ✅ |

---

## 🎯 Score Thresholds

| Category | Threshold | On fail |
|---|---|---|
| Performance | ≥ 70 | Warning |
| Accessibility | ≥ 80 | Error |
| Best Practices | ≥ 80 | Warning |
| SEO | ≥ 90 | Warning |

---

## ⚙️ CI/CD Pipeline

Tests are triggered automatically by [GeorgeT88/manuelaklenke-web](https://github.com/GeorgeT88/manuelaklenke-web) after every push to `main`, once the Vercel production deployment is confirmed live.

Tests can also be triggered manually from **Actions → Lighthouse CI → Run workflow**, and run on a nightly schedule at **07:00 UTC**.

---

## 🏷️ Run Name Convention

| Trigger | Run name |
|---|---|
| Push via app repo | `Lighthouse CI — triggered by Vercel deploy` |
| Manual | `Lighthouse CI — manual run` |
| Nightly schedule (07:00 UTC) | `Lighthouse CI — nightly run` |
