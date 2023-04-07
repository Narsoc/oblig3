package com.example.oblig3;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class Controller {
    ArrayList<Billett> billetter = new ArrayList<>();

    @GetMapping("/billetter")
    public ArrayList<Billett> visBilletter(){
        return billetter;
    }

    @PostMapping("/billetter")
    public void leggTilBillett(Billett billett) {
        System.out.println("kjøp billett: " + billett);
        billetter.add(billett);
    }

    @DeleteMapping("/billetter")
    public void slettBillett(){
        billetter.clear();
    }
}
