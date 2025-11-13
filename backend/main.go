package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type Message struct {
    Text string `json:"text"`
}

func handler(w http.ResponseWriter, r *http.Request) {
    msg := Message{Text: "Bienvenue dans l'application Go + React ! 🚀"}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(msg)
}

func main() {
    http.HandleFunc("/api/hello", handler)
    log.Println("Serveur Go en écoute sur le port 8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
