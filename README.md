#### Live Link:

Netlify: https://bookvibe-ronouk.netlify.app/

Surge: https://bookvibe-ronouk.surge.sh

---

#### Project Overview

**Book Vibe** is a React-based web application designed for book enthusiasts to discover, track, and manage their reading collections. The app focuses on a clean user interface and persistent data management to ensure a seamless experience across browser sessions.

---

#### Core Features & Functionality

* **Dual-List Management** : The app maintains two distinct categories for books: a **Wishlist** for future reading and a **Read List** (Completed Books) for finished titles.
* **Mutual Exclusivity** : A custom logic ensures that a book cannot exist in both lists simultaneously. If a user marks a "Wishlist" book as "Read," the app automatically moves the entry from one category to the other.
* **Persistent Storage** : All user data is handled via a dedicated `localStorage.js` utility, ensuring that book selections remain saved even after a page refresh or browser restart.
* **Dynamic Sorting** : The "Listed Books" page includes functionality to sort collections by attributes such as rating or publishing year to help users organize their library.
