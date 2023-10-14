const { createClient } = require('@supabase/supabase-js')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const supabaseUrl = 'https://upqeefkzpseklypzxhjt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcWVlZmt6cHNla2x5cHp4aGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMjM5OTcsImV4cCI6MjAxMjc5OTk5N30.TLiVkIy9cIw4dFqNz3gvGknmr-4nusL60Uxp7wADgKw'
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/web/index.html'));
})

app.get('/arts', (req, res) => {
    res.sendFile(path.join(__dirname, '/web/arts.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/courses', async (req, res) => {
    const { data, error } = await supabase.from('course').select()
    res.send(data)
})

app.get('/majors', async (req, res) => {
    const { data, error } = await supabase.from('course').select()
    res.send(data)
})
