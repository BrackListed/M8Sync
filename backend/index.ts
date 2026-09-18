import "dotenv/config"
import express from "express"
import cors from "cors"
import { Pool } from "pg"
import { drizzle } from "drizzle-orm/node-postgres"
import servicem8 from '@api/servicem8';
const app = express()
const pool = new Pool({connectionString: process.env.DATABASE_URL})
const db = drizzle(process.env.DATABASE_URL!)
const servicem8_api_key = process.env.SERVICEM8_API_KEY
// Dynamically handles your local dev or your deployed Render frontend URL
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173"


app.use(cors({
  origin: [allowedOrigin], 
  credentials: true
}))

app.use(express.json())


app.get("/test", (req, res) => {
  res.json({ message: "Backend is alive and connected!" })
  servicem8.auth(`${servicem8_api_key}`);
})

app.get("/get/jobs", async(req, res) => {
  let jobs = []
  servicem8.auth(`${servicem8_api_key}`);
  const result = await servicem8.listJobs({cursor: -1})
  res.json(result.data)
})

















const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

