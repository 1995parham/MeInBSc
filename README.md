<h1 align="center">
  MeInBSc
</h1>
<p align="center">
  <img src="public/assets/img/logo.png" width="100px">
</p>

<p align="center">
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/1995parham/meinbsc/deploy.yml?style=for-the-badge&logo=github">
</p>

## Introduction

I was BSc Student of the Amirkabir University of Technology from 2013 until 2017.
In our university at graduation's ceremony, friends write a memo for each other. In this repository, I have collected my diaries written by my friends.
Many of my friends and colleagues have migrated to other countries due to Iran's severe conditions. So I hope they are satisfied and successful wherever they are and know that I miss them so much.

## Thanks to all of my friends

* Iman Tabrizian
* Saman Fekri
* Ali Irani
* MohammadAmin Mohammadi
* Nastaran Moradzadeh
* Sarah Akhavan
* Mahtab Farrokh
* Yasaman MirMohammad
* Mohammad Rajabi
* Mohammad Javadi
* Fatemeh Hashemi
* Elahe Jalalpour
* Behrooz Farkiani
* Seyed Moahmmad Mehdi Ahmadpanah
* Mohammad Hossein Tavakoli Bina
* Autosa Ahasani
* Elnaz Soleimani
* Mohammad Mahdi Samiei
* Honeyeh Yazdizadeh
* Parnian Sabaei
* AmirMohammad Haghollahi
* Parham Malek Khayat
* Ali Yazdi
* Ismail Naderi
* Ali Mortazavi
* Sina Malakouti
* Amir Ahamad Habibi
* Amirhossein Bavand
* Shiva Zamani
* Sepide MNoroozi
* Pantea Habibi
* Shirin Shirazi
* Farzan Dehbashi
* Ramtin Shakeri
* Saleh Khazaei
* Negin Ganjali
* Ehsan Edalat

## Development
This site is built with [Astro](https://astro.build). Each memory lives as a Markdown file in
`src/content/memories/` with `title`/`author` front-matter (and optional `image`/`video`).

```sh
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # production build into dist/
```

Pushing to `main` builds and publishes the site to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
