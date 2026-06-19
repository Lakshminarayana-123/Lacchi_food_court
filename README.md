# Lacchi Food Court — Backend API

A backend for the `lacchi_v2.html` food court page. It replaces the page's
`localStorage`-only storage with a real Node.js + Express API backed by
SQLite, covering:

- **Saving orders** — every order placed from the menu page or POS screen
- **Storing users** — staff (POS login) and customers (order history)
- **Managing food items** — the menu, with create/update/disable for staff
- **Processing payments** — recording Cash / UPI / Card against each order
  (no external payment gateway — this just logs how the order was paid)

---

## 1. Setup

Requires Node.js 18+.

```bash
cd lacchi-backend
npm install
cp .env.example .env       # edit JWT_SECRET to something random before real use
npm run seed                # creates the menu items + a default staff login
npm start                   # starts the API on http://localhost:4000
```

Default staff login (created by `npm run seed`):
```
email:    admin@lacchi.local
password: lacchi123
```
Change this password (or create a new staff account and delete this one)
before using this anywhere beyond your own machine.

Use `npm run dev` instead of `npm start` while developing — it restarts
automatically when you edit a file.

### Verify it's running
```bash
curl http://localhost:4000/api/health
```

---

## 2. Project structure

```
lacchi-backend/
├── server.js              # Express app entry point
├── db/
│   ├── database.js        # SQLite connection + table schema
│   └── seed.js             # one-time menu + admin seed script
├── middleware/
│   └── auth.js             # JWT verification (requireAuth, requireStaff)
├── routes/
│   ├── users.js             # signup, login, profile, order history
│   ├── menu.js               # food items CRUD
│   ├── orders.js              # placing/listing/updating orders
│   └── payments.js            # recording payment per order
├── package.json
└── .env.example
```

The database is a single file: `db/lacchi.db` (created automatically on
first run). Delete it any time to start fresh — `npm run seed` will rebuild
the menu and admin account.

---

## 3. Authentication

Staff and customers both log in the same way and get a JWT back:

```bash
curl -X POST http://localhost:4000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"identifier":"admin@lacchi.local","password":"lacchi123"}'
```

Response:
```json
{ "user": { "id": 1, "role": "staff", "name": "Admin", ... }, "token": "eyJ..." }
```

Send the token on protected routes:
```
Authorization: Bearer eyJ...
```

Routes are split into three trust levels:
- **Public** — anyone can call (browsing the menu, placing a walk-in order)
- **`requireAuth`** — any logged-in user (staff or customer)
- **`requireAuth` + `requireStaff`** — staff only (managing orders/menu)

---

## 4. API reference

### Users
| Method | Route                  | Auth        | Purpose                              |
|--------|------------------------|-------------|----------------------------------------|
| POST   | `/api/users/signup`    | —           | Create a staff or customer account     |
| POST   | `/api/users/login`     | —           | Log in, get a JWT                      |
| GET    | `/api/users/me`        | any user    | Your own profile                       |
| GET    | `/api/users/me/orders` | any user    | Your own order history                 |
| GET    | `/api/users?role=`     | staff       | List all users, optionally by role     |

### Menu (food items)
| Method | Route             | Auth  | Purpose                                  |
|--------|-------------------|-------|--------------------------------------------|
| GET    | `/api/menu`       | —     | List items (`?category=rice/snacks/drinks`)|
| GET    | `/api/menu/:id`   | —     | One item                                   |
| POST   | `/api/menu`       | staff | Add a new item                             |
| PUT    | `/api/menu/:id`   | staff | Update price/name/availability/etc.        |
| DELETE | `/api/menu/:id`   | staff | Mark unavailable (`?hard=true` to delete)  |

### Orders
| Method | Route                      | Auth        | Purpose                                |
|--------|----------------------------|-------------|------------------------------------------|
| POST   | `/api/orders`              | optional*   | Place an order                          |
| GET    | `/api/orders`              | staff       | List all orders (`?status=Pending`)     |
| GET    | `/api/orders/stats`        | staff       | Totals for the stat cards               |
| GET    | `/api/orders/:id`          | any user    | One order (owner or staff only)         |
| PATCH  | `/api/orders/:id/status`   | staff       | Set status: Pending / Done / Cancelled  |
| DELETE | `/api/orders/:id`          | staff       | Delete one order                        |
| DELETE | `/api/orders`              | staff       | Clear all orders ("Clear Day" button)   |

\* If you send a customer's `Authorization` header, the order is linked to
their account automatically; otherwise it's saved as a walk-in order, same
as the original page's default behavior.

**Place an order example:**
```bash
curl -X POST http://localhost:4000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
        "customerName": "Ravi",
        "tableNo": "5",
        "items": [
          { "name": "Chicken Biryani", "qty": 2 },
          { "name": "Mango Lassi", "qty": 1 }
        ],
        "payment": { "method": "UPI" }
      }'
```

### Payments
| Method | Route                          | Auth  | Purpose                              |
|--------|--------------------------------|-------|----------------------------------------|
| POST   | `/api/payments`                | —     | Record payment for an order            |
| GET    | `/api/payments/:orderId`       | user  | View payment for an order              |
| PATCH  | `/api/payments/:orderId/refund`| staff | Mark a payment as refunded             |
| GET    | `/api/payments`                | staff | Totals by method (Cash/UPI/Card)       |

---

## 5. Connecting this to `lacchi_v2.html`

The HTML file currently keeps everything in memory + `localStorage`
(`saveData()` / `loadData()`, the `MENU` constant, `orders`/`cart` arrays).
To wire it to this backend:

1. Replace the hardcoded `MENU` array with a `fetch('/api/menu')` call on page load.
2. Replace `saveData()`/`loadData()` with calls to `/api/orders` (POST to save,
   GET to load — staff token required for the GET).
3. In `placeOrder()`, instead of pushing into the local `orders` array, POST
   the cart to `/api/orders` and use the returned order's `bill_no` instead
   of the local `billCounter`.
4. Add a small login form for staff that calls `/api/users/login` and stores
   the returned token (e.g. in a JS variable — not `localStorage`, to keep
   sessions tab-scoped) for use in the `Authorization` header on POS calls.

I can wire these changes directly into the HTML file if you'd like — just say so.

---

## 6. Notes & next steps

- Prices are stored as whole-rupee integers, matching the frontend's `₹` display.
- Payments are **recorded, not processed** — there's no card/UPI gateway
  integration. Swapping in a real one later (e.g. Razorpay) would mean
  replacing the body of `POST /api/payments` with a gateway call and
  storing its transaction ID instead.
- This is set up for local/demo use (SQLite file, no HTTPS, simple JWT
  secret in `.env`). For real deployment you'd want HTTPS, a stronger
  secret-management approach, and rate limiting on the login route.
