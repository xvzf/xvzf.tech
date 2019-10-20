package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gobuffalo/packr"
	"github.com/gorilla/handlers"
)

func main() {
	box := packr.NewBox("./dist")

	http.Handle("/", http.FileServer(box))
	err := http.ListenAndServe(":3000", handlers.LoggingHandler(os.Stdout, http.DefaultServeMux))
	if err != nil {
		log.Fatal("Could not serve")
	}
}
