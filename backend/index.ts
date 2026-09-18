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
  let cursor = -1
  const result = await fetch(`https://api.servicem8.com/api_1.0/job.json?cursor=${cursor}`, {
    headers: { "X-API-KEY": `${servicem8_api_key}` }
  })
  console.log(result.headers)
  res.json(await result.json())
})

app.get("/get/job-activities", async(req, res) => {
  const result = await fetch("https://api.servicem8.com/api_1.0/jobactivity.json", {
    headers: { "X-API-KEY": `${servicem8_api_key}` }
  })
  res.json(await result.json())
})

















const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

