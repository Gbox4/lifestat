const express = require("express")
const app = express()
const port = process.env.LS_PORT || 5050
const cors = require("cors")
const path = require("path")

const { readFileSync } = require("fs")
const { Client } = require("ssh2")

// Middleware
app.use(cors())

// Paths
app.get("/rand", (req, res) => {
    res.send(Math.random().toString())
})

app.get("/router", (req, res) => {
    console.log("request recieved")
    const conn = new Client()
    let rawData = ""
    conn.on("ready", () => {
        conn.exec("arp -a", (err, stream) => {
            if (err) throw err
            stream
                .on("close", (code, signal) => {
                    let output = []
                    
                    rawData = rawData.split('\n')
                    rawData.forEach(element => {
                        if (element !== "" && element[0] !== "?") {
                            if (process.env.LS_ROUTER_REPLACE) {
                                element = element.replaceAll(process.env.LS_ROUTER_REPLACE, '')
                            }
                            let words = element.split(' ')

                            output.push({name: words[0], address: words[1].slice(1, words[1].length-1)})
                        }
                    });

                    res.json(output)
                    conn.end()
                })
                .on("data", (data) => {
                    rawData += data
                })
                .stderr.on("data", (data) => {
                    console.log("STDERR: " + data)
                })
        })
    }).connect({
        host: process.env.LS_ROUTER_HOST,
        port: process.env.LS_ROUTER_PORT,
        username: process.env.LS_ROUTER_USERNAME,
        privateKey: readFileSync(process.env.LS_ROUTER_KEY),
    })
})

app.use(express.static("public"))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})

// Start server
app.listen(port, () => {
    console.log(`Server is up at http://localhost:${port}`)
})
